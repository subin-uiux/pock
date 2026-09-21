import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LetterCardTimerText,
  LETTER_CARD_DEFAULT_TIMER,
} from "@/components/LetterCardTimerText";
import { getLetterProgress } from "@/lib/letter-progress";
import type {
  LetterCardMailbox,
  LetterCardSize,
  LetterCardVariant,
  LetterTheme,
} from "@/types";

interface CardProps {
  mailbox?: LetterCardMailbox;
  variant: LetterCardVariant;
  size?: LetterCardSize;
  target?: string;
  moreHref?: string;
  /** @deprecated sendDate+openDate로 계산 — 날짜 없을 때만 사용 */
  dday?: string;
  /** 타이머 시작값 "HH:MM:SS" — variant="timer"일 때 실시간 감소 */
  timer?: string;
  title?: string;
  /** 개봉 예정일 `YYYY.MM.DD` — progress 게이지·D-day 계산 */
  openDate?: string;
  /** 보낸 날 `YYYY.MM.DD` — progress 게이지 시작 */
  sendDate?: string;
  receiver?: string;
  sender?: string;
  /** open 카드 메타 라인 — 없으면 제목/개봉일·받은일시/수신자·발신인 조합 */
  lines?: string[];
  thumbSrc?: string;
  /** @deprecated sendDate+openDate로 계산 — 날짜 없을 때만 사용 */
  filledBlocks?: number;
  totalBlocks?: number;
  /** 보관함 잠김 · 초성 보기 결제 여부 (false면 코인 아이콘) */
  hintPaid?: boolean;
  theme?: LetterTheme;
  imageSrc?: string;
  onMoreClick?: () => void;
  onHintClick?: () => void;
  /** 선물 상자 클릭 — 개봉 애니 시작 전 (선택) */
  onGiftClick?: () => void;
  /** 선물 상자 개봉 애니 종료 */
  onGiftOpened?: () => void;
}

const GIFT_OPEN_MS = 1350;

const GIFT_PIXELS = [
  { x: "8%", y: "18%", color: "#ff5a5a", delay: "0ms", kind: "plus" },
  { x: "88%", y: "22%", color: "#5ec8ff", delay: "40ms", kind: "sq" },
  { x: "18%", y: "78%", color: "#ffe14a", delay: "80ms", kind: "sq" },
  { x: "78%", y: "72%", color: "#3b5bdb", delay: "50ms", kind: "plus" },
  { x: "50%", y: "10%", color: "#fff", delay: "20ms", kind: "sq" },
  { x: "12%", y: "48%", color: "#7af0ff", delay: "100ms", kind: "plus" },
  { x: "90%", y: "55%", color: "#ff7ab8", delay: "60ms", kind: "sq" },
  { x: "42%", y: "88%", color: "#5ec8ff", delay: "120ms", kind: "plus" },
  { x: "65%", y: "14%", color: "#ffe14a", delay: "30ms", kind: "sq" },
  { x: "30%", y: "30%", color: "#3b5bdb", delay: "90ms", kind: "sq" },
  { x: "70%", y: "40%", color: "#fff", delay: "70ms", kind: "plus" },
  { x: "55%", y: "68%", color: "#ff5a5a", delay: "110ms", kind: "sq" },
] as const;

function LetterCardTimerStatus({ initial }: { initial: string }) {
  return (
    <div className="letter-card__status letter-card__status--timer">
      <LetterCardTimerText initial={initial} />
    </div>
  );
}

function LetterCardProgressStatus({
  filledBlocks,
  totalBlocks,
  dday,
}: {
  filledBlocks: number;
  totalBlocks: number;
  dday: string;
}) {
  return (
    <div className="letter-card__status letter-card__status--progress">
      <div className="letter-card__meter" aria-hidden="true">
        {Array.from({ length: totalBlocks }, (_, i) => (
          <span
            key={i}
            className={
              i < filledBlocks
                ? "letter-card__block"
                : "letter-card__block letter-card__block--empty"
            }
          />
        ))}
      </div>
      <span className="letter-card__dday">{dday}</span>
    </div>
  );
}

function LetterCardHintButton({
  hintPaid,
  onClick,
}: {
  hintPaid: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="letter-card__reward"
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {hintPaid ? null : (
        <img
          className="letter-card__coin"
          src="/assets/images/coin.svg"
          alt=""
          width={13}
          height={10}
        />
      )}
      <span>초성 보기</span>
    </button>
  );
}

