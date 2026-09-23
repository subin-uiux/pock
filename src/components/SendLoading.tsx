import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

type SendLoadingPhase = "loading" | "complete";

interface SendLoadingProps {
  open: boolean;
  /** loading-bar 1→2→3 후 전송완료로 전환될 때 (저장용) */
  onComplete?: () => void;
  /** 편지 더 쓰기 — 보내기 화면으로 */
  onWriteMore: () => void;
  /** 전송함 — 보낸 편지함으로 */
  onOpenSent: () => void;
}

const LOADING_BARS = [
  "/assets/images/loading-bar1.svg",
  "/assets/images/loading-bar2.svg",
  "/assets/images/loading-bar3.svg",
] as const;

const BAR_STEP_MS = 700; /* 각 바 노출 · 임시값 */

/**
 * POCK 전송 로딩 — loading-bar1→2→3 → 전송완료! + 액션 버튼
 */
export function SendLoading({
  open,
  onComplete,
  onWriteMore,
  onOpenSent,
}: SendLoadingProps) {
  const [phase, setPhase] = useState<SendLoadingPhase>("loading");
  const [barIndex, setBarIndex] = useState(0);

  useEffect(() => {
    if (!open) {
      setPhase("loading");
      setBarIndex(0);
      return;
    }

    setPhase("loading");
    setBarIndex(0);

    const timers: number[] = [];

    LOADING_BARS.forEach((_, index) => {
      if (index === 0) return;
      timers.push(
        window.setTimeout(() => {
          setBarIndex(index);
        }, BAR_STEP_MS * index),
      );
    });

    timers.push(
      window.setTimeout(() => {
        setPhase("complete");
        onComplete?.();
      }, BAR_STEP_MS * LOADING_BARS.length),
    );

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [open, onComplete]);

  if (!open) return null;

  const isComplete = phase === "complete";

  return (
    <div
      className={
        isComplete ? "send-loading send-loading--complete" : "send-loading"
      }
      role="status"
      aria-live="polite"
      aria-busy={!isComplete}
      aria-label={isComplete ? "전송완료" : "전송 중"}
    >
      <div className="send-loading__body">
        {isComplete ? (
          <img
            className="send-loading__logo send-loading__logo--complete"
            src="/assets/images/loading-complete.svg"
            alt=""
            width={250}
            height={204}
          />
        ) : (
          <img
            className="send-loading__logo send-loading__logo--loading"
            src="/assets/images/loading.svg"
            alt=""
            width={200}
            height={230}
          />
        )}

        <p className="send-loading__text">
          {isComplete ? "전송완료!" : "Loading ..."}
        </p>

        {!isComplete ? (
          <img
            className="send-loading__bar-image"
            src={LOADING_BARS[barIndex]}
            alt=""
            width={154}
            height={16}
          />
        ) : (
          <div className="send-loading__actions">
            <Button
              variant="action-text"
              className="send-loading__action"
              onClick={onWriteMore}
            >
              편지 더 쓰기
            </Button>
            <Button
              variant="action-text"
              className="send-loading__action"
              onClick={onOpenSent}
            >
              전송함
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
