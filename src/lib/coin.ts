import { initialCoinState } from "@/data/coin-data";
import { storage } from "@/lib/storage";
import type { CoinState } from "@/types";

const STORAGE_KEY = "pock.coin";

export function getCoinState(): CoinState {
  return storage.get<CoinState>(STORAGE_KEY) ?? { ...initialCoinState };
}

export function saveCoinState(state: CoinState): boolean {
  return storage.set(STORAGE_KEY, state);
}

export function getCoinBalance(): number {
  return getCoinState().balance || 0;
}

export function spendCoin(amount: number, reason = ""): boolean {
  const state = getCoinState();
  if (state.balance < amount) return false;

  state.balance -= amount;
  state.history = state.history || [];
  state.history.unshift({
    id: `hist-${Date.now()}`,
    type: "spend",
    amount,
    reason,
    date: new Date().toISOString(),
  });

  return saveCoinState(state);
}

export function earnCoin(amount: number, reason = ""): boolean {
  const state = getCoinState();
  state.balance = (state.balance || 0) + amount;
  state.history = state.history || [];
  state.history.unshift({
    id: `hist-${Date.now()}`,
    type: "earn",
    amount,
    reason,
    date: new Date().toISOString(),
  });

  return saveCoinState(state);
}

export function markAttendance(): { success: boolean; amount?: number; reason?: string } {
  const state = getCoinState();
  if (state.attendance) {
    return { success: false, reason: "already_checked" };
  }

  const nextDay = (state.attendanceDays || 0) + 1;
  const amount =
    state.attendanceRewards.find((r) => r.day === nextDay)?.amount ?? state.reward;

  state.attendance = true;
  state.attendanceDays = nextDay;
  state.balance = (state.balance || 0) + amount;
  state.history = state.history || [];
  state.history.unshift({
    id: `hist-${Date.now()}`,
    type: "earn",
    amount,
    reason: "출석 체크",
    date: new Date().toISOString(),
  });
  saveCoinState(state);

  return { success: true, amount };
}
