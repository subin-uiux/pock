import { useEffect, useState } from "react";

export type BreakpointSize = "mo" | "tb" | "pc";

/**
 * Mo: 360~768
 * Tb: 769~ (태블릿 레이아웃. 데스크톱도 동일 — 양옆 여백만 늘어남)
 * Pc: 컴포넌트 size 호환용 — breakpoint로는 tb와 동일하게 취급
 */
function readSize(): BreakpointSize {
  if (typeof window === "undefined") return "mo";
  if (window.matchMedia("(min-width: 769px)").matches) return "tb";
  return "mo";
}

/** 모바일(~768) / 태블릿·데스크톱(769~) — 데스크톱은 태블릿과 동일 UI */
export function useBreakpoint(): BreakpointSize {
  const [size, setSize] = useState<BreakpointSize>(() => readSize());

  useEffect(() => {
    const update = () => setSize(readSize());
    const mqTb = window.matchMedia("(min-width: 769px)");
    update();
    mqTb.addEventListener("change", update);
    return () => mqTb.removeEventListener("change", update);
  }, []);

  return size;
}
