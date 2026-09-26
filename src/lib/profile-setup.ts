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
  /** SelectionBox 썸네일 — 없으면 src 사용 */
  thumbSrc?: string;
  /** 썸네일 원본 크기 */
  thumbWidth?: number;
  thumbHeight?: number;
  /** 옷 원본 폭 — 캐릭터(106) 대비 스케일 */
  width: number;
  height: number;
  /** true면 캐릭터 캔버스와 동일 크기로 전체 덧씌움 */
  fullFrame?: boolean;
}

export interface BackgroundOption {
  id: BackgroundId;
  label: string;
  /** Rainbow base hex — 그라데이션 하단 */
  color: string;
  /** Rainbow light hex — 그라데이션 상단 100% */
  lightColor: string;
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
    boy: "/assets/images/character/boy-default.svg",
    girl: "/assets/images/character/girl-default.svg",
  },
  width: 106,
  height: 180,
} as const;

/** 옷 — public/assets/images/outfit (덧씌움) · selection-box__* (선택 썸네일) */
export const BOY_OUTFITS: OutfitOption[] = [
  {
    id: "boy-hood",
    label: "후드",
    src: "/assets/images/outfit/boy-hood.svg",
    thumbSrc: "/assets/images/selection-box__hood.svg",
    thumbWidth: 130,
    thumbHeight: 148,
    width: 106,
    height: 178,
    fullFrame: true,
  },
  {
    id: "boy-jacket",
    label: "자켓",
    src: "/assets/images/outfit/boy-jacket.svg",
    thumbSrc: "/assets/images/selection-box__jacket.svg",
    thumbWidth: 130,
    thumbHeight: 148,
    width: 106,
    height: 178,
    fullFrame: true,
  },
  {
    id: "boy-knit",
    label: "니트",
    src: "/assets/images/outfit/boy-knit.svg",
    thumbSrc: "/assets/images/selection-box__knit.svg",
    thumbWidth: 130,
    thumbHeight: 148,
    width: 106,
    height: 178,
    fullFrame: true,
  },
];

export const GIRL_OUTFITS: OutfitOption[] = [
  {
    id: "girl-school",
    label: "교복",
    src: "/assets/images/outfit/girl-school.svg",
    thumbSrc: "/assets/images/selection-box__school.svg",
    thumbWidth: 130,
    thumbHeight: 148,
    width: 106,
    height: 178,
    fullFrame: true,
  },
  {
    id: "girl-skirt",
    label: "스커트",
    src: "/assets/images/outfit/girl-skirt.svg",
    thumbSrc: "/assets/images/selection-box__skirt.svg",
    thumbWidth: 130,
    thumbHeight: 148,
    width: 106,
    height: 178,
    fullFrame: true,
  },
  {
    id: "girl-coat",
    label: "코트",
    src: "/assets/images/outfit/girl-coat.svg",
    thumbSrc: "/assets/images/selection-box__coat.svg",
    thumbWidth: 130,
    thumbHeight: 148,
    width: 106,
    height: 178,
    fullFrame: true,
  },
];

/** 배경 — Rainbow base 6색 (가이드, purple 제외) */
export const BACKGROUND_OPTIONS: BackgroundOption[] = [
  { id: "red", label: "빨강", color: "#ff3b30", lightColor: "#ffd0d0" },
  { id: "orange", label: "주황", color: "#ff9d00", lightColor: "#ffe4d0" },
  { id: "yellow", label: "노랑", color: "#fef60c", lightColor: "#fff8d0" },
  { id: "green", label: "초록", color: "#35e875", lightColor: "#d0ffd6" },
  { id: "blue", label: "파랑", color: "#058aff", lightColor: "#c7ddff" },
  { id: "pink", label: "분홍", color: "#ffdde9", lightColor: "#ffe9f6" },
];

/** light 100% → base 100% 세로 그라데이션 */
export function backgroundGradient(bg: BackgroundOption): string {
  return `linear-gradient(180deg, ${bg.lightColor} 0%, ${bg.color} 100%)`;
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
  const prev = getProfileSetup();
  const outfits = getOutfitsForCharacter(character);
  const outfitStillValid =
    prev.outfit !== null && outfits.some((item) => item.id === prev.outfit);
  storage.set(KEY, {
    ...prev,
    character,
    outfit: outfitStillValid ? prev.outfit : null,
  });
}

export function setProfileOutfit(outfit: OutfitId | null): void {
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
