/**
 * 홈 온보딩 가이드 단계
 * 시안: 프로필 카피만 확정 · 나머지 제목/본문은 임시값
 */

export type HomeOnboardTargetId =
  | "profile"
  | "alert"
  | "friend"
  | "nav-home"
  | "nav-received"
  | "nav-send"
  | "nav-sent"
  | "nav-settings";

export type HomeOnboardPlacement = "below" | "above" | "left" | "right";

export interface HomeOnboardStep {
  id: HomeOnboardTargetId;
  /** CSS selector for spotlight target */
  selector: string;
  title: string;
  /** 줄바꿈은 \n */
  description: string;
  placement: HomeOnboardPlacement;
}

export const HOME_ONBOARD_STEPS: HomeOnboardStep[] = [
  {
    id: "profile",
    selector: "[data-onboard='profile']",
    title: "내 프로필",
    description: "내 닉네임과 보유한 코인을\n언제든지 확인할 수 있어요.",
    placement: "below",
  },
  {
    id: "alert",
    selector: "[data-onboard='alert']",
    title: "알림",
    /* 임시값 — 시안 카피 미확정 */
    description: "새로운 소식이 도착하면\n여기에서 바로 확인할 수 있어요.",
    placement: "below",
  },
  {
    id: "friend",
    selector: "[data-onboard='friend']",
    title: "친구목록",
    /* 임시값 — 시안 카피 미확정 */
    description: "친구를 눌러 프로필을 보거나\nPOCK을 보낼 수 있어요.",
    placement: "below",
  },
  {
    id: "nav-home",
    selector: "[data-onboard='nav-home']",
    title: "홈",
    /* 임시값 — 시안 카피 미확정 */
    description: "내 프로필과 친구 목록을\n한눈에 볼 수 있어요.",
    placement: "above",
  },
  {
    id: "nav-received",
    selector: "[data-onboard='nav-received']",
    title: "보관함",
    /* 임시값 — 시안 카피 미확정 */
    description: "친구가 보낸 POCK을\n여기에서 받아볼 수 있어요.",
    placement: "above",
  },
  {
    id: "nav-send",
    selector: "[data-onboard='nav-send']",
    title: "보내기",
    /* 임시값 — 시안 카피 미확정 */
    description: "친구에게 전할 POCK을\n작성하고 보낼 수 있어요.",
    placement: "above",
  },
  {
    id: "nav-sent",
    selector: "[data-onboard='nav-sent']",
    title: "전송함",
    /* 임시값 — 시안 카피 미확정 */
    description: "내가 보낸 POCK의\n상태를 확인할 수 있어요.",
    placement: "above",
  },
  {
    id: "nav-settings",
    selector: "[data-onboard='nav-settings']",
    title: "설정",
    /* 임시값 — 시안 카피 미확정 */
    description: "계정·알림 등\nPOCK 설정을 바꿀 수 있어요.",
    placement: "above",
  },
];
