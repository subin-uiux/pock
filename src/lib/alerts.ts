import type { AlertGroup, AlertItem } from "@/data/alert-data";
import { storage } from "@/lib/storage";

const STORAGE_KEY = "pock.alerts";
const MAX_ALERTS = 50;

interface StoredAlert extends Omit<AlertItem, "time"> {
  createdAt: string;
}

function getStoredAlerts(): StoredAlert[] {
  return storage.get<StoredAlert[]>(STORAGE_KEY) ?? [];
}

function formatRelativeTime(iso: string, now = Date.now()): string {
  const diff = Math.max(0, now - new Date(iso).getTime());
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "방금 전";
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  return `${Math.floor(hours / 24)}일 전`;
}

export function addCoinPurchaseAlert(packLabel: string): void {
  const now = new Date();
  const next: StoredAlert = {
    id: `alert-coin-${now.getTime()}`,
    kind: "coin",
    icon: "/assets/images/coin.svg",
    iconW: 15,
    iconH: 15,
    /* 임시값 — 코인 구매 알림 카피 시안 확정 시 교체 */
    label: "코인을 구매했어요!",
    message: `${packLabel}을 구매했습니다.`,
    unread: true,
    createdAt: now.toISOString(),
  };
  storage.set(STORAGE_KEY, [next, ...getStoredAlerts()].slice(0, MAX_ALERTS));
}

/** 저장된 알림 — 최신순, 한 건씩 그룹 */
export function getStoredAlertGroups(): AlertGroup[] {
  const now = Date.now();
  return getStoredAlerts().map(({ createdAt, ...item }) => ({
    id: `group-${item.id}`,
    items: [{ ...item, time: formatRelativeTime(createdAt, now) }],
  }));
}
