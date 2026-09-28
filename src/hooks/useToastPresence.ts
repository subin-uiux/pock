import { useEffect, useState } from "react";

/** 토스트 퇴장 애니메이션 시간 — CSS `toast-slide-out`과 동일 */
const TOAST_LEAVE_MS = 300;

/**
 * 토스트 등장·퇴장 — open이 꺼져도 퇴장 애니메이션 동안 DOM 유지
 */
export function useToastPresence(open: boolean) {
  const [mounted, setMounted] = useState(open);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setLeaving(false);
      return;
    }
    if (!mounted) return;
    setLeaving(true);
    const timer = window.setTimeout(() => {
      setMounted(false);
      setLeaving(false);
    }, TOAST_LEAVE_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return { mounted, leaving };
}
