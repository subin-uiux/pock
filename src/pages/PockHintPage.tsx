import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { Popup } from "@/components/Popup";
import { useCoin } from "@/hooks/useCoin";
import { spendCoin } from "@/lib/coin";
import { getPockById } from "@/lib/pock";
import { storage } from "@/lib/storage";

const HINT_UNLOCK_KEY = "pock.unlockedHints";

export function PockHintPage() {
  const { id } = useParams();
  const pock = id ? getPockById(id) : null;
  const { refresh } = useCoin();
  const unlocked = storage.get<string[]>(HINT_UNLOCK_KEY) ?? [];
  const [revealed, setRevealed] = useState(
    () => Boolean(id && unlocked.includes(id)),
  );
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  if (!pock) {
    return (
      <section className="pock-hint">
        <p>POCK을 찾을 수 없습니다.</p>
        <Link to="/pock-received">보관함으로</Link>
      </section>
    );
  }

  const handleUnlock = () => {
    if (revealed || !pock.hint) return;
    if (pock.hintCost <= 0) {
      setRevealed(true);
      return;
    }
    const ok = spendCoin(pock.hintCost, "힌트 열람");
    refresh();
    if (!ok) {
      setPopupMessage("코인이 부족합니다.");
      setPopupOpen(true);
      return;
    }
    const next = [...unlocked, pock.id];
    storage.set(HINT_UNLOCK_KEY, next);
    setRevealed(true);
  };

  return (
    <section className="pock-hint" aria-labelledby="hint-title">
      <div className="pock-hint__card">
        <h1 className="pock-hint__title" id="hint-title">
          힌트
        </h1>
        {pock.hint ? (
          <>
            <p className="pock-hint__text">
              {revealed ? pock.hint : "???? · 코인을 사용해 힌트를 열어보세요."}
            </p>
            <p className="pock-hint__cost">
              힌트 열람 비용: {pock.hintCost} coin
            </p>
          </>
        ) : (
          <p className="pock-hint__text">힌트가 없습니다.</p>
        )}
        <div className="pock-hint__actions">
          {pock.hint && !revealed ? (
            <Button variant="push" onClick={handleUnlock}>
              힌트 열기
            </Button>
          ) : null}
          <Link to={`/pock-detail/${pock.id}`}>
            <Button variant="guide">상세로 돌아가기</Button>
          </Link>
        </div>
      </div>

      <Popup
        open={popupOpen}
        variant="warning"
        message={popupMessage}
        onClose={() => setPopupOpen(false)}
        onConfirm={() => setPopupOpen(false)}
      />
    </section>
  );
}
