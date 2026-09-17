import { useCallback, useState } from "react";
import {
  getAllLetters,
  getOwnedLetterIds,
  isLetterOwned,
  purchaseLetter,
} from "@/lib/store";

export function useLetterStore() {
  const [ownedIds, setOwnedIds] = useState<string[]>(() => getOwnedLetterIds());
  const letters = getAllLetters();

  const refresh = useCallback(() => {
    setOwnedIds(getOwnedLetterIds());
  }, []);

  const purchase = useCallback(
    (letterId: string) => {
      const result = purchaseLetter(letterId);
      if (result.success) refresh();
      return result;
    },
    [refresh],
  );

  return {
    letters,
    ownedIds,
    isOwned: (id: string) => isLetterOwned(id) || ownedIds.includes(id),
    purchase,
    refresh,
  };
}
