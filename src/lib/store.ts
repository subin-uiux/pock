import { letterItems } from "@/data/letter-data";
import { spendCoin } from "@/lib/coin";
import { storage } from "@/lib/storage";
import type { LetterItem } from "@/types";

const OWNED_KEY = "pock.ownedLetters";

export function getAllLetters(): LetterItem[] {
  return letterItems;
}

export function getLetterById(id: string): LetterItem | null {
  return letterItems.find((item) => item.id === id) ?? null;
}

export function getOwnedLetterIds(): string[] {
  const saved = storage.get<string[]>(OWNED_KEY);
  if (saved) return saved;

  const freeIds = letterItems.filter((item) => item.isFree).map((item) => item.id);
  storage.set(OWNED_KEY, freeIds);
  return freeIds;
}

export function isLetterOwned(letterId: string): boolean {
  return getOwnedLetterIds().includes(letterId);
}

export function purchaseLetter(letterId: string): {
  success: boolean;
  reason?: string;
  letter?: LetterItem;
} {
  const letter = getLetterById(letterId);
  if (!letter) return { success: false, reason: "not_found" };
  if (isLetterOwned(letterId)) return { success: false, reason: "already_owned" };

  if (!letter.isFree) {
    const spent = spendCoin(letter.price, `${letter.name} 구매`);
    if (!spent) return { success: false, reason: "insufficient_balance" };
  }

  const owned = getOwnedLetterIds();
  owned.push(letterId);
  storage.set(OWNED_KEY, owned);

  return { success: true, letter };
}
