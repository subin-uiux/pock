import { useBreakpoint } from "@/hooks/useBreakpoint";
import { ClickSplosion } from "@/components/ClickSplosion";
import { SparkleCursor } from "@/components/SparkleCursor";

/** Mo: 클릭 스파클 · Tb+: 마우스 트레일 */
export function CursorSparkles() {
  const size = useBreakpoint();
  return size === "mo" ? <ClickSplosion /> : <SparkleCursor />;
}
