import { useCountdownHms } from "@/hooks/useCountdownHms";

const DEFAULT_TIMER = "22:07:32";

/** 가이드 정적 마크업용 — letter-card__status--timer 안 텍스트 */
export function LetterCardTimerText({
  initial = DEFAULT_TIMER,
}: {
  initial?: string;
}) {
  const text = useCountdownHms(initial);
  return <>{text}</>;
}

export { DEFAULT_TIMER as LETTER_CARD_DEFAULT_TIMER };