export function Card({
  mailbox = "sent",
  variant,
  size = "mo",
  target = "Text",
  moreHref = "#",
  dday: ddayProp,
  timer = LETTER_CARD_DEFAULT_TIMER,
  title,
  openDate,
  sendDate,
  receiver,
  sender,
  lines,
  thumbSrc,
  filledBlocks: filledBlocksProp,
  totalBlocks = 10,
  hintPaid = false,
  theme,
  imageSrc,
  onMoreClick,
  onHintClick,
  onGiftClick,
  onGiftOpened,
}: CardProps) {
  const isReceived = mailbox === "received";
  const isOpen = variant === "open";
  const isGift = variant === "gift";
  const previewSrc = thumbSrc ?? imageSrc;
  const [giftOpening, setGiftOpening] = useState(false);
  const openClass = [
    "letter-card",
    "letter-card--open",
    `letter-card--${size}`,
    theme ? `letter-card--${theme}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const showMore = !isGift && (mailbox === "sent" || isOpen);
  const showHint =
    isReceived && (variant === "progress" || variant === "timer");
  const isClickable = Boolean(onMoreClick) && !isGift;

  const progress =
    variant === "progress" && sendDate && openDate
      ? getLetterProgress(sendDate, openDate)
      : null;
  const filledBlocks = progress?.filledBlocks ?? filledBlocksProp ?? 0;
  const progressTotal = progress?.totalBlocks ?? totalBlocks;
  const dday = progress?.dday ?? ddayProp ?? "D-?";

  const openDateLine = isReceived
    ? `받은일시: ${openDate ?? "2026.09.01"}`
    : `개봉일: ${openDate ?? "2026.09.01"}`;
  const personLine = isReceived
    ? `발신인: ${sender ?? target}`
    : `수신자: ${receiver ?? target}`;
  const openLines =
    lines ??
    ([
      `제목: ${title ?? "Text"}`,
      openDateLine,
      personLine,
    ] as const);

  useEffect(() => {
    if (!giftOpening) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ms = reduced ? 0 : GIFT_OPEN_MS;
    const timerId = window.setTimeout(() => {
      onGiftOpened?.();
    }, ms);
    return () => window.clearTimeout(timerId);
    // onGiftOpened는 개봉 시작 시점 콜백만 사용 (의존성 제외)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [giftOpening]);

  if (isGift) {
    const startOpen = () => {
      if (giftOpening) return;
      onGiftClick?.();
      setGiftOpening(true);
    };

    return (
      <article
        className={[
          "letter-card",
          "letter-card--open",
          "letter-card--gift",
          `letter-card--${size}`,
          giftOpening ? "letter-card--gift-opening" : "",
          theme ? `letter-card--${theme}` : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label="새 보관함 카드"
      >
        <div className="letter-card__open">
          {previewSrc ? (
            <img
              className="letter-card__thumb"
              src={previewSrc}
              alt=""
              width={size === "tb" ? 120 : 90}
              height={size === "tb" ? 150 : 120}
            />
          ) : (
            <div className="letter-card__thumb" aria-hidden="true" />
          )}
          <div className="letter-card__meta">
            {openLines.map((line) => (
              <p className="letter-card__line" key={line}>
                {line}
              </p>
            ))}
          </div>
        </div>
        <span className="letter-card__more" aria-hidden="true">
          전체보기 &gt;
        </span>

        <button
          type="button"
          className="letter-card__gift-hit"
          aria-label="선물 상자 열기"
          disabled={giftOpening}
          onClick={startOpen}
        />

        <div className="letter-card__gift-veil" aria-hidden="true" />

        <div className="letter-card__gift-box" aria-hidden="true">
          <img
            className="letter-card__gift-image"
            src="/assets/images/letter/letter_Before-opening.webp"
            alt=""
            width={960}
            height={620}
          />
        </div>

        {giftOpening ? (
          <div className="letter-card__gift-pixels" aria-hidden="true">
            {GIFT_PIXELS.map((pixel, i) => (
              <span
                key={i}
                className={`letter-card__gift-pixel letter-card__gift-pixel--${pixel.kind}`}
                style={{
                  left: pixel.x,
                  top: pixel.y,
                  backgroundColor: pixel.color,
                  animationDelay: pixel.delay,
                  color: pixel.color,
                }}
              />
            ))}
          </div>
        ) : null}
      </article>
    );
  }

  const status = (
    <>
      {variant === "progress" ? (
        <LetterCardProgressStatus
          filledBlocks={filledBlocks}
          totalBlocks={progressTotal}
          dday={dday}
        />
      ) : null}
      {variant === "timer" ? (
        <LetterCardTimerStatus initial={timer} />
      ) : null}
      {variant === "unopened" ? (
        <div className="letter-card__status letter-card__status--unopened">
          미오픈
        </div>
      ) : null}
    </>
  );

  return (
    <article
      className={
        [
          isOpen
            ? openClass
            : `letter-card letter-card--locked letter-card--${size}`,
          isClickable ? "letter-card--clickable" : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      onClick={isClickable ? onMoreClick : undefined}
    >
      {showMore ? (
        onMoreClick ? (
          <button
            className="letter-card__more"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onMoreClick();
            }}
          >
            전체보기 &gt;
          </button>
        ) : (
          <Link className="letter-card__more" to={moreHref}>
            전체보기 &gt;
          </Link>
        )
      ) : null}

      {isOpen ? (
        <div className="letter-card__open">
          {previewSrc ? (
            <img
              className="letter-card__thumb"
              src={previewSrc}
              alt=""
              width={size === "tb" ? 120 : 90}
              height={size === "tb" ? 150 : 120}
            />
          ) : (
            <div className="letter-card__thumb" aria-hidden="true" />
          )}
          <div className="letter-card__meta">
            {openLines.map((line) => (
              <p className="letter-card__line" key={line}>
                {line}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="letter-card__body">
          <span className="letter-card__lock" aria-hidden="true">
            <img
              className="letter-card__lock-image"
              src="/assets/images/letter/letter-lock-icon.png"
              alt=""
              width={40}
              height={40}
            />
          </span>
          <p className="letter-card__target">
            {isReceived ? "From." : "To."}
            {target}
          </p>

          {showHint ? (
            <div className="letter-card__status-group">
              {status}
              <LetterCardHintButton hintPaid={hintPaid} onClick={onHintClick} />
            </div>
          ) : (
            status
          )}
        </div>
      )}
    </article>
  );
}

export { LetterCardTimerText } from "@/components/LetterCardTimerText";
