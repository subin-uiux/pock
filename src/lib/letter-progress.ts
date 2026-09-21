/** 편지 잠금 게이지 — 10칸 · 각 10% · 보낸날→개봉일 경과 비율 */

const TOTAL_BLOCKS = 10;

export function formatLetterDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

/** 오늘 기준 일수 오프셋 → `YYYY.MM.DD` (로컬 자정) */
export function letterDateFromToday(offsetDays: number): string {
  const date = startOfLocalDay(new Date());
  date.setDate(date.getDate() + offsetDays);
  return formatLetterDate(date);
}

export function parseLetterDate(value: string): Date | null {
  const normalized = value.trim().replace(/\./g, "-");
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(normalized);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!year || month < 1 || month > 12 || day < 1 || day > 31) return null;
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

function startOfLocalDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/** a → b 캘린더 일수 (b - a). 같은 날이면 0 */
export function calendarDaysBetween(from: Date, to: Date): number {
  const a = startOfLocalDay(from).getTime();
  const b = startOfLocalDay(to).getTime();
  return Math.round((b - a) / 86_400_000);
}

export interface LetterProgress {
  filledBlocks: number;
  totalBlocks: number;
  dday: string;
  remainingDays: number;
}

/**
 * 보낸 날(send) → 개봉일(open) 전체 기간 중 경과 비율로 게이지를 채운다.
 * 예: 전체 10일·7일 경과 → 7칸 · D-3
 */
export function getLetterProgress(
  sendDate: string,
  openDate: string,
  now: Date = new Date(),
): LetterProgress {
  const send = parseLetterDate(sendDate);
  const open = parseLetterDate(openDate);
  const today = startOfLocalDay(now);

  if (!send || !open) {
    return {
      filledBlocks: 0,
      totalBlocks: TOTAL_BLOCKS,
      dday: "D-?",
      remainingDays: 0,
    };
  }

  const totalDays = calendarDaysBetween(send, open);
  const remainingDays = calendarDaysBetween(today, open);
  const elapsedDays = calendarDaysBetween(send, today);

  if (totalDays <= 0) {
    return {
      filledBlocks: TOTAL_BLOCKS,
      totalBlocks: TOTAL_BLOCKS,
      dday: remainingDays <= 0 ? "D-Day" : `D-${remainingDays}`,
      remainingDays,
    };
  }

  const ratio = Math.min(1, Math.max(0, elapsedDays / totalDays));
  const filledBlocks = Math.min(
    TOTAL_BLOCKS,
    Math.max(0, Math.round(ratio * TOTAL_BLOCKS)),
  );

  let dday: string;
  if (remainingDays > 0) dday = `D-${remainingDays}`;
  else if (remainingDays === 0) dday = "D-Day";
  else dday = `D+${Math.abs(remainingDays)}`;

  return {
    filledBlocks,
    totalBlocks: TOTAL_BLOCKS,
    dday,
    remainingDays,
  };
}
