import { useCallback, useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Letter_write } from "@/components/Letter_write";

const MIN_WIDTH = 320;
const MAX_WIDTH = 768;
const START_WIDTH = 360; /* Mo 캔버스 */
const TB_FROM_WIDTH = 541; /* 541~ : Tb 샘플과 동일 크기·레이아웃 */
const INSET_X = 20; /* 좌우 — 360 이상일 때만 */

/**
 * 가이드 — Letter_write Mo 반응형 미리보기
 * 점선 박스를 가상 뷰포트로 두고 320~768 드래그.
 * ~540: Mo · 541~: 아래 Tb 샘플과 같은 레이아웃·크기.
 */
export function GuideLetterWriteMoResize() {
  const hintId = useId();
  const frameRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startWidth: number } | null>(null);
  const [width, setWidth] = useState(START_WIDTH);

  const layout: "mo" | "tb" = width >= TB_FROM_WIDTH ? "tb" : "mo";
  /** 360 이상이면 좌우 20 — 안쪽은 항상 ≥320 */
  const useInset = width >= START_WIDTH && width < TB_FROM_WIDTH;
  const innerWidth = useInset ? width - INSET_X * 2 : width;

  const onPointerMove = useCallback((event: PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    const next = Math.min(
      MAX_WIDTH,
      Math.max(MIN_WIDTH, Math.round(drag.startWidth + (event.clientX - drag.startX))),
    );
    setWidth(next);
  }, []);

  const onPointerUp = useCallback(() => {
    dragRef.current = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }, [onPointerMove]);

  useEffect(() => {
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  const onHandlePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dragRef.current = {
      startX: event.clientX,
      startWidth: frameRef.current?.offsetWidth ?? width,
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <div className="window-system__sample">
      <p className="window-system__caption">Letter_write (Mo)</p>
      <p className="window-system__hint" id={hintId}>
        점선 박스 오른쪽 끝을 드래그해 가상 화면 너비를 조절하세요. (min 320px)
      </p>
      <div
        ref={frameRef}
        className={
          useInset
            ? "window-system__letter-resize window-system__letter-resize--inset"
            : "window-system__letter-resize"
        }
        style={{ width: `${width}px` }}
        role="group"
        aria-labelledby={hintId}
      >
        <div
          className="window-system__letter-resize-inner"
          style={{ width: `${innerWidth}px` }}
        >
          <Letter_write size={layout} />
        </div>
        <button
          type="button"
          className="window-system__letter-resize-handle"
          role="slider"
          aria-label="가상 화면 너비"
          aria-valuemin={MIN_WIDTH}
          aria-valuemax={MAX_WIDTH}
          aria-valuenow={width}
          aria-valuetext={`${width}픽셀, ${layout === "tb" ? "Tb" : "Mo"} 레이아웃`}
          aria-orientation="horizontal"
          onPointerDown={onHandlePointerDown}
        />
      </div>
    </div>
  );
}
