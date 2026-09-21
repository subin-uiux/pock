import { storage } from "@/lib/storage";
import type { LetterCardMailbox } from "@/types";

const KEY = "pock.mailbox.friendFilters";

type FriendFilterMap = Partial<Record<LetterCardMailbox, string[]>>;

export function getMailboxFriendFilter(
  mailbox: LetterCardMailbox,
): string[] {
  return storage.get<FriendFilterMap>(KEY)?.[mailbox] ?? [];
}

export function setMailboxFriendFilter(
  mailbox: LetterCardMailbox,
  names: string[],
): void {
  const prev = storage.get<FriendFilterMap>(KEY) ?? {};
  storage.set(KEY, { ...prev, [mailbox]: names });
}

export function clearMailboxFriendFilter(mailbox: LetterCardMailbox): void {
  setMailboxFriendFilter(mailbox, []);
}
