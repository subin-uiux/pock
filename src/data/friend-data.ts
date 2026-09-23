import type { PockUser } from "@/types";

/**
 * 가상 친구 목록 — Kakao 미연동
 * 캐릭터·옷·배경은 시안 확정 전 임시 매칭
 */
export const friendItems: PockUser[] = [
  {
    id: "user-002",
    name: "인천왕만두:3",
    profileImage: "/assets/images/setting/girl.svg",
    gender: "female",
    character: "girl",
    outfit: "girl-skirt",
    background: "pink",
  },
  {
    id: "user-003",
    name: "청량리짱돌",
    profileImage: "/assets/images/setting/boy.svg",
    gender: "male",
    character: "boy",
    outfit: "boy-knit",
    background: "blue",
  },
  {
    id: "user-004",
    name: "엄망이",
    profileImage: "/assets/images/setting/girl.svg",
    gender: "female",
    character: "girl",
    outfit: "girl-coat",
    background: "orange",
  },
];
