import { type RefObject, useEffect } from "react";

/** 커서 높이 = 줄 간격 × 비율 (24 → 16) */
const CARET_RATIO = 2 / 3;

/**
 * 편지지 커서 — 네이티브 caret은 폰트 크기를 따라 가로선을 넘으므로
 * 숨기고(CSS caret-color: transparent) 두 가로선 사이 가운데에 직접 그림
 */
export function useLetterCaret(
  bodyRef: RefObject<HTMLElement | null>,
  caretRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const body = bodyRef.current;
    const caret = caretRef.current;
    const compose = body?.parentElement;
    if (!body || !caret || !compose) return;

    const hide = () => {
      caret.hidden = true;
    };

    const lineHeight = () =>
      parseFloat(getComputedStyle(body).lineHeight) || 24;

    /** 접힌 selection 위치 — 빈 줄·빈 본문은 텍스트 rect가 없어 대체 계산 */
    const caretRect = (range: Range): DOMRect => {
      const rects = range.getClientRects();
      if (rects.length > 0 && rects[0].height > 0) return rects[0];

      const node = range.startContainer;
      const offset = range.startOffset;
      if (node.nodeType === Node.ELEMENT_NODE) {
        const child = node.childNodes[offset];
        if (child instanceof Element) {
          const r = child.getBoundingClientRect();
          if (r.height > 0) return new DOMRect(r.left, r.top, 0, r.height);
        }
        const prev = node.childNodes[offset - 1];
        if (prev) {
          const probe = document.createRange();
          probe.selectNodeContents(prev);
          probe.collapse(false);
          const prevRects = probe.getClientRects();
          if (prevRects.length > 0) return prevRects[prevRects.length - 1];
        }
      }

      const box = body.getBoundingClientRect();
      const style = getComputedStyle(body);
      return new DOMRect(
        box.left + parseFloat(style.paddingLeft),
        box.top + parseFloat(style.paddingTop),
        0,
        lineHeight(),
      );
    };

    const update = () => {
      const selection = window.getSelection();
      if (
        document.activeElement !== body ||
        !selection ||
        selection.rangeCount === 0 ||
        !selection.isCollapsed
      ) {
        hide();
        return;
      }
      const range = selection.getRangeAt(0);
      if (!body.contains(range.startContainer)) {
        hide();
        return;
      }

      const rect = caretRect(range);
      const origin = compose.getBoundingClientRect();
      const lineH = lineHeight();
      const caretH = Math.round(lineH * CARET_RATIO);
      const centerY = rect.top + rect.height / 2 - origin.top;
      const line = Math.max(0, Math.floor(centerY / lineH));
      /* 가로선 = 각 줄 맨 아래 1px → 그 위 공간 가운데 */
      const top = line * lineH + (lineH - 1 - caretH) / 2;

      caret.style.height = `${caretH}px`;
      caret.style.transform = `translate(${rect.left - origin.left}px, ${top}px)`;
      caret.hidden = false;
      /* 이동 시 깜빡임 처음부터 — 입력 중에는 보이는 상태 유지 */
      caret.style.animation = "none";
      void caret.offsetWidth;
      caret.style.animation = "";
    };

    document.addEventListener("selectionchange", update);
    body.addEventListener("focus", update);
    body.addEventListener("blur", hide);
    body.addEventListener("input", update);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    hide();

    return () => {
      document.removeEventListener("selectionchange", update);
      body.removeEventListener("focus", update);
      body.removeEventListener("blur", hide);
      body.removeEventListener("input", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [bodyRef, caretRef]);
}
