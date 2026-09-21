import { storage } from "@/lib/storage";

export type CharacterId = "boy" | "girl";

export type OutfitId =
  | "boy-hood"
  | "boy-jacket"
  | "boy-knit"
  | "girl-school"
  | "girl-skirt"
  | "girl-coat";

export type BackgroundId =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "pink";

export interface OutfitOption {
  id: OutfitId;
  label: string;
  src: string;
  /** 옷 원본 폭 — 캐릭터(106) 대비 스케일 */
  width: number;
  height: number;
}

export interface BackgroundOption {
  id: BackgroundId;
  label: string;
  /** Rainbow base hex */
  color: string;
}

interface ProfileSetupState {
  nickname: string | null;
  character: CharacterId | null;
  outfit: OutfitId | null;
  background: BackgroundId | null;
}

const KEY = "pock.profileSetup";

const DEFAULT_STATE: ProfileSetupState = {
  nickname: null,
  character: null,
  outfit: null,
  background: null,
};

/** 캐릭터 기본 — public/assets/images/character */
export const CHARACTER_BASE = {
  src: {
    boy: "/assets/images/character/boy-default.webp",
    girl: "/assets/images/character/girl-default.svg",
  },
  width: 106,
  height: 178,
} as const;

/** 옷 — public/assets/images/outfit */
export const BOY_OUTFITS: OutfitOption[] = [
  {
    id: "boy-hood",
    label: "후드",
    src: "/assets/images/outfit/boy-hood.webp",
    width: 88,
    height: 70,
  },
  {
    id: "boy-jacket",
    label: "자켓",
    src: "/assets/images/outfit/boy-jacket.webp",
    width: 88,
    height: 77,
  },
  {
    id: "boy-knit",
    label: "니트",
    src: "/assets/images/outfit/boy-knit.webp",
    width: 88,
    height: 70,
  },
];

export const GIRL_OUTFITS: OutfitOption[] = [
  {
    id: "girl-school",
    label: "교복",
    src: "/assets/images/outfit/girl-school.webp",
    width: 86,
    height: 66,
  },
  {
    id: "girl-skirt",
    label: "스커트",
    src: "/assets/images/outfit/girl-skirt.webp",
    width: 74,
    height: 67,
  },
  {
    id: "girl-coat",
    label: "코트",
    src: "/assets/images/outfit/girl-coat.webp",
    width: 84,
    height: 62,
  },
];

/** 배경 — Rainbow base 6색 (가이드, purple 제외) */
export const BACKGROUND_OPTIONS: BackgroundOption[] = [
  { id: "red", label: "빨강", color: "#ff3b30" },
  { id: "orange", label: "주황", color: "#ff9d00" },
  { id: "yellow", label: "노랑", color: "#fef60c" },
  { id: "green", label: "초록", color: "#35e875" },
  { id: "blue", label: "파랑", color: "#058aff" },
  { id: "pink", label: "분홍", color: "#ffdde9" },
];

/** base 50% → base 세로 그라데이션 (위: 50%, 아래: 100%) */
export function backgroundGradient(color: string): string {
  return `linear-gradient(180deg, ${color}80 0%, ${color} 100%)`;
}

export function getOutfitsForCharacter(character: CharacterId): OutfitOption[] {
  return character === "boy" ? BOY_OUTFITS : GIRL_OUTFITS;
}

export function getOutfitById(
  character: CharacterId,
  outfitId: OutfitId | null,
): OutfitOption | null {
  const list = getOutfitsForCharacter(character);
  return list.find((item) => item.id === outfitId) ?? list[0] ?? null;
}

export function getBackgroundById(
  backgroundId: BackgroundId | null,
): BackgroundOption {
  return (
    BACKGROUND_OPTIONS.find((item) => item.id === backgroundId) ??
    BACKGROUND_OPTIONS[0]
  );
}

export function getProfileSetup(): ProfileSetupState {
  return storage.get<ProfileSetupState>(KEY) ?? { ...DEFAULT_STATE };
}

export function setProfileNickname(nickname: string): void {
  const prev = getProfileSetup();
  storage.set(KEY, {
    ...prev,
    nickname: nickname.trim(),
  });
}

export function setProfileCharacter(character: CharacterId): void {
  const outfits = getOutfitsForCharacter(character);
  const prev = getProfileSetup();
  storage.set(KEY, {
    ...prev,
    character,
    outfit: outfits[0]?.id ?? null,
  });
}

export function setProfileOutfit(outfit: OutfitId): void {
  const prev = getProfileSetup();
  storage.set(KEY, {
    ...prev,
    outfit,
  });
}

export function setProfileBackground(background: BackgroundId): void {
  const prev = getProfileSetup();
  storage.set(KEY, {
    ...prev,
    background,
  });
}
