import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { resetDemoState } from "./lib/storage";
import "./styles/index.css";

resetDemoState();

document.documentElement.classList.add("js-ready");

/*
 * iOS Safari — 16px 미만 입력칸 포커스 시 자동 확대 방지 (편지지 14px).
 * iOS는 maximum-scale이 있어도 핀치 확대를 허용함. Android는 자동 확대가 없고 핀치까지 막히므로 제외.
 */
const isIOS =
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.userAgent.includes("Macintosh") && navigator.maxTouchPoints > 1);
if (isIOS) {
  document
    .querySelector('meta[name="viewport"]')
    ?.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0",
    );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
