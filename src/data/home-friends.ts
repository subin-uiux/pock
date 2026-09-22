import type {
  BackgroundId,
  CharacterId,
  OutfitId,
} from "@/lib/profile-setup";

export interface HomeFriend {
  name: string;
  character: CharacterId;
  outfit: OutfitId;
  background: BackgroundId;
}

/**
 * 홈 메인 — 친구목록 샘플
 * 캐릭터·옷·배경은 시안 확정 전 임시 매칭
 */
export const homeFriends: HomeFriend[] = [
  {
    name: "민수",
    character: "boy",
    outfit: "boy-hood",
    background: "blue",
  },
  {
    name: "교니",
    character: "girl",
    outfit: "girl-school",
    background: "pink",
  },
  {
    name: "지우",
    character: "boy",
    outfit: "boy-jacket",
    background: "green",
  },
  {
    name: "하나",
    character: "girl",
    outfit: "girl-coat",
    background: "orange",
  },
  {
    name: "zl존킹킹",
    character: "boy",
    outfit: "boy-knit",
    background: "yellow",
  },
];
