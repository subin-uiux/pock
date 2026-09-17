import { Link } from "react-router-dom";
import type { LetterCardVariant } from "@/types";

interface LetterCardProps {
  target: string;
  variant: LetterCardVariant;
  moreHref?: string;
  dday?: string;
  timer?: string;
  title?: string;
  openDate?: string;
  receiver?: string;
  filledBlocks?: number;
  totalBlocks?: number;
}

export function LetterCard({
  target,
  variant,
  moreHref = "#",
  dday,
  timer,
  title,
  openDate,
  receiver,
  filledBlocks = 7,
  totalBlocks = 10,
}: LetterCardProps) {
  const isOpen = variant === "open";

  return (
    <article
      className={`letter-card letter-card--${isOpen ? "open" : "locked"} letter-card--mo`}
    >
      <Link className="letter-card__more" to={moreHref}>
        전체보기 &gt;
      </Link>

      {isOpen ? (
        <div className="letter-card__open">
          <div className="letter-card__thumb" aria-hidden="true" />
          <dl className="letter-card__meta">
            <div className="letter-card__row">
              <dt className="letter-card__key">제목</dt>
              <dd className="letter-card__value">{title ?? "Text"}</dd>
            </div>
            <div className="letter-card__row">
              <dt className="letter-card__key">개봉일</dt>
              <dd className="letter-card__value">{openDate ?? "20xx.00.00"}</dd>
            </div>
            <div className="letter-card__row">
              <dt className="letter-card__key">수신자</dt>
              <dd className="letter-card__value">{receiver ?? "Text"}</dd>
            </div>
          </dl>
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
            <div className="letter-card__status letter-card__status--timer">
              {timer ?? "22:07:32"}
            </div>
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
