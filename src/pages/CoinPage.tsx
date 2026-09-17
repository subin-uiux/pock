import { useState } from "react";
import { Button } from "@/components/Button";
import { CoinBadge } from "@/components/CoinBadge";
import { Popup } from "@/components/Popup";
import { useCoin } from "@/hooks/useCoin";
import { markAttendance } from "@/lib/coin";

export function CoinPage() {
  const { state, balance, refresh } = useCoin();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleAttendance = () => {
    const result = markAttendance();
    refresh();
    setPopupMessage(
      result.success
        ? `출석 완료! ${result.amount} 코인을 받았어요.`
        : "오늘은 이미 출석했습니다.",
    );
    setPopupOpen(true);
  };

  return (
    <section className="coin-page" aria-labelledby="coin-title">
      <div className="coin-page__hero">
        <h1 className="coin-page__title" id="coin-title">
          코인
        </h1>
        <div className="coin-page__balance">
          <CoinBadge amount={balance} />
        </div>
        <p className="coin-page__lead">연속 출석 {state.attendanceDays}일</p>
        <Button variant="push" block onClick={handleAttendance}>
          출석 체크
        </Button>
      </div>

      <h2 className="home__subtitle">내역</h2>
      <ul className="coin-page__history">
        {state.history.map((item) => (
          <li
            key={item.id}
            className={`coin-page__history-item coin-page__history-item--${item.type}`}
          >
            <span>{item.reason}</span>
            <span>
              {item.type === "earn" ? "+" : "-"}
              {item.amount}
            </span>
          </li>
        ))}
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
