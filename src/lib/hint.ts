/** 초성 보기 구매 비용 */
export const HINT_COST = 5;

/** 이번 방문(탭)에서만 유지 — 새로고침 시 초기화 */
const sessionPaidIds = new Set<string>();

/** 예전 localStorage 키 제거 (한 번만) */
if (typeof window !== "undefined") {
  try {
    window.localStorage.removeItem("pock.hintPaid");
  } catch {
    /* ignore */
  }
}

export function getHintPaidIds(): string[] {
  return [...sessionPaidIds];
}

export function isHintPaid(id: string, samplePaid = false): boolean {
  if (samplePaid) return true;
  return sessionPaidIds.has(id);
}

export function markHintPaid(id: string): boolean {
  sessionPaidIds.add(id);
  return true;
}
