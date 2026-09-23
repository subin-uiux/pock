import type { LetterCardMailbox } from "@/types";

type FriendFilterMap = Partial<Record<LetterCardMailbox, string[]>>;

/** 이번 방문에서만 유지 — 새로고침 시 초기화 */
const sessionFilters: FriendFilterMap = {};

/** 예전 localStorage 키 제거 */
if (typeof window !== "undefined") {
  try {
    window.localStorage.removeItem("pock.mailbox.friendFilters");
  } catch {
    /* ignore */
  }
}

export function getMailboxFriendFilter(
  mailbox: LetterCardMailbox,
): string[] {
  return sessionFilters[mailbox] ?? [];
}

export function setMailboxFriendFilter(
  mailbox: LetterCardMailbox,
  names: string[],
): void {
  sessionFilters[mailbox] = names;
}

export function clearMailboxFriendFilter(mailbox: LetterCardMailbox): void {
  setMailboxFriendFilter(mailbox, []);
}
