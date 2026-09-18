import { useDesignScrollbar } from "@/hooks/useDesignScrollbar";
import { type RefObject, useRef } from "react";

interface PockWindowScrollbarProps {
  listRef: RefObject<HTMLElement | null>;
  /** 목록 길이 등 — thumb 위치 재계산 트리거 */
  syncKey?: string | number;
}

/** Friend_list 디자인 스크롤바 — 휠·드래그 연동 */
export function PockWindowScrollbar({ listRef, syncKey = 0 }: PockWindowScrollbarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  useDesignScrollbar(listRef, trackRef, thumbRef, syncKey);

  return (
    <div className="pock-window__scroll" ref={trackRef} aria-hidden="true">
      <div className="pock-window__scroll-thumb" ref={thumbRef} />
    </div>
  );
}
