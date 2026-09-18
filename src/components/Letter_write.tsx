import { useRef, useState } from "react";
import { Button } from "@/components/Button";
import { getAllLetters } from "@/lib/store";
import type { LetterWritePayload, PockUser } from "@/types";

function formatWriteDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export type Letter_writeTab = "paper" | "photo" | "date" | null;
export type { LetterWritePayload };

interface Letter_writeProps {
  coinCost?: number;
  size?: "mo" | "tb" | "pc";
  friend?: PockUser | null;
  onSend?: (payload: LetterWritePayload) => void;
  onSelectFriend?: () => void;
}

export function Letter_write({
  coinCost = 10,
  size = "mo",
  friend = null,
  onSend,
  onSelectFriend,
}: Letter_writeProps) {
  const letters = getAllLetters();
  const fileRef = useRef<HTMLInputElement>(null);

  const [from, setFrom] = useState("나");
  const [writtenDate] = useState(() => formatWriteDate());
  const [date, setDate] = useState(""); // 개봉일
  const [letterId, setLetterId] = useState(letters[0]?.id ?? "letter-blue");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Letter_writeTab>(null);
  const [content, setContent] = useState("");

  const selectedLetter = letters.find((l) => l.id === letterId);

  const handleSend = () => {
    const lines = content.replace(/\r\n/g, "\n").split("\n");
    const title = lines[0] ?? "";
    const body = lines.slice(1).join("\n");
    onSend?.({
      title,
      body,
      from,
      date,
      letterId,
      imageUrl,
      friend,
    });
  };

  const handlePhotoPick = (file: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setActiveTab(null);
  };

  const paperClass = [
    "letter-write__paper",
    selectedLetter ? `letter-write__paper--${selectedLetter.id}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={`letter-write letter-write--${size}`} aria-label="POCK 작성">
      <div className="letter-write__status">
        <img
          className="letter-write__signal"
          src="/assets/images/Signal.svg"
          alt=""
          width={18}
          height={12}
        />
        <div className="letter-write__coin">
          <img
            className="letter-write__coin-icon"
            src="/assets/images/coin.svg"
            alt=""
            width={14}
            height={14}
          />
          <span>{coinCost} coin</span>
        </div>
      </div>

      <div className="letter-write__main">
        <div className="letter-write__top">
          <h4 className="letter-write__title">POCK 작성</h4>
          <button
            className="btn btn--action-text letter-write__friend"
            type="button"
            onClick={onSelectFriend}
          >
            {friend ? friend.name : "친구 선택"}
          </button>
          <div className="letter-write__tabs" role="tablist" aria-label="작성 옵션">
            <button
              className={
                activeTab === "paper"
                  ? "btn btn--action-icon letter-write__tab letter-write__tab--active"
                  : "btn btn--action-icon letter-write__tab"
              }
              type="button"
              role="tab"
              aria-selected={activeTab === "paper"}
              onClick={() =>
                setActiveTab((t) => (t === "paper" ? null : "paper"))
              }
            >
              <img
                className="letter-write__tab-icon"
                src="/assets/images/letter-icon.svg"
                alt=""
                width={16}
                height={16}
              />
              <span>편지지</span>
            </button>
            <button
              className={
                activeTab === "photo"
                  ? "btn btn--action-icon letter-write__tab letter-write__tab--active"
                  : "btn btn--action-icon letter-write__tab"
              }
              type="button"
              role="tab"
              aria-selected={activeTab === "photo"}
              onClick={() => {
                setActiveTab("photo");
                fileRef.current?.click();
              }}
            >
              <img
                className="letter-write__tab-icon"
                src="/assets/images/picture-icon.svg"
                alt=""
                width={16}
                height={16}
              />
              <span>사진</span>
            </button>
            <button
              className={
                activeTab === "date"
                  ? "btn btn--action-icon letter-write__tab letter-write__tab--active"
                  : "btn btn--action-icon letter-write__tab"
              }
              type="button"
              role="tab"
              aria-selected={activeTab === "date"}
              onClick={() =>
                setActiveTab((t) => (t === "date" ? null : "date"))
              }
            >
              <img
                className="letter-write__tab-icon"
                src="/assets/images/Release-date-icon.svg"
                alt=""
                width={16}
                height={16}
              />
              <span>개봉일</span>
            </button>
          </div>
        </div>

        {activeTab === "paper" ? (
          <div className="letter-write__panel" role="tabpanel" aria-label="편지지 선택">
            <ul className="letter-write__paper-list">
              {letters.map((letter) => (
                <li key={letter.id}>
                  <button
                    type="button"
                    className={
                      letter.id === letterId
                        ? "letter-write__paper-option letter-write__paper-option--active"
                        : "letter-write__paper-option"
                    }
                    onClick={() => {
                      setLetterId(letter.id);
                      setActiveTab(null);
                    }}
                  >
                    <img src={letter.preview} alt="" width={56} height={70} />
                    <span>{letter.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {activeTab === "date" ? (
          <div className="letter-write__panel" role="tabpanel" aria-label="개봉일 설정">
            <label className="letter-write__date-field">
              <span>개봉일</span>
              <input
                type="date"
                value={date.includes(".") ? "" : date}
                onChange={(e) => {
                  const v = e.target.value;
                  if (!v) {
                    setDate("");
                    return;
                  }
                  const [y, m, d] = v.split("-");
                  setDate(`${y}.${m}.${d}`);
                  setActiveTab(null);
                }}
              />
            </label>
          </div>
        ) : null}

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="visually-hidden"
          onChange={(e) => handlePhotoPick(e.target.files?.[0] ?? null)}
        />

        <div className={paperClass} role="group" aria-label="편지 작성">
          <div className="letter-write__compose">
            <button
              className="letter-write__media"
              type="button"
              aria-label="사진 추가"
              onClick={() => fileRef.current?.click()}
              style={
                imageUrl
                  ? {
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            />
            <div
              className="letter-write__paper-body"
              contentEditable
              role="textbox"
              aria-multiline="true"
              aria-label="편지 작성"
              onInput={(e) => setContent(e.currentTarget.innerText ?? "")}
              suppressContentEditableWarning
            />
          </div>
          <div className="letter-write__paper-foot">
            <label className="letter-write__from-field">
              <span className="letter-write__from-prefix">FROM.</span>
              <input
                className="letter-write__from"
                type="text"
                placeholder="아방이~*"
                aria-label="보내는 사람"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </label>
            <input
              className="letter-write__date"
              type="text"
              readOnly
              aria-label="작성일"
              value={writtenDate}
            />
          </div>
        </div>
      </div>

      <Button
        variant="push"
        block
        className="letter-write__send"
        onClick={handleSend}
      >
        보내기
      </Button>
    </article>
  );
}
