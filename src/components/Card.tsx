import { Link } from "react-router-dom";
import {
  LetterCardTimerText,
  LETTER_CARD_DEFAULT_TIMER,
} from "@/components/LetterCardTimerText";
import type { LetterCardVariant } from "@/types";

interface CardProps {
  target: string;
  variant: LetterCardVariant;
  moreHref?: string;
  dday?: string;
  /** 타이머 시작값 "HH:MM:SS" — variant="timer"일 때 실시간 감소 */
  timer?: string;
  title?: string;
  openDate?: string;
  receiver?: string;
  /** open 카드 메타 라인 — 없으면 제목/개봉일/수신자 조합 */
  lines?: string[];
  thumbSrc?: string;
  filledBlocks?: number;
  totalBlocks?: number;
}

function LetterCardTimerStatus({ initial }: { initial: string }) {
  return (
    <div className="letter-card__status letter-card__status--timer">
      <LetterCardTimerText initial={initial} />
    </div>
  );
}

export function Card({
  target,
  variant,
  moreHref = "#",
  dday,
  timer = LETTER_CARD_DEFAULT_TIMER,
  title,
  openDate,
  receiver,
  lines,
  thumbSrc,
  filledBlocks = 7,
  totalBlocks = 10,
}: CardProps) {
  const isOpen = variant === "open";
  const openLines =
    lines ??
    ([
      `제목: ${title ?? "Text"}`,
      `개봉일: ${openDate ?? "20xx.00.00"}`,
      `수신자: ${receiver ?? "Text"}`,
    ] as const);

  return (
    <article
      className={
        isOpen
          ? "letter-card letter-card--open"
          : "letter-card letter-card--locked letter-card--mo"
      }
    >
      <Link className="letter-card__more" to={moreHref}>
        전체보기 &gt;
      </Link>

      {isOpen ? (
        <div className="letter-card__open">
          {thumbSrc ? (
            <img
              className="letter-card__thumb"
              src={thumbSrc}
              alt=""
              width={90}
              height={120}
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
          <p className="letter-card__target">To.{target}</p>

          {variant === "progress" ? (
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
              <span className="letter-card__dday">{dday ?? "D-7"}</span>
            </div>
          ) : null}

          {variant === "timer" ? (
            <LetterCardTimerStatus initial={timer} />
          ) : null}

          {variant === "unopened" ? (
            <div className="letter-card__status letter-card__status--unopened">
              미오픈
            </div>
          ) : null}
        </div>
      )}
    </article>
  );
}

export { LetterCardTimerText } from "@/components/LetterCardTimerText";
