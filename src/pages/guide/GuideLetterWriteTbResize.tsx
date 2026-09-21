import { useCallback, useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Letter_write } from "@/components/Letter_write";

const MIN_WIDTH = 769;
const MAX_WIDTH = 1024;
const START_WIDTH = 1024; /* Tb 상한 */
const INSET_X = 64; /* 좌우 간격 */

/**
 * 가이드 — Letter_write Tb 반응형 미리보기
 * 점선 박스 769~1024 · 좌우 inset 64.
 */
export function GuideLetterWriteTbResize() {
  const hintId = useId();
  const frameRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startWidth: number } | null>(null);
  const [width, setWidth] = useState(START_WIDTH);

  const innerWidth = width - INSET_X * 2;

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
      <p className="window-system__caption">Letter_write (Tb)</p>
      <p className="window-system__hint" id={hintId}>
        점선 박스 오른쪽 끝을 드래그해 가상 화면 너비를 조절하세요.
      </p>
      <div
        ref={frameRef}
        className="window-system__letter-resize window-system__letter-resize--inset window-system__letter-resize--tb"
        style={{ width: `${width}px` }}
        role="group"
        aria-labelledby={hintId}
      >
        <div
          className="window-system__letter-resize-inner"
          style={{ width: `${innerWidth}px` }}
        >
          <Letter_write size="tb" />
        </div>
        <button
          type="button"
          className="window-system__letter-resize-handle"
          role="slider"
          aria-label="가상 화면 너비"
          aria-valuemin={MIN_WIDTH}
          aria-valuemax={MAX_WIDTH}
          aria-valuenow={width}
          aria-valuetext={`${width}픽셀, Tb 레이아웃`}
          aria-orientation="horizontal"
          onPointerDown={onHandlePointerDown}
        />
      </div>
    </div>
  );
}
