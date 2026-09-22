import type { LetterCardVariant, LetterTheme } from "@/types";
import { letterDateFromToday } from "@/lib/letter-progress";

const LETTERS = [
  {
    imageSrc: "/assets/images/letter/letter-img1.png",
    title: "너 이거 볼 때 표정 궁금함 ㅋㅋ",
    body: `아까는 별말 안 했는데
집 오니까 갑자기 할 말 생각나서 보냄 ㅋㅋㅋ

오늘 진짜 별것도 아닌 걸로 계속 웃었던 거 너무 웃겨
우리 둘이 만나면 대체 왜 이렇게 되는 거냐고...

그리고 오늘 찍은 사진 나 꽤 마음에 들어
너도 잘 나왔으니까 삭제 금지임
나중에 보면 또 “우리 이때 왜 이러고 다녔냐” 할 듯ㅋㅋ

암튼 오늘 재밌었다
다음엔 간식 더 많이 사놓고 놀자 ♡`,
  },
  {
    imageSrc: "/assets/images/letter/letter-img2.png",
    title: "교니 사랑해요!!!!!!!!",
    body: `그냥 갑자기 보내고 싶어서 보냄.

이유 없음.

교니 사랑해요 ♡
교니 최고예요 ♡
교니 오늘도 귀여워요 ♡

이 편지를 받은 사람은
오늘 하루 나한테 잘해야 합니다.

이상입니다.`,
  },
  {
    imageSrc: "/assets/images/letter/letter-img3.png",
    title: "오늘의 우리 저장 완료 ♡",
    body: `오늘 날짜 기억해놔.

별거 한 것도 없는데
이상하게 오늘은 오래 기억날 것 같아서 보내는 거야.

옥상에서 추워 죽겠다고 해놓고
사진은 또 열심히 찍은 우리 너무 웃김ㅋㅋㅋ

그리고 다음에는 목도리 좀 제대로 하고 와.
내 거 뺏어 쓰지 말고ㅡㅡ

그래도 오늘 좋았다 :)
나중에 이거 다시 열어보면 그때도 친하게 지내고 있겠지?`,
  },
  {
    imageSrc: "/assets/images/letter/letter-img4.png",
    title: "우리 오늘 좀 귀여웠음",
    body: `사진 정리하다가 이거 보고 바로 너 생각남ㅋㅋ

우리가 분명 처음에는
“오늘 일찍 들어가자” 했던 것 같은데
왜 정신 차려보니까 방바닥에 사진이랑 편지랑 스티커 다 펼쳐놓고
몇 시간을 떠들고 있었던 건지 모르겠음.

근데 이런 날이 제일 재밌는 것 같아.
뭔가 특별한 계획 없어도 그냥 같이 있으면 계속 할 얘기 생기는 날.

오늘 네가 한 말 중에 제일 웃겼던 거 아직도 생각남ㅋㅋㅋㅋ
이건 나중에 만나면 또 놀릴 거니까 각오해.

아 그리고 이 사진 꼭 가지고 있어.
몇 년 뒤에 보면 방에 있는 물건들 하나하나 보면서
“와 저거 진짜 오랜만이다” 할 것 같아서 괜히 남겨두고 싶음.

다음에 또 놀자.
그땐 사진 더 많이 찍기 📸♡`,
  },
  {
    imageSrc: "/assets/images/letter/letter-img5.png",
    title: "너 보자마자 생각난 짤 보냄 ♡",
    body: `이거 보자마자 너 생각남ㅋㅋ
귀여운 척 하는 것까지 똑같음 ♡`,
  },
  {
    imageSrc: "/assets/images/letter/letter-img6.png",
    title: "공부는 언제 함?",
    body: `또 수업시간에 이러고 있네ㅋㅋㅋ
근데 사진은 잘 나왔으니까 봐줌`,
  },
  {
    imageSrc: "/assets/images/letter/letter-img7.png",
    title: "짝남이랑 찍음 ㅁㅊ",
    body: `야 너 드디어 짝남이랑 같이 찍었잖아ㅋㅋㅋㅋ
표정 관리 좀 해 너무 좋아하잖아
응 이거 평생 놀릴꺼야~~~`,
  },
  {
    imageSrc: "/assets/images/letter/letter-img8.png",
    title: "야 이것 좀 봐ㅋㅋㅋ",
    body: `편지 하나에 왜 다 달라붙어있냐고ㅋㅋ
남의 얘기가 제일 재밌긴 함
다음 편 빨리 가져와.`,
  },
  {
    imageSrc: "/assets/images/letter/letter-img9.png",
    title: "잘지내?",
    body: `우리 원래라면 오늘 3주년인 거 알아?
보고싶어.
우리 처음 만났던 장소에서 기다릴게
내가 잘할게.`,
  },
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
  letterIndex: number,
  extras?: Pick<MailboxCardSample, "theme">,
): MailboxCardSample {
  const letter = LETTERS[letterIndex % LETTERS.length];
  return {
    ...base,
    title: letter.title,
    body: letter.body,
    imageSrc: letter.imageSrc,
    ...extras,
  };
}

