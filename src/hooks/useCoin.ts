import { useCallback, useState } from "react";
import {
  earnCoin,
  getCoinBalance,
  getCoinState,
  spendCoin,
} from "@/lib/coin";
import type { CoinState } from "@/types";

export function useCoin() {
  const [state, setState] = useState<CoinState>(() => getCoinState());

  const refresh = useCallback(() => {
    setState(getCoinState());
  }, []);

  const spend = useCallback(
    (amount: number, reason?: string) => {
      const ok = spendCoin(amount, reason);
      if (ok) refresh();
      return ok;
    },
    [refresh],
  );

  const earn = useCallback(
    (amount: number, reason?: string) => {
      const ok = earnCoin(amount, reason);
      if (ok) refresh();
      return ok;
    },
    [refresh],
  );

  return {
    state,
    balance: state.balance ?? getCoinBalance(),
    spend,
    earn,
    refresh,
  };
}
