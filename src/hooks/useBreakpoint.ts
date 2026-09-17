import { useEffect, useState } from "react";

export type BreakpointSize = "mo" | "tb" | "pc";

function readSize(): BreakpointSize {
  if (typeof window === "undefined") return "mo";
  if (window.matchMedia("(min-width: 1920px)").matches) return "pc";
  if (window.matchMedia("(min-width: 1024px)").matches) return "tb";
  return "mo";
}

/** 390 / 1024 / 1920 캔버스에 맞춘 반응형 크기 */
export function useBreakpoint(): BreakpointSize {
  const [size, setSize] = useState<BreakpointSize>(() => readSize());

  useEffect(() => {
    const update = () => setSize(readSize());
    const mqTb = window.matchMedia("(min-width: 1024px)");
    const mqPc = window.matchMedia("(min-width: 1920px)");
    update();
    mqTb.addEventListener("change", update);
    mqPc.addEventListener("change", update);
    return () => {
      mqTb.removeEventListener("change", update);
      mqPc.removeEventListener("change", update);
    };
  }, []);

  return size;
}
