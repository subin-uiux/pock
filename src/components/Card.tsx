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
}

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
    <button type="button" className="letter-card__reward" onClick={onClick}>
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
}: CardProps) {
  const isReceived = mailbox === "received";
  const isOpen = variant === "open";
  const isGift = variant === "gift";
  const previewSrc = thumbSrc ?? imageSrc;
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

  const progress =
    variant === "progress" && sendDate && openDate
      ? getLetterProgress(sendDate, openDate)
      : null;
  const filledBlocks = progress?.filledBlocks ?? filledBlocksProp ?? 0;
  const progressTotal = progress?.totalBlocks ?? totalBlocks;
  const dday = progress?.dday ?? ddayProp ?? "D-?";

  const openDateLine = isReceived
    ? `받은일시: ${openDate ?? "20xx.00.00"}`
    : `개봉일: ${openDate ?? "20xx.00.00"}`;
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

  if (isGift) {
    return (
      <article
        className={`letter-card letter-card--gift letter-card--${size}`}
        aria-label="새 보관함 카드"
      >
        <img
          className="letter-card__gift-image"
          src="/assets/images/letter/letter_Before-opening.webp"
          alt=""
          width={960}
          height={620}
        />
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
        isOpen
          ? openClass
          : `letter-card letter-card--locked letter-card--${size}`
      }
    >
      {showMore ? (
        onMoreClick ? (
          <button className="letter-card__more" type="button" onClick={onMoreClick}>
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
