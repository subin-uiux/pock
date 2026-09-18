interface LetterProps {
  title: string;
  body: string;
  from: string;
  date: string;
  theme?: "rainbow" | "heart" | "star" | "stripe" | "clover";
  size?: "mo" | "tb";
  beforeOpen?: boolean;
  onClose?: () => void;
}

export function Letter({
  title,
  body,
  from,
  date,
  theme = "rainbow",
  size = "mo",
  beforeOpen = false,
  onClose,
}: LetterProps) {
  if (beforeOpen) {
    return (
      <article className={`letter letter--${size} letter--before-open`} aria-label="개봉 전 편지">
        <img
          className="letter__before-image"
          src="/assets/images/letter/letter_Before-opening.webp"
          alt=""
        />
      </article>
    );
  }

  return (
    <article className={`letter letter--${size} letter--${theme}`}>
      <button
        className="letter__expand"
        type="button"
        aria-label="닫기"
        onClick={onClose}
      >
        <img
          className="letter__expand-icon"
          src="/assets/images/pixelarticons_close.svg"
          alt=""
          width={18}
          height={18}
        />
      </button>
      <div className="letter__media" />
      <div className="letter__content">
        <div className="letter__text">
          <h4 className="letter__title">{title}</h4>
          <p className="letter__body">{body}</p>
        </div>
        <div className="letter__foot">
          <span className="letter__from">FROM. {from}</span>
          <time
            className="letter__date"
            dateTime={date.includes(".") ? date.replace(/\./g, "-") : date}
            aria-label="받은 날짜"
          >
            {date}
          </time>
        </div>
      </div>
    </article>
  );
}
