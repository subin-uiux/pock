import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/** 닫기 버튼 활성화까지 시청 시간 */
const CLOSE_DELAY_MS = 10_000;

interface AdVideoLayerProps {
  open: boolean;
  /** 10초 시청 후 닫기 — 보상 지급 시점 */
  onClose: () => void;
}

/**
 * 광고 영상 — 코인 상점 「광고보고 1 코인받기」, 편지지 광고 해금
 * 10초 전에는 닫기(X) 비활성
 */
export function AdVideoLayer({ open, onClose }: AdVideoLayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if (!open) return;
    setCanClose(false);
    void videoRef.current?.play().catch(() => {});
    const timer = window.setTimeout(() => setCanClose(true), CLOSE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open || !canClose) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, canClose, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="ad-video-layer"
      role="dialog"
      aria-modal="true"
      aria-label="광고 영상"
    >
      <button
        type="button"
        className="ad-video-layer__close"
        aria-label="닫기"
        disabled={!canClose}
        onClick={onClose}
      >
        <img
          className="ad-video-layer__close-icon"
          src="/assets/images/pixelarticons_close.svg"
          alt=""
          width={18}
          height={18}
        />
      </button>
      <video
        ref={videoRef}
        className="ad-video-layer__video"
        src="/assets/images/ad_video.MOV"
        autoPlay
        loop
        playsInline
      />
    </div>,
    document.body,
  );
}
