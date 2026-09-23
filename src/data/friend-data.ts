import { homeFriends } from "@/data/home-friends";
import type { PockUser } from "@/types";

/**
 * 가상 친구 목록 — 홈 친구목록과 동일
 * 캐릭터·옷·배경은 시안 확정 전 임시 매칭
 */
export const friendItems: PockUser[] = homeFriends.map((friend, index) => ({
  id: `home-friend-${index + 1}`,
  name: friend.name,
  profileImage:
    friend.character === "boy"
      ? "/assets/images/setting/boy.svg"
      : "/assets/images/setting/girl.svg",
  gender: friend.character === "boy" ? "male" : "female",
  character: friend.character,
  outfit: friend.outfit,
  background: friend.background,
}));
