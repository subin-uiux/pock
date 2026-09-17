import { pockItems } from "@/data/pock-data";
import { storage } from "@/lib/storage";
import type { LetterWritePayload, PockItem, PockStatus, PockUser } from "@/types";

export const POCK_STATUS = {
  LOCKED: "locked",
  OPENING: "opening",
  OPENED: "opened",
} as const;

const USER_SENT_KEY = "pock.userSent";
const ME: PockUser = {
  id: "user-001",
  name: "나",
  profileImage: "/assets/images/profile/profile-me.svg",
};

function normalizeOpenDate(raw: string): string {
  // "2026.12.25" | "2026-12-25" → "2026-12-25"
  const dotted = raw.trim().replace(/\./g, "-");
  if (/^\d{4}-\d{2}-\d{2}$/.test(dotted)) return dotted;
  return raw.trim();
}

export function getUserSentPocks(): PockItem[] {
  return storage.get<PockItem[]>(USER_SENT_KEY) ?? [];
}

export function saveUserSentPocks(items: PockItem[]): boolean {
  return storage.set(USER_SENT_KEY, items);
}

/** LetterWrite payload → 전송함 아이템으로 저장 */
export function addSentPockFromPayload(payload: LetterWritePayload): PockItem | null {
  if (!payload.friend) return null;

  const item: PockItem = {
    id: `pock-user-${Date.now()}`,
    type: "sent",
    sender: ME,
    receiver: payload.friend,
    message: payload.body,
    image: payload.imageUrl ?? "/assets/images/pock/pock-photo-001.svg",
    letter: payload.letterId,
    status: "locked",
    createdAt: new Date().toISOString(),
    openDate: normalizeOpenDate(payload.date),
    openTime: "09:00",
    hint: null,
    hintCost: 0,
    title: payload.title,
  };

  const existing = getUserSentPocks();
  existing.unshift(item);
  saveUserSentPocks(existing);
  return item;
}

export function getAllPocks(): PockItem[] {
  return [...getUserSentPocks(), ...pockItems];
}

export function getPockById(id: string): PockItem | null {
  return getAllPocks().find((item) => item.id === id) ?? null;
}

export function filterPocksByStatus(status: PockStatus): PockItem[] {
  return getAllPocks().filter((item) => item.status === status);
}

export function getReceivedPocks(): PockItem[] {
  return getAllPocks().filter((item) => item.type === "received");
}

export function getSentPocks(): PockItem[] {
  return getAllPocks().filter((item) => item.type === "sent");
}

export function canOpenPock(pock: PockItem | null): boolean {
  if (!pock) return false;
  return pock.status === POCK_STATUS.OPENING || pock.status === POCK_STATUS.OPENED;
}

export function getPockDday(openDate: string): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const normalized = normalizeOpenDate(openDate);
  const target = new Date(normalized);
  if (Number.isNaN(target.getTime())) return "미오픈";
  target.setHours(0, 0, 0, 0);
  const diff = Math.ceil((target.getTime() - today.getTime()) / 86400000);
  if (diff > 0) return `D-${diff}`;
  if (diff === 0) return "D-Day";
  return "미오픈";
}
