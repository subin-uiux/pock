import type { LetterTheme } from "@/types";

export type LetterPaperUnlock = "free" | "ad" | "coin";

export interface LetterPaperOption {
  id: LetterTheme;
  unlock: LetterPaperUnlock;
  /** coin 잠금일 때 가격 */
  price: number;
}

/** 시안 그리드 순서 — normal 7 + special 5 */
export const LETTER_PAPER_OPTIONS: LetterPaperOption[] = [
  { id: "red", unlock: "free", price: 0 },
  { id: "orange", unlock: "free", price: 0 },
  { id: "yellow", unlock: "free", price: 0 },
  { id: "green", unlock: "free", price: 0 },
  { id: "blue", unlock: "free", price: 0 },
  { id: "purple", unlock: "free", price: 0 },
  { id: "pink", unlock: "free", price: 0 },
  { id: "rainbow", unlock: "ad", price: 0 },
  { id: "heart", unlock: "coin", price: 5 },
  { id: "star", unlock: "coin", price: 5 },
  { id: "stripe", unlock: "coin", price: 5 },
  { id: "clover", unlock: "coin", price: 5 },
];

export const LETTER_PAPER_FREE_IDS: LetterTheme[] = LETTER_PAPER_OPTIONS.filter(
  (item) => item.unlock === "free",
).map((item) => item.id);

export const DEFAULT_LETTER_PAPER: LetterTheme = "yellow";
