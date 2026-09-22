import { useEffect } from "react";

/**
 * 마우스 누르는 동안 커서(열쇠) 각도를 살짝 틀었다가, 떼면 원위치
 */
export function CursorPressTilt() {
  useEffect(() => {
    const root = document.documentElement;
    const press = () => root.classList.add("is-cursor-pressing");
    const release = () => root.classList.remove("is-cursor-pressing");

    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    window.addEventListener("blur", release);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState !== "visible") release();
    });

    return () => {
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("blur", release);
      release();
    };
  }, []);

  return null;
}
