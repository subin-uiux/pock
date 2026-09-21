import { storage } from "@/lib/storage";

const STORAGE_KEY = "pock.hintPaid";

/** 초성 보기 구매 비용 */
export const HINT_COST = 5;

export function getHintPaidIds(): string[] {
  return storage.get<string[]>(STORAGE_KEY) ?? [];
}

export function isHintPaid(id: string, samplePaid = false): boolean {
  if (samplePaid) return true;
  return getHintPaidIds().includes(id);
}

export function markHintPaid(id: string): boolean {
  const ids = getHintPaidIds();
  if (ids.includes(id)) return true;
  return storage.set(STORAGE_KEY, [...ids, id]);
}
