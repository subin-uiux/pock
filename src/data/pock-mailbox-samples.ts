import type { LetterCardVariant, LetterTheme } from "@/types";
import { letterDateFromToday } from "@/lib/letter-progress";

const LETTER_BODY = `걸음마다 눈부신 나 Let's get it star
모든 순간 시선을 난 피하지 않지
나를 스친 그 순간 지금은 Chasing
아주 눈이 부신 너를 숨김없이 보여줘
한 번도 빛난 적 없었던 미지의 향으로
온 세상을 물들여 새로워진 장면에 두
눈앞 황홀해 너의 손을 잡을 때
너와 어우러질 때`;

const PHOTOS = [
  "/assets/images/letter/letter-photo-cat.webp",
  "/assets/images/letter/letter-photo-chick.webp",
  "/assets/images/letter/letter-photo-bird.webp",
  "/assets/images/letter/letter-photo-pocket.webp",
] as const;

export interface MailboxCardSample {
  id: string;
  variant: LetterCardVariant;
  target: string;
  title?: string;
  body?: string;
  /** 보낸 날 — progress 게이지 시작 */
  sendDate?: string;
  /** 개봉 예정일 — progress 게이지·D-day */
  openDate?: string;
  timer?: string;
  hintPaid?: boolean;
  theme?: LetterTheme;
  imageSrc?: string;
}

function sample(
  base: MailboxCardSample,
  extras: Pick<MailboxCardSample, "theme" | "imageSrc" | "title" | "body">,
): MailboxCardSample {
  return {
    title: "안녕하신교",
    body: LETTER_BODY,
    ...base,
    ...extras,
  };
}

/** 디자인용 샘플 — 잠김/열림 탭 카드 구성 */
export const RECEIVED_LOCKED_SAMPLES: MailboxCardSample[] = [
  sample(
    {
      id: "received-locked-1",
      variant: "timer",
      target: "교니",
      hintPaid: true,
    },
    { theme: "red", imageSrc: PHOTOS[0] },
  ),
  sample(
    {
      id: "received-locked-2",
      variant: "progress",
      target: "교니",
      hintPaid: false,
      // 전체 10일 · 7일 경과 → 7칸 · D-3
      sendDate: letterDateFromToday(-7),
      openDate: letterDateFromToday(3),
    },
    { theme: "orange", imageSrc: PHOTOS[1] },
  ),
  sample(
    {
      id: "received-locked-3",
      variant: "timer",
      target: "지우",
      hintPaid: false,
    },
    { theme: "yellow", imageSrc: PHOTOS[2], title: "약속한 날" },
  ),
  sample(
    {
      id: "received-locked-4",
      variant: "progress",
      target: "민수",
      hintPaid: true,
      // 전체 10일 · 8일 경과 → 8칸 · D-2
      sendDate: letterDateFromToday(-8),
      openDate: letterDateFromToday(2),
    },
    { theme: "green", imageSrc: PHOTOS[3], title: "생일 축하" },
  ),
  sample(
    {
      id: "received-locked-5",
      variant: "progress",
      target: "교니",
      hintPaid: false,
      // 전체 20일 · 8일 경과 → 4칸 · D-12
      sendDate: letterDateFromToday(-8),
      openDate: letterDateFromToday(12),
    },
    { theme: "blue", imageSrc: PHOTOS[0] },
  ),
  sample(
    {
      id: "received-locked-6",
      variant: "timer",
      target: "하나",
      hintPaid: true,
    },
    { theme: "purple", imageSrc: PHOTOS[1], title: "보낸 편지" },
  ),
];

export const RECEIVED_OPEN_SAMPLES: MailboxCardSample[] = [
  {
    id: "received-open-1",
    variant: "gift",
    target: "교니",
  },
  sample(
    {
      id: "received-open-2",
      variant: "open",
      target: "zl존킹킹",
      title: "안녕하신교",
      openDate: "20xx.00.00",
    },
    { theme: "pink", imageSrc: PHOTOS[2] },
  ),
  {
    id: "received-open-3",
    variant: "gift",
    target: "지우",
  },
  sample(
    {
      id: "received-open-4",
      variant: "open",
      target: "민수",
      title: "약속한 날",
      openDate: "2026.01.01",
    },
    { theme: "rainbow", imageSrc: PHOTOS[3] },
  ),
];

export const SENT_LOCKED_SAMPLES: MailboxCardSample[] = [
  {
    id: "sent-locked-1",
    variant: "unopened",
    target: "zl존킹킹",
  },
  {
    id: "sent-locked-2",
    variant: "timer",
    target: "zl존킹킹",
  },
  {
    id: "sent-locked-3",
    variant: "progress",
    target: "zl존킹킹",
    // 전체 10일 · 7일 경과 → 7칸 · D-3
    sendDate: letterDateFromToday(-7),
    openDate: letterDateFromToday(3),
  },
  {
    id: "sent-locked-4",
    variant: "unopened",
    target: "하나",
  },
  {
    id: "sent-locked-5",
    variant: "progress",
    target: "민수",
    // 전체 10일 · 6일 경과 → 6칸 · D-4
    sendDate: letterDateFromToday(-6),
    openDate: letterDateFromToday(4),
  },
  {
    id: "sent-locked-6",
    variant: "timer",
    target: "지우",
  },
];

export const SENT_OPEN_SAMPLES: MailboxCardSample[] = [
  sample(
    {
      id: "sent-open-1",
      variant: "open",
      target: "zl존킹킹",
      title: "안녕하신교",
      openDate: "20xx.00.00",
    },
    { theme: "heart", imageSrc: PHOTOS[0] },
  ),
  sample(
    {
      id: "sent-open-2",
      variant: "open",
      target: "하나",
      title: "생일 축하",
      openDate: "2026.03.01",
    },
    { theme: "star", imageSrc: PHOTOS[1] },
  ),
  sample(
    {
      id: "sent-open-3",
      variant: "open",
      target: "민수",
      title: "보낸 편지",
      openDate: "2026.09.14",
    },
    { theme: "stripe", imageSrc: PHOTOS[2] },
  ),
];
