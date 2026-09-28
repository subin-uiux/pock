import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 페이지(경로) 이동 시 맨 위부터 표시
 * html은 scroll-behavior: smooth라 instant로 즉시 이동 · 내부 스크롤 .main도 초기화
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.querySelectorAll<HTMLElement>(".main").forEach((main) => {
      main.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}
