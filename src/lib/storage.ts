/** 새로고침 시에도 유지 — 로그인·프로필(닉네임·캐릭터)·홈 온보딩 본 여부 */
const KEEP_ON_RELOAD = new Set([
  "pock.auth",
  "pock.profileSetup",
  "pock.homeOnboardSeen",
]);

/** 새로고침(페이지 로드)마다 닉네임·코인·알림 등 데모 상태를 기본값으로 */
export function resetDemoState(): void {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith("pock.") && !KEEP_ON_RELOAD.has(key))
      .forEach((key) => localStorage.removeItem(key));
  } catch {
    /* 저장소 접근 불가 시 무시 */
  }
}

export const storage = {
  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  },

  set(key: string, value: unknown): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};
