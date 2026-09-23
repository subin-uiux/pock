import { homeFriends, type HomeFriend } from "@/data/home-friends";

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

export { SELF_NAME as MAILBOX_SELF_NAME };
