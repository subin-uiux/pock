import { storage } from "@/lib/storage";

const STORAGE_KEY = "pock.noticeRead";

/** 공지사항을 한 번이라도 열었으면 true */
export function isNoticeRead(): boolean {
  return storage.get<boolean>(STORAGE_KEY) === true;
}

/** 설정 빨간 점 — 미읽음이면 true */
export function hasUnreadNotice(): boolean {
  return !isNoticeRead();
}

/** 공지사항 페이지 진입 시 읽음 처리 */
export function markNoticeRead(): boolean {
  return storage.set(STORAGE_KEY, true);
}
