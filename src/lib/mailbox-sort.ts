import type { MailboxCardSample } from "@/data/pock-mailbox-samples";
import {
  calendarDaysBetween,
  parseLetterDate,
} from "@/lib/letter-progress";
import type { LetterCardMailbox } from "@/types";

export type ReceivedSortId = "soon" | "longest";
export type SentSortId = "recent" | "oldest";
export type MailboxSortId = ReceivedSortId | SentSortId;

export interface MailboxSortOption {
  id: MailboxSortId;
  label: string;
}

export const RECEIVED_SORT_OPTIONS: MailboxSortOption[] = [
  { id: "soon", label: "곧 열리는 순" },
  { id: "longest", label: "오래 남은 순" },
];

export const SENT_SORT_OPTIONS: MailboxSortOption[] = [
  { id: "recent", label: "최근 열린 순" },
  { id: "oldest", label: "오래된 순" },
];

export function defaultMailboxSort(
  mailbox: LetterCardMailbox,
): MailboxSortId {
  return mailbox === "received" ? "soon" : "recent";
}

function sortDateMs(sample: MailboxCardSample): number | null {
  const raw = sample.openDate ?? sample.sendDate;
  if (!raw) return null;
  const date = parseLetterDate(raw);
  return date ? date.getTime() : null;
}

function remainingDays(sample: MailboxCardSample): number | null {
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

export function sortMailboxCards(
  cards: MailboxCardSample[],
  mailbox: LetterCardMailbox,
  sortId: MailboxSortId,
): MailboxCardSample[] {
  const next = [...cards];

  if (mailbox === "received") {
    next.sort((a, b) =>
      compareNullable(
        remainingDays(a),
        remainingDays(b),
        sortId === "soon",
      ),
    );
    return next;
  }

  next.sort((a, b) =>
    compareNullable(sortDateMs(a), sortDateMs(b), sortId === "oldest"),
  );
  return next;
}
