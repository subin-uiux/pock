import { useEffect, useState } from "react";

/** "HH:MM:SS" → 초. 형식이 아니면 0 */
export function parseHms(value: string): number {
  const parts = value.trim().split(":").map(Number);
  if (parts.length !== 3 || parts.some((n) => !Number.isFinite(n))) return 0;
  const [h, m, s] = parts;
  return Math.max(0, Math.floor(h * 3600 + m * 60 + s));
}

/** 초 → "HH:MM:SS" */
export function formatHms(totalSeconds: number): string {
  const t = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

/**
 * 마운트 시점의 HH:MM:SS에서 1초마다 감소하는 카운트다운.
 * 탭 백그라운드에서도 실제 경과 시간에 맞춤.
 */
export function useCountdownHms(initialHms: string): string {
  const [display, setDisplay] = useState(() => formatHms(parseHms(initialHms)));

  useEffect(() => {
    const endsAt = Date.now() + parseHms(initialHms) * 1000;

    const tick = () => {
      const remaining = Math.max(0, Math.ceil((endsAt - Date.now()) / 1000));
      setDisplay(formatHms(remaining));
    };

    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, [initialHms]);

  return display;
}
