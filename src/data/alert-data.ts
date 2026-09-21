export type AlertKind = "unlock" | "arrive" | "friend" | "notice";

export interface AlertItem {
  id: string;
  kind: AlertKind;
  icon: string;
  iconW: number;
  iconH: number;
  label: string;
  message: string;
  time: string;
  unread: boolean;
}

export interface AlertGroup {
  id: string;
  /** 같은 종류 묶음 — 클릭 시 펼침 */
  stacked?: boolean;
  items: AlertItem[];
}

const UNLOCK_ICON = {
  icon: "/assets/images/open-soon.svg",
  iconW: 19,
  iconH: 19,
  label: "드디어 열어볼 시간이에요!",
} as const;

/** 홈 알림 페이지 데모 데이터 */
export const alertGroups: AlertGroup[] = [
  {
    id: "group-unlock",
    stacked: true,
    items: [
      {
        id: "alert-unlock-1",
        kind: "unlock",
        ...UNLOCK_ICON,
        message: "데빌이님이 보낸 POCK가 열렸어요.",
        time: "13시간 전",
        unread: true,
      },
      {
        id: "alert-unlock-2",
        kind: "unlock",
        ...UNLOCK_ICON,
        message: "민수님이 보낸 POCK가 열렸어요.",
        time: "13시간 전",
        unread: true,
      },
      {
        id: "alert-unlock-3",
        kind: "unlock",
        ...UNLOCK_ICON,
        message: "교니님이 보낸 POCK가 열렸어요.",
        time: "13시간 전",
        unread: true,
      },
    ],
  },
  {
    id: "group-arrive",
    items: [
      {
        id: "alert-arrive",
        kind: "arrive",
        icon: "/assets/images/new-pock.svg",
        iconW: 16,
        iconH: 14,
        label: "새로운 POCK가 도착했어요!",
        message: "데빌이님이 POCK를 보냈습니다.",
        time: "13시간 전",
        unread: true,
      },
    ],
  },
  {
    id: "group-friend",
    items: [
      {
        id: "alert-friend",
        kind: "friend",
        icon: "/assets/images/new-friend.svg",
        iconW: 15,
        iconH: 15,
        label: "새로운 친구가 생겼어요!",
        message: "이제 서로 POCK를 보낼 수 있어요.",
        time: "13시간 전",
        unread: true,
      },
    ],
  },
  {
    id: "group-notice",
    items: [
      {
        id: "alert-notice",
        kind: "notice",
        icon: "/assets/images/new-notice.svg",
        iconW: 15,
        iconH: 15,
        label: "새로운 공지가 있어요!",
        message: "확인하지 않은 공지가 있어요.",
        time: "13시간 전",
        unread: true,
      },
    ],
  },
];