/**
 * 잠김 탭 기본 정렬: 개봉 임박 순
 * 타이머(하루 미만) → D-2 → D-3 → D-12 …
 */
export const RECEIVED_LOCKED_SAMPLES: MailboxCardSample[] = [
  sample(
    {
      id: "received-locked-4",
      variant: "progress",
      target: "민수",
      hintPaid: true,
      sendDate: letterDateFromToday(-8),
      openDate: letterDateFromToday(2),
    },
    3,
    { theme: "green" },
  ),
  sample(
    {
      id: "received-locked-2",
      variant: "progress",
      target: "교니",
      hintPaid: false,
      sendDate: letterDateFromToday(-7),
      openDate: letterDateFromToday(3),
    },
    1,
    { theme: "orange" },
  ),
  sample(
    {
      id: "received-locked-5",
      variant: "progress",
      target: "교니",
      hintPaid: false,
      sendDate: letterDateFromToday(-8),
      openDate: letterDateFromToday(12),
    },
    4,
    { theme: "blue" },
  ),
  sample(
    {
      id: "received-locked-1",
      variant: "timer",
      target: "교니",
      hintPaid: true,
      timer: "22:05:13",
    },
    0,
    { theme: "red" },
  ),
  sample(
    {
      id: "received-locked-3",
      variant: "timer",
      target: "지우",
      hintPaid: false,
      timer: "14:37:48",
    },
    2,
    { theme: "yellow" },
  ),
  sample(
    {
      id: "received-locked-6",
      variant: "timer",
      target: "하나",
      hintPaid: true,
      timer: "06:12:05",
    },
    5,
    { theme: "purple" },
  ),
];

/**
 * 열림 탭 기본 정렬: 최근 열린 순 (선물 상자 우선)
 * gift → gift → 2026.08.12 → 2026.01.01
 */
export const RECEIVED_OPEN_SAMPLES: MailboxCardSample[] = [
  sample(
    {
      id: "received-gift-1",
      variant: "gift",
      target: "전남친",
      openDate: "2026.09.30",
    },
    8,
    { theme: "pink" },
  ),
  sample(
    {
      id: "received-gift-2",
      variant: "gift",
      target: "지우",
      openDate: "2026.09.18",
    },
    3,
    { theme: "green" },
  ),
  sample(
    {
      id: "received-open-2",
      variant: "open",
      target: "zl존킹킹",
      openDate: "2026.08.12",
    },
    6,
    { theme: "pink" },
  ),
  sample(
    {
      id: "received-open-4",
      variant: "open",
      target: "민수",
      openDate: "2026.01.01",
    },
    7,
    { theme: "rainbow" },
  ),
];

/** 잠김 · 개봉 임박 순: 타이머 → D-3 → D-4 → 미오픈 */
export const SENT_LOCKED_SAMPLES: MailboxCardSample[] = [
  sample(
    {
      id: "sent-locked-3",
      variant: "progress",
      target: "zl존킹킹",
      sendDate: letterDateFromToday(-7),
      openDate: letterDateFromToday(3),
    },
    2,
    { theme: "yellow" },
  ),
  sample(
    {
      id: "sent-locked-5",
      variant: "progress",
      target: "민수",
      sendDate: letterDateFromToday(-6),
      openDate: letterDateFromToday(4),
    },
    3,
    { theme: "green" },
  ),
  sample(
    {
      id: "sent-locked-1",
      variant: "unopened",
      target: "zl존킹킹",
    },
    4,
    { theme: "blue" },
  ),
  sample(
    {
      id: "sent-locked-4",
      variant: "unopened",
      target: "하나",
    },
    5,
    { theme: "purple" },
  ),
  sample(
    {
      id: "sent-locked-2",
      variant: "timer",
      target: "zl존킹킹",
      timer: "19:44:21",
    },
    6,
    { theme: "pink" },
  ),
  sample(
    {
      id: "sent-locked-6",
      variant: "timer",
      target: "지우",
      timer: "11:08:56",
    },
    7,
    { theme: "orange" },
  ),
];

/** 열림 · 최근 열린 순: 09.14 → 07.22 → 03.01 */
export const SENT_OPEN_SAMPLES: MailboxCardSample[] = [
  sample(
    {
      id: "sent-open-3",
      variant: "open",
      target: "민수",
      openDate: "2026.09.14",
    },
    2,
    { theme: "stripe" },
  ),
  sample(
    {
      id: "sent-open-1",
      variant: "open",
      target: "zl존킹킹",
      openDate: "2026.07.22",
    },
    0,
    { theme: "heart" },
  ),
  sample(
    {
      id: "sent-open-2",
      variant: "open",
      target: "하나",
      openDate: "2026.03.01",
    },
    1,
    { theme: "star" },
  ),
];
