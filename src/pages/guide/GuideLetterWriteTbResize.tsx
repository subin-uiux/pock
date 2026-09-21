import { useCallback, useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Letter_write } from "@/components/Letter_write";

const MIN_WIDTH = 500; /* 구 Tb */
const MAX_WIDTH = 623; /* 구 Pc */
const START_WIDTH = 560;

/**
 * 가이드 — Letter_write Tb/Pc 미리보기
 * 동일 레이아웃 · 점선 박스 500~623 드래그로 폭만 조절.
 */
export function GuideLetterWriteTbResize() {
  const hintId = useId();
  const frameRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startWidth: number } | null>(null);
  const [width, setWidth] = useState(START_WIDTH);

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
      <p className="window-system__caption">Letter_write (Tb, Pc)</p>
      <p className="window-system__hint" id={hintId}>
        점선 박스 오른쪽 끝을 드래그해 폭을 조절하세요. (500~623px · 레이아웃 동일)
      </p>
      <div
        ref={frameRef}
        className="window-system__letter-resize window-system__letter-resize--tb"
        style={{ width: `${width}px` }}
        role="group"
        aria-labelledby={hintId}
      >
        <div className="window-system__letter-resize-inner" style={{ width: "100%" }}>
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
          aria-valuetext={`${width}픽셀, Tb/Pc 레이아웃`}
          aria-orientation="horizontal"
          onPointerDown={onHandlePointerDown}
        />
      </div>
    </div>
  );
}
