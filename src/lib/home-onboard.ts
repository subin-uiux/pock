import { storage } from "@/lib/storage";

const SEEN_KEY = "pock.homeOnboardSeen";
const PENDING_KEY = "pock.homeOnboardPending";

export function hasSeenHomeOnboard(): boolean {
  return storage.get<boolean>(SEEN_KEY) === true;
}

/** 프로필 완료 「시작하기」— 홈에서 온보딩을 반드시 연다 */
export function requestHomeOnboard(): void {
  storage.remove(SEEN_KEY);
  storage.set(PENDING_KEY, true);
}

export function shouldOpenHomeOnboard(): boolean {
  if (storage.get<boolean>(PENDING_KEY) === true) return true;
  return storage.get<boolean>(SEEN_KEY) !== true;
}

export function markHomeOnboardSeen(): void {
  storage.set(SEEN_KEY, true);
  storage.remove(PENDING_KEY);
}
