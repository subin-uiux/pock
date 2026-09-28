import { type RefObject, useEffect } from "react";

/** 디자인 스크롤바 thumb ↔ 목록 scrollTop 동기화 · 드래그 · 오버플로 시에만 표시 */
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
    /** 휠 부드러운 스크롤 — 목표 위치로 매 프레임 감속 이동 */
    let target = list.scrollTop;
    let raf = 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const stopSmooth = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const step = () => {
      const current = list.scrollTop;
      const diff = target - current;
      if (Math.abs(diff) < 1) {
        list.scrollTop = target;
        raf = 0;
        return;
      }
      let next = current + diff * 0.18;
      if (Math.abs(next - current) < 1) next = current + Math.sign(diff);
      list.scrollTop = next;
      raf = requestAnimationFrame(step);
    };

    const onWheel = (event: WheelEvent) => {
      const maxScroll = list.scrollHeight - list.clientHeight;
      if (maxScroll <= 0 || reduceMotion || event.ctrlKey) return;
      event.preventDefault();
      const unit =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? list.clientHeight
            : 1;
      const base = raf ? target : list.scrollTop;
      target = Math.min(maxScroll, Math.max(0, base + event.deltaY * unit));
      if (!raf) raf = requestAnimationFrame(step);
    };

    const sync = () => {
      const maxScroll = list.scrollHeight - list.clientHeight;
      const overflow = list.clientHeight > 0 && maxScroll > 0;
      track.hidden = !overflow;
      if (!overflow) {
        thumb.style.top = "0px";
        return;
      }
      const travel = Math.max(0, track.clientHeight - thumb.offsetHeight);
      if (travel <= 0) {
        thumb.style.top = "0px";
        return;
      }
      thumb.style.top = `${(list.scrollTop / maxScroll) * travel}px`;
    };

    const onPointerDown = (event: PointerEvent) => {
      event.preventDefault();
      stopSmooth();
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
      target = list.scrollTop;
    };

    const onPointerUp = () => {
      dragging = false;
    };

    list.addEventListener("scroll", sync, { passive: true });
    list.addEventListener("wheel", onWheel, { passive: false });
    thumb.addEventListener("pointerdown", onPointerDown);
    thumb.addEventListener("pointermove", onPointerMove);
    thumb.addEventListener("pointerup", onPointerUp);
    thumb.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", sync);
    const observer = new ResizeObserver(sync);
    observer.observe(list);

    sync();

    return () => {
      stopSmooth();
      list.removeEventListener("scroll", sync);
      list.removeEventListener("wheel", onWheel);
      thumb.removeEventListener("pointerdown", onPointerDown);
      thumb.removeEventListener("pointermove", onPointerMove);
      thumb.removeEventListener("pointerup", onPointerUp);
      thumb.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", sync);
      observer.disconnect();
    };
  }, [listRef, trackRef, thumbRef, syncKey]);
}
