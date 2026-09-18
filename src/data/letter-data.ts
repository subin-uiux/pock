import type { LetterItem } from "@/types";

/** 편지지 스토어 샘플 — 프리뷰는 public/assets/images/letter (임시 SVG, 시안 입수 시 교체) */
export const letterItems: LetterItem[] = [
  {
    id: "letter-blue",
    name: "블루 편지지",
    preview: "/assets/images/letter/letter-blue.svg",
    price: 0,
    isFree: true,
    description: "기본 제공 무료 편지지",
  },
  {
    id: "letter-pink",
    name: "핑크 편지지",
    preview: "/assets/images/letter/letter-pink.svg",
    price: 0,
    isFree: true,
    description: "기본 제공 무료 편지지",
  },
  {
    id: "letter-cream",
    name: "크림 편지지",
    preview: "/assets/images/letter/letter-cream.svg",
    price: 30,
    isFree: false,
    description: "따뜻한 크림 톤의 프리미엄 편지지",
  },
  {
    id: "letter-navy",
    name: "네이비 편지지",
    preview: "/assets/images/letter/letter-navy.svg",
    price: 50,
    isFree: false,
    description: "고급스러운 네이비 톤의 프리미엄 편지지",
  },
];
