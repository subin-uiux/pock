import { friendItems } from "@/data/friend-data";
import { homeFriends, type HomeFriend } from "@/data/home-friends";
import { storage } from "@/lib/storage";
import type { PockUser } from "@/types";

const DELETED_KEY = "pock.deletedFriends";

function getDeletedFriendNames(): string[] {
  return storage.get<string[]>(DELETED_KEY) ?? [];
}

/** 친구 삭제 — 홈 친구목록·친구 관리·보내기 친구 선택에서 함께 빠짐 */
export function deleteFriend(name: string): void {
  const deleted = getDeletedFriendNames();
  if (deleted.includes(name)) return;
  storage.set(DELETED_KEY, [...deleted, name]);
}

/** 홈 친구목록 — 삭제한 친구 제외 */
export function getHomeFriends(): HomeFriend[] {
  const deleted = getDeletedFriendNames();
  return homeFriends.filter((friend) => !deleted.includes(friend.name));
}

/** 친구 관리·보내기 친구 선택 — 삭제한 친구 제외 */
export function getFriendItems(): PockUser[] {
  const deleted = getDeletedFriendNames();
  return friendItems.filter((friend) => !deleted.includes(friend.name));
}
