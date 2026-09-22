import type { MailboxCardSample } from "@/data/pock-mailbox-samples";
import {
  calendarDaysBetween,
  parseLetterDate,
} from "@/lib/letter-progress";

export type MailboxTabId = "locked" | "open";
export type LockedSortId = "soon" | "longest";
export type OpenSortId = "recent" | "date";
export type MailboxSortId = LockedSortId | OpenSortId;

export interface MailboxSortOption {
  id: MailboxSortId;
  label: string;
}

/** 잠김 탭 */
export const LOCKED_SORT_OPTIONS: MailboxSortOption[] = [
  { id: "soon", label: "개봉 임박 순" },
  { id: "longest", label: "개봉일 먼 순" },
];

/** 열림 탭 */
export const OPEN_SORT_OPTIONS: MailboxSortOption[] = [
  { id: "recent", label: "최근 열린 순" },
  { id: "date", label: "날짜 순" },
];

export function defaultMailboxSort(tab: MailboxTabId): MailboxSortId {
  return tab === "locked" ? "soon" : "recent";
}

export function sortOptionsForTab(tab: MailboxTabId): MailboxSortOption[] {
  return tab === "locked" ? LOCKED_SORT_OPTIONS : OPEN_SORT_OPTIONS;
}

function sortDateMs(sample: MailboxCardSample): number | null {
  const raw = sample.openDate ?? sample.sendDate;
  if (!raw) return null;
  const date = parseLetterDate(raw);
  return date ? date.getTime() : null;
}

function remainingDays(sample: MailboxCardSample): number | null {
  /* 타이머 = 하루 미만 남음 → 개봉 임박 순에서 맨 앞 */
  if (sample.variant === "timer") return 0;
  if (!sample.openDate) return null;
  const open = parseLetterDate(sample.openDate);
  if (!open) return null;
  return calendarDaysBetween(new Date(), open);
}

function compareNullable(
  a: number | null,
  b: number | null,
  ascending: boolean,
): number {
  if (a === null && b === null) return 0;
  if (a === null) return 1; // 날짜 없음 → 뒤
  if (b === null) return -1;
  return ascending ? a - b : b - a;
}

function compareTimerSeconds(a: MailboxCardSample, b: MailboxCardSample): number {
  const parse = (raw?: string) => {
    if (!raw) return Number.POSITIVE_INFINITY;
    const parts = raw.split(":").map(Number);
    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) {
      return Number.POSITIVE_INFINITY;
    }
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  };
  return parse(a.timer) - parse(b.timer);
}

export function sortMailboxCards(
  cards: MailboxCardSample[],
  sortId: MailboxSortId,
): MailboxCardSample[] {
  const next = [...cards];
  const isLockedSort = sortId === "soon" || sortId === "longest";

  if (isLockedSort) {
    next.sort((a, b) => {
      const byDays = compareNullable(
        remainingDays(a),
        remainingDays(b),
        sortId === "soon",
      );
      if (byDays !== 0) return byDays;
      /* 같은 임박도(타이머끼리) → 남은 시간 짧은 순 */
      if (a.variant === "timer" && b.variant === "timer") {
        return compareTimerSeconds(a, b);
      }
      return 0;
    });
    return next;
  }

  /* 열림 탭 — 선물 상자 맨 위, 나머지는 개봉일 최신 순 */
  next.sort((a, b) => {
    const giftA = a.variant === "gift";
    const giftB = b.variant === "gift";
    if (giftA !== giftB) return giftA ? -1 : 1;

    return compareNullable(
      sortDateMs(a),
      sortDateMs(b),
      false, /* 최신 날짜 순 */
    );
  });
  return next;
}
