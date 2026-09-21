import { useEffect, useState } from "react";

type SendLoadingPhase = "loading" | "complete";

interface SendLoadingProps {
  open: boolean;
  /** loading 바 채움 완료 + 전송완료 표시 후 호출 */
  onFinished: () => void;
}

const FILL_MS = 2000;
const COMPLETE_HOLD_MS = 1000; /* 전송완료 노출 · 임시값 */

/**
 * POCK 전송 로딩 — Loading … → 전송완료!
 */
export function SendLoading({ open, onFinished }: SendLoadingProps) {
  const [phase, setPhase] = useState<SendLoadingPhase>("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) {
      setPhase("loading");
      setProgress(0);
      return;
    }

    setPhase("loading");
    setProgress(0);

    const started = performance.now();
    let frame = 0;
    let completeTimer = 0;

    const tick = (now: number) => {
      const ratio = Math.min(1, (now - started) / FILL_MS);
      setProgress(ratio * 100);
      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      setPhase("complete");
      completeTimer = window.setTimeout(() => {
        onFinished();
      }, COMPLETE_HOLD_MS);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(completeTimer);
    };
  }, [open, onFinished]);

  if (!open) return null;

  const isComplete = phase === "complete";

  return (
    <div
      className="send-loading"
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
            width={90}
            height={92}
          />
        ) : (
          <img
            className="send-loading__logo send-loading__logo--loading"
            src="/assets/images/loading.svg"
            alt=""
            width={100}
            height={114}
          />
        )}

        <p className="send-loading__text">
          {isComplete ? "전송완료!" : "Loading ..."}
        </p>

        {!isComplete ? (
          <div
            className="send-loading__bar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div
              className="send-loading__bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
