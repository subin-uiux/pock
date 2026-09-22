import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Popup } from "@/components/Popup";
import { LETTER_PAPER_OPTIONS } from "@/data/letter-paper";
import { useCoin } from "@/hooks/useCoin";
import {
  getOwnedLetterPapers,
  LETTER_OWNED_CHANGE_EVENT,
  unlockLetterPaper,
} from "@/lib/letter-owned";
import type { LetterTheme } from "@/types";

interface LetterPaperPickerProps {
  open: boolean;
  selectedId: LetterTheme;
  onClose: () => void;
  /** 보유 편지지 탭 시 — letter-write__paper 즉시 반영 */
  onSelect?: (id: LetterTheme) => void;
  onConfirm: (id: LetterTheme) => void;
}

/**
 * 편지지 선택 — Letter_write 「편지지」탭
 */
export function LetterPaperPicker({
  open,
  selectedId,
  onClose,
  onSelect,
  onConfirm,
}: LetterPaperPickerProps) {
  const { balance, spend } = useCoin();
  const [owned, setOwned] = useState<LetterTheme[]>(() => getOwnedLetterPapers());
  const [pendingId, setPendingId] = useState<LetterTheme>(selectedId);
  const [adOpen, setAdOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [buyTarget, setBuyTarget] = useState<LetterTheme | null>(null);
  const [coinWarnOpen, setCoinWarnOpen] = useState(false);

  const refreshOwned = useCallback(() => {
    setOwned(getOwnedLetterPapers());
  }, []);

  useEffect(() => {
    if (!open) return;
    setPendingId(selectedId);
    refreshOwned();
  }, [open, selectedId, refreshOwned]);

  useEffect(() => {
    const onChange = () => refreshOwned();
    window.addEventListener(LETTER_OWNED_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(LETTER_OWNED_CHANGE_EVENT, onChange);
  }, [refreshOwned]);

  if (!open) return null;

  const isOwned = (id: LetterTheme) => owned.includes(id);

  const selectOwned = (id: LetterTheme) => {
    setPendingId(id);
    onSelect?.(id);
  };

  const buyOption = buyTarget
    ? LETTER_PAPER_OPTIONS.find((item) => item.id === buyTarget)
    : null;
  const buyPrice = buyOption?.price ?? 5;

  const handleItemClick = (id: LetterTheme) => {
    const option = LETTER_PAPER_OPTIONS.find((item) => item.id === id);
    if (!option) return;

    if (isOwned(id)) {
      selectOwned(id);
      return;
    }

    if (option.unlock === "ad") {
      setAdOpen(true);
      return;
    }

    if (option.unlock === "coin") {
      if (balance < option.price) {
        setCoinWarnOpen(true);
        return;
      }
      setBuyTarget(id);
      setBuyOpen(true);
    }
  };

  const handleAdConfirm = () => {
    setAdOpen(false);
    unlockLetterPaper("rainbow");
    setPendingId("rainbow");
    onSelect?.("rainbow");
  };

  const handleBuyConfirm = () => {
    if (!buyTarget || !buyOption) {
      setBuyOpen(false);
      setBuyTarget(null);
      return;
    }
    if (balance < buyOption.price) {
      setBuyOpen(false);
      setBuyTarget(null);
      setCoinWarnOpen(true);
      return;
    }
    const ok = spend(buyOption.price, `${buyTarget} 편지지 구매`);
    if (!ok) {
      setBuyOpen(false);
      setBuyTarget(null);
      setCoinWarnOpen(true);
      return;
    }
    unlockLetterPaper(buyTarget);
    setPendingId(buyTarget);
    onSelect?.(buyTarget);
    setBuyOpen(false);
    setBuyTarget(null);
  };

  const handleBuyCancel = () => {
    setBuyOpen(false);
    setBuyTarget(null);
  };

  const handleConfirm = () => {
    if (!isOwned(pendingId)) return;
    onConfirm(pendingId);
  };

  return (
    <div
      className="letter-paper-pick"
      role="dialog"
      aria-modal="true"
      aria-label="편지지"
    >
      <header className="letter-paper-pick__header">
        <button
          type="button"
          className="letter-paper-pick__back"
          aria-label="뒤로가기"
          onClick={onClose}
        >
          <img
            className="letter-paper-pick__back-icon"
            src="/assets/images/arrow-before.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
        <h2 className="letter-paper-pick__title">편지지</h2>
      </header>

      <ul className="letter-paper-pick__grid">
        {LETTER_PAPER_OPTIONS.map((option) => {
          const ownedItem = isOwned(option.id);
          const selected = pendingId === option.id;
          const locked = !ownedItem;
          const className = [
            "letter-paper-pick__item",
            selected ? "letter-paper-pick__item--selected" : "",
            locked ? "letter-paper-pick__item--locked" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <li key={option.id}>
              <button
                type="button"
                className={className}
                aria-pressed={selected}
                aria-label={
                  locked
                    ? option.unlock === "ad"
                      ? "광고 시청 후 해금"
                      : `${option.price} 코인으로 구매`
                    : `${option.id} 편지지`
                }
                onClick={() => handleItemClick(option.id)}
              >
                <span
                  className={`letter-paper-pick__swatch letter-paper-pick__swatch--${option.id}`}
                  aria-hidden="true"
                />
                {locked ? (
                  <>
                    <span className="letter-paper-pick__dim" aria-hidden="true" />
                    <span className="letter-paper-pick__lock" aria-hidden="true">
                      {option.unlock === "ad" ? (
                        <img
                          className="letter-paper-pick__lock-icon"
                          src="/assets/images/letter-ad.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      ) : (
                        <>
                          <img
                            className="letter-paper-pick__lock-icon"
                            src="/assets/images/letter-lock.svg"
                            alt=""
                            width={40}
                            height={40}
                          />
                          <span className="letter-paper-pick__price">
                            <img
                              className="letter-paper-pick__coin"
                              src="/assets/images/coin.svg"
                              alt=""
                              width={14}
                              height={14}
                            />
                            <span>{option.price}</span>
                          </span>
                        </>
                      )}
                    </span>
                  </>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="letter-paper-pick__footer">
        <Button
          variant="push"
          block
          className="letter-paper-pick__confirm"
          disabled={!isOwned(pendingId)}
          onClick={handleConfirm}
        >
          선택완료
        </Button>
      </div>

      <Popup
        open={adOpen}
        variant="info"
        message="광고를 시청하고 무지개 편지지를 받을까요?"
        confirmLabel="시청하기"
        cancelLabel="취소"
        onConfirm={handleAdConfirm}
        onCancel={() => setAdOpen(false)}
        onClose={() => setAdOpen(false)}
      />

      <Popup
        open={buyOpen}
        variant="info"
        message={`${buyPrice}코인을 사용해서 편지지를 구매하시겠습니까?`}
        confirmLabel="구매하기"
        cancelLabel="취소"
        onConfirm={handleBuyConfirm}
        onCancel={handleBuyCancel}
        onClose={handleBuyCancel}
      />

      <Popup
        open={coinWarnOpen}
        variant="warning"
        message="코인이 부족합니다."
        confirmLabel="확인"
        onConfirm={() => setCoinWarnOpen(false)}
        onClose={() => setCoinWarnOpen(false)}
      />
    </div>
  );
}
