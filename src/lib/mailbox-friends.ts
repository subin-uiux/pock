import { homeFriends, type HomeFriend } from "@/data/home-friends";
import {
  RECEIVED_LOCKED_SAMPLES,
  RECEIVED_OPEN_SAMPLES,
  SENT_LOCKED_SAMPLES,
  SENT_OPEN_SAMPLES,
} from "@/data/pock-mailbox-samples";
import type { LetterCardMailbox } from "@/types";

const SELF_NAME = "나";

export type MailboxFriendEntry = {
  name: string;
  isSelf: boolean;
} & Partial<HomeFriend>;

/** 홈 친구목록과 동일 — 앞에 '나' */
export function getMailboxFriends(): MailboxFriendEntry[] {
  return [
    { name: SELF_NAME, isSelf: true },
    ...homeFriends.map((friend) => ({
      ...friend,
      isSelf: false,
    })),
  ];
}

/** 편지 필터용 이름 목록 */
export function getMailboxFriendNames(): string[] {
  return getMailboxFriends().map((friend) => friend.name);
}

/** 보관함(친구가 보낸) · 전송함(내가 보낸) 편지 수 — 잠김+열림 합계 */
export function countMailboxLetters(
  mailbox: LetterCardMailbox,
  friendName: string,
): number {
  const samples =
    mailbox === "received"
      ? [...RECEIVED_LOCKED_SAMPLES, ...RECEIVED_OPEN_SAMPLES]
      : [...SENT_LOCKED_SAMPLES, ...SENT_OPEN_SAMPLES];
  return samples.filter((item) => item.target === friendName).length;
}

export { SELF_NAME as MAILBOX_SELF_NAME };
