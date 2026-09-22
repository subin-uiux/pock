import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { LetterPaperPicker } from "@/components/LetterPaperPicker";
import { Popup } from "@/components/Popup";
import { DEFAULT_LETTER_PAPER } from "@/data/letter-paper";
import { getProfileSetup } from "@/lib/profile-setup";
import type { LetterTheme, LetterWritePayload, PockUser } from "@/types";

function formatWriteDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

function getFromNickname() {
  return getProfileSetup().nickname?.trim() || "";
}

export type Letter_writeTab = "paper" | "photo" | "date" | null;
export type { LetterWritePayload };

interface Letter_writeProps {
  coinCost?: number;
  size?: "mo" | "tb" | "pc";
  friend?: PockUser | null;
  onSend?: (payload: LetterWritePayload) => void;
  onSelectFriend?: () => void;
  /** 작성 내용이 있으면 true — 이탈 확인용 */
  onDirtyChange?: (dirty: boolean) => void;
}

export function Letter_write({
  coinCost = 10,
  size = "mo",
  friend = null,
  onSend,
  onSelectFriend,
  onDirtyChange,
}: Letter_writeProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [from, setFrom] = useState(getFromNickname);
  const [writtenDate] = useState(() => formatWriteDate());
  const [date, setDate] = useState(""); // 개봉일
  const [paperTheme, setPaperTheme] = useState<LetterTheme>(DEFAULT_LETTER_PAPER);
  const [paperOpen, setPaperOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Letter_writeTab>(null);
  const [content, setContent] = useState("");
  const [sendConfirmOpen, setSendConfirmOpen] = useState(false);

  const fromPlaceholder = from || "닉네임";
  const popupSize = size === "mo" ? "mo" : "tb";

  useEffect(() => {
    const profileFrom = getFromNickname();
    const dirty =
      content.trim().length > 0 ||
      imageUrl !== null ||
      friend !== null ||
      paperTheme !== DEFAULT_LETTER_PAPER ||
      date.trim().length > 0 ||
      from.trim() !== profileFrom;
    onDirtyChange?.(dirty);
  }, [content, imageUrl, friend, paperTheme, date, from, onDirtyChange]);

  const handleSendClick = () => {
    if (!friend) {
      onSelectFriend?.();
      return;
    }
    setSendConfirmOpen(true);
  };

  const handleSendConfirm = () => {
    setSendConfirmOpen(false);
    const lines = content.replace(/\r\n/g, "\n").split("\n");
    const title = lines[0] ?? "";
    const body = lines.slice(1).join("\n");
    onSend?.({
      title,
      body,
      from,
      date,
      letterId: paperTheme,
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
    `letter-write__paper--${paperTheme}`,
  ].join(" ");

  return (
    <>
      <article
        className={`letter-write letter-write--${size}`}
        aria-label="POCK 작성"
      >
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
            <div className="letter-write__heading">
              <h4 className="letter-write__title">POCK 작성</h4>
              <button
                className="btn btn--action-text letter-write__friend"
                type="button"
                onClick={onSelectFriend}
              >
                {friend ? friend.name : "친구 선택"}
              </button>
            </div>
            <div className="letter-write__tabs" role="tablist" aria-label="작성 옵션">
              <button
                className={
                  paperOpen
                    ? "btn btn--action-icon letter-write__tab letter-write__tab--active"
                    : "btn btn--action-icon letter-write__tab"
                }
                type="button"
                role="tab"
                aria-selected={paperOpen}
                onClick={() => setPaperOpen(true)}
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

          {activeTab === "date" ? (
            <div
              className="letter-write__panel"
              role="tabpanel"
              aria-label="개봉일 설정"
            >
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
            {friend ? (
              <p className="letter-write__to">To. {friend.name}</p>
            ) : null}
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
                  placeholder={fromPlaceholder}
                  aria-label="보내는 사람"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </label>
              <time
                className="letter-write__date"
                dateTime={writtenDate.replace(/\./g, "-")}
                aria-label="작성일"
              >
                {writtenDate}
              </time>
            </div>
          </div>
        </div>

        <Button
          variant="push"
          block
          className="letter-write__send"
          onClick={handleSendClick}
        >
          보내기
        </Button>
      </article>

      <LetterPaperPicker
        open={paperOpen}
        selectedId={paperTheme}
        onClose={() => setPaperOpen(false)}
        onConfirm={(id) => {
          setPaperTheme(id);
          setPaperOpen(false);
        }}
      />

      <Popup
        open={sendConfirmOpen}
        variant="info"
        size={popupSize}
        message={
          <>
            {friend?.name}님에게 POCK을
            <br />
            보내시겠습니까?
          </>
        }
        confirmLabel="확인"
        cancelLabel="취소"
        onConfirm={handleSendConfirm}
        onCancel={() => setSendConfirmOpen(false)}
        onClose={() => setSendConfirmOpen(false)}
      />
    </>
  );
}
