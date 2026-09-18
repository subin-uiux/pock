import { type RefObject, useEffect } from "react";

/** 디자인 스크롤바 thumb ↔ 목록 scrollTop 동기화 · 드래그 */
export function useDesignScrollbar(
  listRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLElement | null>,
  thumbRef: RefObject<HTMLElement | null>,
  syncKey: string | number = 0,
) {
  useEffect(() => {
    const list = listRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!list || !track || !thumb) return;

    let dragging = false;
    let startY = 0;
    let startTop = 0;

    const sync = () => {
      const maxScroll = list.scrollHeight - list.clientHeight;
      const travel = Math.max(0, track.clientHeight - thumb.offsetHeight);
      if (maxScroll <= 0 || travel <= 0) {
        thumb.style.top = "0px";
        return;
      }
      thumb.style.top = `${(list.scrollTop / maxScroll) * travel}px`;
    };

    const onPointerDown = (event: PointerEvent) => {
      event.preventDefault();
      dragging = true;
      startY = event.clientY;
      startTop = thumb.offsetTop;
      thumb.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const maxScroll = list.scrollHeight - list.clientHeight;
      const travel = Math.max(0, track.clientHeight - thumb.offsetHeight);
      if (maxScroll <= 0 || travel <= 0) return;
      const nextTop = Math.min(travel, Math.max(0, startTop + (event.clientY - startY)));
      thumb.style.top = `${nextTop}px`;
      list.scrollTop = (nextTop / travel) * maxScroll;
    };

    const onPointerUp = () => {
      dragging = false;
    };

    list.addEventListener("scroll", sync, { passive: true });
    thumb.addEventListener("pointerdown", onPointerDown);
    thumb.addEventListener("pointermove", onPointerMove);
    thumb.addEventListener("pointerup", onPointerUp);
    thumb.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", sync);
    const observer = new ResizeObserver(sync);
    observer.observe(list);

    sync();

    return () => {
      list.removeEventListener("scroll", sync);
      thumb.removeEventListener("pointerdown", onPointerDown);
      thumb.removeEventListener("pointermove", onPointerMove);
      thumb.removeEventListener("pointerup", onPointerUp);
      thumb.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", sync);
      observer.disconnect();
    };
  }, [listRef, trackRef, thumbRef, syncKey]);
}
