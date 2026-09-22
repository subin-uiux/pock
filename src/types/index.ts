import type {
  BackgroundId,
  CharacterId,
  OutfitId,
} from "@/lib/profile-setup";

export type PockStatus = "locked" | "opening" | "opened";
export type PockType = "received" | "sent";

export interface PockUser {
  id: string;
  name: string;
  profileImage: string;
  /** 친구목록 아바타 배경 — male/female */
  gender?: "male" | "female";
  /** 카드 썸네일 캐릭터·옷·배경 — 있으면 PockWindowThumb 사용 */
  character?: CharacterId;
  outfit?: OutfitId;
  background?: BackgroundId;
}

export interface PockItem {
  id: string;
  type: PockType;
  sender: PockUser;
  receiver: PockUser;
  message: string;
  image: string;
  letter: string;
  status: PockStatus;
  createdAt: string;
  openDate: string;
  openTime: string;
  hint: string | null;
  hintCost: number;
  title?: string;
}

export interface LetterItem {
  id: string;
  name: string;
  preview: string;
  price: number;
  isFree: boolean;
  description: string;
}

export interface CoinHistoryItem {
  id: string;
  type: "earn" | "spend";
  amount: number;
  reason: string;
  date: string;
}

export interface AttendanceReward {
  day: number;
  amount: number;
}

export interface CoinState {
  balance: number;
  attendance: boolean;
  attendanceDays: number;
  reward: number;
  history: CoinHistoryItem[];
  attendanceRewards: AttendanceReward[];
}

export interface NoticeItem {
  id: string;
  title: string;
  content: string;
  date: string;
  isNew: boolean;
}

export type LetterCardMailbox = "sent" | "received";
export type LetterCardSize = "mo" | "tb";
export type LetterCardVariant =
  | "progress"
  | "timer"
  | "unopened"
  | "open"
  | "gift";

export type LetterTheme =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "rainbow"
  | "heart"
  | "star"
  | "stripe"
  | "clover";

export type PopupVariant = "info" | "warning" | "share";

/** POCK 작성 → 전송 payload */
export interface LetterWritePayload {
  title: string;
  body: string;
  from: string;
  date: string;
  letterId: string;
  imageUrl: string | null;
  friend: PockUser | null;
}
