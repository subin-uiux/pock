/** 편지 잠금 게이지 — 10칸 · 남은 일수 1일 = 1칸 (D-2 → 2칸, 10일+ → 10칸) */

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
 * 개봉일까지 남은 일수로 게이지를 채운다.
 * D-2 → 2칸 · D-10 이상 → 10칸 · D-Day(0) → 0칸
 */
export function getLetterProgress(
  _sendDate: string,
  openDate: string,
  now: Date = new Date(),
): LetterProgress {
  const open = parseLetterDate(openDate);
  const today = startOfLocalDay(now);

  if (!open) {
    return {
      filledBlocks: 0,
      totalBlocks: TOTAL_BLOCKS,
      dday: "D-?",
      remainingDays: 0,
    };
  }

  const remainingDays = calendarDaysBetween(today, open);
  const filledBlocks = Math.min(
    TOTAL_BLOCKS,
    Math.max(0, remainingDays),
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
