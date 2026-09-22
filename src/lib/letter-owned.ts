import { LETTER_PAPER_FREE_IDS } from "@/data/letter-paper";
import { storage } from "@/lib/storage";
import type { LetterTheme } from "@/types";

const STORAGE_KEY = "pock.letterOwned";
export const LETTER_OWNED_CHANGE_EVENT = "pock:letter-owned-change";

function notify(): void {
  window.dispatchEvent(new Event(LETTER_OWNED_CHANGE_EVENT));
}

export function getOwnedLetterPapers(): LetterTheme[] {
  const saved = storage.get<LetterTheme[]>(STORAGE_KEY);
  if (!saved || saved.length === 0) {
    return [...LETTER_PAPER_FREE_IDS];
  }
  const merged = new Set<LetterTheme>([...LETTER_PAPER_FREE_IDS, ...saved]);
  return [...merged];
}

export function isLetterPaperOwned(id: LetterTheme): boolean {
  return getOwnedLetterPapers().includes(id);
}

export function unlockLetterPaper(id: LetterTheme): boolean {
  const owned = getOwnedLetterPapers();
  if (owned.includes(id)) return true;
  const next = [...owned, id];
  const ok = storage.set(STORAGE_KEY, next);
  if (ok) notify();
  return ok;
}
