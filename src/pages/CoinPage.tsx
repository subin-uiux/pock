import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Popup } from "@/components/Popup";

/** 데모 보유 코인 — 설정과 동일 */
const DEMO_COIN = 1000;

/** COIN SHOP 상품 — 시안 */
const COIN_PACKS: {
  id: string;
  label: string;
  price: string;
  icon: string;
  iconW: number;
  iconH: number;
}[] = [
  {
    id: "1",
    label: "1 COIN",
    price: "₩100",
    icon: "/assets/images/coin-store/1coin.svg",
    iconW: 35,
    iconH: 35,
  },
  {
    id: "10",
    label: "10 COIN",
    price: "₩1,000",
    icon: "/assets/images/coin-store/10coin.svg",
    iconW: 61,
    iconH: 41,
  },
  {
    id: "20",
    label: "20 COIN",
    price: "₩2,000",
    icon: "/assets/images/coin-store/20coin.svg",
    iconW: 60,
    iconH: 73,
  },
  {
    id: "30",
    label: "30 COIN",
    price: "₩3,000",
    icon: "/assets/images/coin-store/30coin.svg",
    iconW: 70,
    iconH: 82,
  },
  {
    id: "50",
    label: "50 COIN+5",
    price: "₩5,000",
    icon: "/assets/images/coin-store/50%20coin.svg",
    iconW: 81,
    iconH: 49,
  },
  {
    id: "100",
    label: "100 COIN+10",
    price: "₩10,000",
    icon: "/assets/images/coin-store/100%20coin.svg",
    iconW: 81,
    iconH: 51,
  },
];

/**
 * 코인 상점 `/coin`
 * 반응형: Mo 좌우 20·유동 · Tb/Pc 670
 */
export function CoinPage() {
  const navigate = useNavigate();
  const [buyOpen, setBuyOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState<(typeof COIN_PACKS)[number] | null>(
    null,
  );
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    document.title = "코인 상점 ㅣ POCK";
  }, []);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 700);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/settings", { replace: true });
  };

  const openBuyPopup = (pack: (typeof COIN_PACKS)[number]) => {
    setSelectedPack(pack);
    setBuyOpen(true);
  };

  const closeBuyPopup = () => {
    setBuyOpen(false);
    setSelectedPack(null);
  };

  const confirmBuy = () => {
    closeBuyPopup();
    setToastOpen(true);
  };

  return (
    <section className="coin-page" aria-label="코인 상점">
      <div className="coin-page__top">
        <button
          type="button"
          className="coin-page__back"
          aria-label="뒤로가기"
          onClick={goBack}
        >
          <img
            className="coin-page__back-icon"
            src="/assets/icons/left-arrow.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>

        <div className="coin-page__coin-row">
          <Button
            variant="action-icon"
            className="coin-page__coin-btn"
            aria-label={`보유 코인 ${DEMO_COIN}`}
          >
            <img
              className="coin-page__coin-icon"
              src="/assets/images/coin-store/1coin.svg"
              alt=""
              width={18}
              height={18}
            />
            <span className="coin-page__coin-value">{DEMO_COIN}</span>
          </Button>
          <button
            type="button"
            className="coin-page__coin-plus"
            aria-label="코인 충전"
            onClick={() => {
              /* 같은 페이지 — 상점 영역 */
            }}
          >
            <img
              className="coin-page__coin-plus-icon"
              src="/assets/images/setting/plus-box.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <div className="coin-page__ad">
        <Button
          variant="push"
          className="coin-page__ad-btn"
          onClick={() => {
            /* 클릭만 — 광고 보상 미확정 */
          }}
        >
          <img
            className="coin-page__ad-icon"
            src="/assets/images/coin-store/Advertisement-icon.svg"
            alt=""
            width={23}
            height={23}
          />
          <span>광고보고 1 코인받기</span>
        </Button>
      </div>

      <article className="coin-shop" aria-label="COIN SHOP">
        <header className="pock-window__bar">
          <h1 className="pock-window__title">COIN SHOP</h1>
          <div className="pock-window__actions">
            <span
              className="pock-window__control pock-window__control--min"
              aria-hidden="true"
            />
            <button
              type="button"
              className="pock-window__control pock-window__control--close"
              aria-label="닫기"
              onClick={goBack}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              <img
                className="pock-window__control-icon"
                src="/assets/images/heart-icon.svg"
                alt=""
                width={9}
                height={7}
              />
            </button>
          </div>
        </header>

        <p className="coin-shop__lead">충전할 코인을 선택하세요</p>

        <div className="coin-shop__body">
          <ul className="coin-shop__grid">
            {COIN_PACKS.map((pack) => (
              <li key={pack.id} className="coin-shop__card">
                <img
                  className="coin-shop__icon"
                  src={pack.icon}
                  alt=""
                  width={pack.iconW}
                  height={pack.iconH}
                  style={{ width: pack.iconW, height: pack.iconH }}
                />
                <p className="coin-shop__label">{pack.label}</p>
                <p className="coin-shop__price">{pack.price}</p>
                <Button
                  variant="action-text"
                  className="coin-shop__buy"
                  onClick={() => openBuyPopup(pack)}
                >
                  구매하기
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <Popup
        open={buyOpen}
        variant="info"
        message="코인을 구매하시겠습니까?"
        confirmLabel="확인"
        cancelLabel="취소"
        onConfirm={confirmBuy}
        onCancel={closeBuyPopup}
        onClose={closeBuyPopup}
      />

      {toastOpen ? (
        <div className="coin-toast" role="status" aria-live="polite">
          <span className="coin-toast__icon" aria-hidden="true" />
          <p className="coin-toast__text">코인 구매를 성공했습니다!</p>
        </div>
      ) : null}
    </section>
  );
}
