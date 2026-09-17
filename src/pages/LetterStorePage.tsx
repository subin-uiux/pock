import { useState } from "react";
import { Button } from "@/components/Button";
import { CoinBadge } from "@/components/CoinBadge";
import { Popup } from "@/components/Popup";
import { useCoin } from "@/hooks/useCoin";
import { useLetterStore } from "@/hooks/useLetterStore";

export function LetterStorePage() {
  const { balance, refresh: refreshCoin } = useCoin();
  const { letters, isOwned, purchase } = useLetterStore();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handlePurchase = (id: string, name: string, price: number, isFree: boolean) => {
    if (isOwned(id)) {
      setPopupMessage("이미 보유한 편지지입니다.");
      setPopupOpen(true);
      return;
    }

    const result = purchase(id);
    refreshCoin();

    if (!result.success) {
      setPopupMessage(
        result.reason === "insufficient_balance"
          ? "코인이 부족합니다."
          : "구매에 실패했습니다.",
      );
    } else {
      setPopupMessage(
        isFree
          ? `${name}을(를) 받았습니다.`
          : `${name}을(를) ${price} 코인에 구매했습니다.`,
      );
    }
    setPopupOpen(true);
  };

  return (
    <section className="letter-store" aria-labelledby="store-title">
      <div className="letter-store__head">
        <h1 className="letter-store__title" id="store-title">
          편지지 Store
        </h1>
        <CoinBadge amount={balance} />
      </div>

      <ul className="letter-store__list">
        {letters.map((letter) => {
          const owned = isOwned(letter.id);
          return (
            <li key={letter.id} className="letter-store__item">
              <img
                className="letter-store__preview"
                src={letter.preview}
                alt=""
                width={88}
                height={110}
              />
              <div className="letter-store__body">
                <h2 className="letter-store__name">{letter.name}</h2>
                <p className="letter-store__desc">{letter.description}</p>
                <p className="letter-store__price">
                  {letter.isFree ? "무료" : `${letter.price} coin`}
                </p>
                {owned ? (
                  <span className="letter-store__owned">보유 중</span>
                ) : (
                  <Button
                    variant="push"
                    onClick={() =>
                      handlePurchase(
                        letter.id,
                        letter.name,
                        letter.price,
                        letter.isFree,
                      )
                    }
                  >
                    {letter.isFree ? "받기" : "구매"}
                  </Button>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <Popup
        open={popupOpen}
        variant="info"
        message={popupMessage}
        onClose={() => setPopupOpen(false)}
        onConfirm={() => setPopupOpen(false)}
      />
    </section>
  );
}
