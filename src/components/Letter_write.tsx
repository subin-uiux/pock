import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ClipboardEvent,
  type FormEvent,
  type MouseEvent,
} from "react";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { LetterPaperPicker } from "@/components/LetterPaperPicker";
import { Popup } from "@/components/Popup";
import { DEFAULT_LETTER_PAPER } from "@/data/letter-paper";
import { useCoin } from "@/hooks/useCoin";
import { useLetterCaret } from "@/hooks/useLetterCaret";
import { getProfileSetup } from "@/lib/profile-setup";
import type { LetterTheme, LetterWritePayload, PockUser } from "@/types";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
/** 편지 본문 최대 글자 수 */
const LETTER_CONTENT_MAX = 300;

/** 친구 선택 버튼 — 5글자 이상이면 앞 4글자 + 줄임표 */
function formatFriendLabel(name: string) {
  const trimmed = name.trim();
  if (trimmed.length < 5) return trimmed;
  return `${trimmed.slice(0, 4)}…`;
}

function getEditableText(el: HTMLElement) {
  return el.innerText.replace(/\r\n/g, "\n");
}

function placeCaretAtEnd(el: HTMLElement) {
  const selection = window.getSelection();
  if (!selection) return;
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function formatDotDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function parseDotDate(value: string): Date | null {
  const match = /^(\d{4})\.(\d{2})\.(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getFromNickname() {
  return getProfileSetup().nickname?.trim() || "";
}

export type Letter_writeTab = "paper" | "photo" | "date" | null;
export type { LetterWritePayload };

interface Letter_writeProps {
  size?: "mo" | "tb" | "pc";
  friend?: PockUser | null;
  onSend?: (payload: LetterWritePayload) => void;
  onSelectFriend?: () => void;
  /** 작성 내용이 있으면 true — 이탈 확인용 */
  onDirtyChange?: (dirty: boolean) => void;
}

export function Letter_write({
  size = "mo",
  friend = null,
  onSend,
  onSelectFriend,
  onDirtyChange,
}: Letter_writeProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const { balance } = useCoin();
  useLetterCaret(bodyRef, caretRef);

  const [from, setFrom] = useState(getFromNickname);
  const [writtenDate, setWrittenDate] = useState("");
  const [date, setDate] = useState(""); // 개봉일 — 미설정 시 빈 문자열
  const [paperTheme, setPaperTheme] = useState<LetterTheme>(DEFAULT_LETTER_PAPER);
  const [paperOpen, setPaperOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Letter_writeTab>(null);
  const [content, setContent] = useState("");
  const [sendConfirmOpen, setSendConfirmOpen] = useState(false);
  const [emptyContentOpen, setEmptyContentOpen] = useState(false);
  const [emptyDateOpen, setEmptyDateOpen] = useState(false);

  const today = useMemo(() => startOfDay(new Date()), []);
  /** 개봉일 선택 가능 시작 — 오늘 다음 날 */
  const minOpenDate = useMemo(() => {
    const next = new Date(today);
    next.setDate(next.getDate() + 1);
    return next;
  }, [today]);
  /** 개봉일 선택 가능 끝 — 오늘부터 1년 뒤 같은 날 */
  const maxOpenDate = useMemo(() => {
    const next = new Date(today);
    next.setFullYear(next.getFullYear() + 1);
    return next;
  }, [today]);
  const selectedDate = useMemo(() => parseDotDate(date), [date]);
  const [viewYear, setViewYear] = useState(() => today.getFullYear());
  const [viewMonth, setViewMonth] = useState(() => today.getMonth());
  const canGoNextMonth =
    new Date(viewYear, viewMonth + 1, 1).getTime() <= maxOpenDate.getTime();

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

  useEffect(() => {
    if (!dateOpen) return;
    const base = selectedDate ?? minOpenDate;
    setViewYear(base.getFullYear());
    setViewMonth(base.getMonth());
  }, [dateOpen, selectedDate, minOpenDate]);

  const calendarDays = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const startWeekday = first.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();
    const cells: {
      date: Date;
      day: number;
      outside: boolean;
    }[] = [];

    for (let i = startWeekday - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      cells.push({
        date: new Date(viewYear, viewMonth - 1, day),
        day,
        outside: true,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push({
        date: new Date(viewYear, viewMonth, day),
        day,
        outside: false,
      });
    }

    let nextDay = 1;
    while (cells.length < 42) {
      cells.push({
        date: new Date(viewYear, viewMonth + 1, nextDay),
        day: nextDay,
        outside: true,
      });
      nextDay += 1;
    }

    return cells;
  }, [viewYear, viewMonth]);

  const monthLabel = `${viewYear}.${String(viewMonth + 1).padStart(2, "0")}`;

  const shiftMonth = (delta: number) => {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  };

  const handlePickDay = (value: Date) => {
    const picked = startOfDay(value);
    // 오늘 포함 이전 · 1년 초과는 비활성
    if (picked.getTime() < minOpenDate.getTime()) return;
    if (picked.getTime() > maxOpenDate.getTime()) return;
    const next = formatDotDate(picked);
    setDate(next);
    setWrittenDate(next);
    setDateOpen(false);
    setActiveTab(null);
  };

  const openDatePicker = () => {
    setActiveTab("date");
    setDateOpen(true);
  };

  const closeDatePicker = () => {
    setDateOpen(false);
    setActiveTab(null);
  };

  const handleSendClick = () => {
    if (!friend) {
      onSelectFriend?.();
      return;
    }
    if (content.trim().length === 0) {
      setEmptyContentOpen(true);
      return;
    }
    if (date.trim().length === 0) {
      setEmptyDateOpen(true);
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

  const handleContentBeforeInput = (event: FormEvent<HTMLDivElement>) => {
    const native = event.nativeEvent as InputEvent;
    if (native.inputType.startsWith("delete")) return;

    const el = event.currentTarget;
    const selection = window.getSelection();
    const selectedLength =
      selection && !selection.isCollapsed && el.contains(selection.anchorNode)
        ? selection.toString().length
        : 0;
    const currentLength = getEditableText(el).length;
    const incoming = native.data?.length ?? 0;

    // insertFromPaste 등은 onPaste에서 처리
    if (native.inputType === "insertFromPaste") return;

    if (currentLength - selectedLength + incoming > LETTER_CONTENT_MAX) {
      event.preventDefault();
    }
  };

  const handleContentInput = (event: FormEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    let text = getEditableText(el);
    if (text.length > LETTER_CONTENT_MAX) {
      text = text.slice(0, LETTER_CONTENT_MAX);
      el.textContent = text;
      placeCaretAtEnd(el);
    }
    setContent(text);
  };

  /** 글 아래 빈 줄을 클릭/터치 — 그 줄까지 줄바꿈을 채우고 커서 이동 */
  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const text = getEditableText(el);
    if (text === "" || text === "\n") return;

    const lineHeight = parseFloat(window.getComputedStyle(el).lineHeight);
    if (!lineHeight) return;

    const range = document.createRange();
    range.selectNodeContents(el);
    const rects = range.getClientRects();
    const lastBottom =
      rects.length > 0
        ? Math.max(...Array.from(rects, (rect) => rect.bottom))
        : el.getBoundingClientRect().top;
    const gap = event.clientY - lastBottom;
    if (gap <= 0) return;

    const base = text.endsWith("\n") ? text.slice(0, -1) : text;
    const room = LETTER_CONTENT_MAX - base.length;
    const breaks = Math.min(Math.floor(gap / lineHeight) + 1, room);
    if (breaks <= 0) return;

    /* 끝의 줄바꿈만으로는 빈 줄이 그려지지 않아 <br>로 마지막 줄을 만든 뒤 그 앞에 커서 */
    const textNode = document.createTextNode(base + "\n".repeat(breaks));
    el.replaceChildren(textNode, document.createElement("br"));

    const selection = window.getSelection();
    if (selection) {
      const caretRange = document.createRange();
      caretRange.setStart(el, 1); /* <br> 바로 앞 — 커서 위치를 br 줄로 계산 */
      caretRange.collapse(true);
      selection.removeAllRanges();
      selection.addRange(caretRange);
    }
    setContent(getEditableText(el));
    el.dispatchEvent(new Event("input", { bubbles: true }));
  };

  const handleContentPaste = (event: ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const el = event.currentTarget;
    const paste = event.clipboardData
      .getData("text/plain")
      .replace(/\r\n/g, "\n");
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (!el.contains(range.commonAncestorContainer)) return;

    const before = getEditableText(el);
    const selectedLen = selection.toString().length;
    const room = Math.max(0, LETTER_CONTENT_MAX - (before.length - selectedLen));
    const insert = paste.slice(0, room);
    if (!insert) return;

    range.deleteContents();
    range.insertNode(document.createTextNode(insert));
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    let text = getEditableText(el);
    if (text.length > LETTER_CONTENT_MAX) {
      text = text.slice(0, LETTER_CONTENT_MAX);
      el.textContent = text;
      placeCaretAtEnd(el);
    }
    setContent(text);
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
            src="/assets/images/icons/signal.svg"
            alt=""
            width={18}
            height={12}
          />
          <div className="letter-write__coin">
            <img
              className="letter-write__coin-icon"
              src="/assets/images/coin/coin.svg"
              alt=""
              width={14}
              height={14}
            />
            <span>{balance} coin</span>
          </div>
        </div>

        <div className="letter-write__main">
          <div className="letter-write__top">
            <div className="letter-write__heading">
              <h4 className="letter-write__title">POCK 작성</h4>
              <button
                className="btn btn--action-text letter-write__friend"
                type="button"
                aria-label={friend ? friend.name : "친구 선택"}
                onClick={onSelectFriend}
              >
                {friend ? formatFriendLabel(friend.name) : "친구 선택"}
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
                  src="/assets/images/letter/letter-icon.svg"
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
                  src="/assets/images/icons/picture.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <span>사진</span>
              </button>
              <button
                className={
                  dateOpen
                    ? "btn btn--action-icon letter-write__tab letter-write__tab--active"
                    : "btn btn--action-icon letter-write__tab"
                }
                type="button"
                role="tab"
                aria-selected={dateOpen}
                onClick={() => {
                  if (dateOpen) {
                    closeDatePicker();
                    return;
                  }
                  openDatePicker();
                }}
              >
                <img
                  className="letter-write__tab-icon"
                  src="/assets/images/icons/release-date.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <span>개봉일</span>
              </button>
            </div>
          </div>

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
              >
                {imageUrl ? (
                  <img
                    className="letter-write__media-image"
                    src={imageUrl}
                    alt=""
                  />
                ) : (
                  <img
                    className="letter-write__media-icon"
                    src="/assets/images/icons/image.svg"
                    alt=""
                    aria-hidden="true"
                  />
                )}
              </button>
              <div
                className={
                  content === "" || content === "\n"
                    ? "letter-write__paper-body letter-write__paper-body--empty"
                    : "letter-write__paper-body"
                }
                ref={bodyRef}
                contentEditable
                role="textbox"
                aria-multiline="true"
                aria-label="편지 작성"
                aria-describedby="letter-write-content-limit"
                onBeforeInput={handleContentBeforeInput}
                onInput={handleContentInput}
                onPaste={handleContentPaste}
                onClick={handleContentClick}
                suppressContentEditableWarning
              />
              <span
                ref={caretRef}
                className="letter-write__caret"
                aria-hidden="true"
                hidden
              />
              {content === "" || content === "\n" ? (
                <span className="letter-write__placeholder" aria-hidden="true">
                  <span className="letter-write__placeholder-title">
                    제목을 입력하세요.
                  </span>
                  <span className="letter-write__placeholder-limit">
                    최대 {LETTER_CONTENT_MAX}자
                  </span>
                </span>
              ) : null}
              <span id="letter-write-content-limit" className="visually-hidden">
                최대 {LETTER_CONTENT_MAX}자
              </span>
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
                dateTime={writtenDate ? writtenDate.replace(/\./g, "-") : undefined}
                aria-label="개봉일"
              >
                {writtenDate || "개봉일 선택"}
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

      {dateOpen ? (
        <div
          className="popup-layer"
          role="dialog"
          aria-modal="true"
          aria-label="날짜설정"
        >
          <DimmedOverlay open onClick={closeDatePicker} />
          <article className="letter-write-cal-popup">
            <header className="pock-window__bar">
              <h2 className="pock-window__title">개봉일</h2>
              <div className="pock-window__actions">
                <span
                  className="pock-window__control pock-window__control--min"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="pock-window__control pock-window__control--close"
                  aria-label="닫기"
                  onClick={closeDatePicker}
                >
                  <img
                    className="pock-window__control-icon"
                    src="/assets/images/icons/heart.svg"
                    alt=""
                    width={9}
                    height={7}
                  />
                </button>
              </div>
            </header>
            <div className="pock-window__rule" aria-hidden="true" />

            <div className="letter-write__cal">
              <div className="letter-write__cal-head">
                <p className="letter-write__cal-selected">
                  {selectedDate
                    ? `개봉일 ${formatDotDate(selectedDate)}`
                    : "개봉일을 선택해 주세요"}
                </p>
                <div className="letter-write__cal-nav">
                  <button
                    type="button"
                    className="letter-write__cal-nav-btn"
                    aria-label="이전 달"
                    onClick={() => shiftMonth(-1)}
                  >
                    ‹
                  </button>
                  <p className="letter-write__cal-month" aria-live="polite">
                    {monthLabel}
                  </p>
                  <button
                    type="button"
                    className="letter-write__cal-nav-btn"
                    aria-label="다음 달"
                    disabled={!canGoNextMonth}
                    onClick={() => shiftMonth(1)}
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="letter-write__cal-weekdays" aria-hidden="true">
                {WEEKDAYS.map((label) => (
                  <span
                    key={label}
                    className={
                      label === "일"
                        ? "letter-write__cal-weekday letter-write__cal-weekday--sun"
                        : label === "토"
                          ? "letter-write__cal-weekday letter-write__cal-weekday--sat"
                          : "letter-write__cal-weekday"
                    }
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div
                className="letter-write__cal-grid"
                role="grid"
                aria-label={`${viewYear}년 ${viewMonth + 1}월`}
              >
                {calendarDays.map((cell) => {
                  const cellDay = startOfDay(cell.date);
                  const isDisabled =
                    cellDay.getTime() < minOpenDate.getTime() ||
                    cellDay.getTime() > maxOpenDate.getTime();
                  const isToday = sameDay(cell.date, today);
                  const isSelected =
                    selectedDate !== null && sameDay(cell.date, selectedDate);
                  const className = [
                    "letter-write__cal-day",
                    cell.outside ? "letter-write__cal-day--outside" : "",
                    isToday ? "letter-write__cal-day--today" : "",
                    isSelected ? "letter-write__cal-day--selected" : "",
                    isDisabled ? "letter-write__cal-day--disabled" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <button
                      key={`${cell.date.getFullYear()}-${cell.date.getMonth()}-${cell.date.getDate()}`}
                      type="button"
                      className={className}
                      role="gridcell"
                      disabled={isDisabled}
                      aria-label={formatDotDate(cell.date)}
                      aria-current={isToday ? "date" : undefined}
                      aria-pressed={isSelected}
                      onClick={() => handlePickDay(cell.date)}
                    >
                      {cell.day}
                    </button>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      ) : null}

      <LetterPaperPicker
        open={paperOpen}
        selectedId={paperTheme}
        onClose={() => setPaperOpen(false)}
        onSelect={(id) => setPaperTheme(id)}
        onConfirm={(id) => {
          setPaperTheme(id);
          setPaperOpen(false);
        }}
      />

      <Popup
        open={emptyContentOpen}
        variant="info"
        size={popupSize}
        message={
          <>
            편지를 작성해주세요
          </>
        }
        confirmLabel="확인"
        onConfirm={() => setEmptyContentOpen(false)}
        onClose={() => setEmptyContentOpen(false)}
      />

      <Popup
        open={emptyDateOpen}
        variant="info"
        size={popupSize}
        message={
          <>
            날짜를 지정해주세요
          </>
        }
        confirmLabel="확인"
        onConfirm={() => {
          setEmptyDateOpen(false);
          openDatePicker();
        }}
        onClose={() => setEmptyDateOpen(false)}
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
