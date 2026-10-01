import { useState } from "react";
import { Popup } from "@/components/Popup";

/** 같은 탭(세션)에서는 한 번만 — 새로고침 데모 초기화(localStorage)와 무관 */
const SEEN_KEY = "pock.portfolioNoticeSeen";

/** 팝업 닫힘 알림 — 랜딩 애니메이션은 이 이벤트 이후 시작 */
export const PORTFOLIO_NOTICE_CLOSED_EVENT = "pock:portfolio-notice-closed";

export function hasSeenNotice(): boolean {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * 사이트 첫 진입 안내 — 포트폴리오용 가상 사이트
 */
export function PortfolioNotice() {
  const [open, setOpen] = useState(() => !hasSeenNotice());

  const close = () => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* 저장소 접근 불가 시 무시 */
    }
    setOpen(false);
    window.dispatchEvent(new Event(PORTFOLIO_NOTICE_CLOSED_EVENT));
  };

  return (
    <Popup
      open={open}
      variant="info"
      message="본 사이트는 포트폴리오 목적으로 제작된 가상 사이트이며, 실제 운영되는 사이트가 아닙니다."
      confirmLabel="확인"
      onConfirm={close}
      onClose={close}
    />
  );
}
