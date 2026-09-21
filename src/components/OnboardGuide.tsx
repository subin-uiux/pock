import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import {
  HOME_ONBOARD_STEPS,
  type HomeOnboardPlacement,
  type HomeOnboardStep,
} from "@/data/home-onboard";

interface OnboardGuideProps {
  open: boolean;
  steps?: HomeOnboardStep[];
  onSkip: () => void;
  onComplete: () => void;
}

interface PopupPos {
  top: number;
  left: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function placePopup(
  target: DOMRect,
  placement: HomeOnboardPlacement,
  popupWidth: number,
  popupHeight: number,
): PopupPos {
  const gap = 12;
  const margin = 16;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let top = target.bottom + gap;
  let left = target.left + target.width / 2 - popupWidth / 2;

  if (placement === "above") {
    top = target.top - gap - popupHeight;
  } else if (placement === "left") {
    top = target.top + target.height / 2 - popupHeight / 2;
    left = target.left - gap - popupWidth;
  } else if (placement === "right") {
    top = target.top + target.height / 2 - popupHeight / 2;
    left = target.right + gap;
  }

  left = clamp(left, margin, vw - popupWidth - margin);
  top = clamp(top, margin, vh - popupHeight - margin);
  return { top, left };
}

/**
 * 홈 첫 진입 온보딩 — Onboarding Guide Popup + 타깃 하이라이트
 */
export function OnboardGuide({
  open,
  steps = HOME_ONBOARD_STEPS,
  onSkip,
  onComplete,
}: OnboardGuideProps) {
  const [step, setStep] = useState(0);
  const [pos, setPos] = useState<PopupPos>({ top: 24, left: 16 });
  const popupRef = useRef<HTMLElement>(null);
  const current = steps[step];
  const isLast = step >= steps.length - 1;

  const syncTarget = useCallback(() => {
    if (!open || !current) {
      document.body.removeAttribute("data-onboard-target");
      document.body.classList.remove("is-onboard-active");
      document
        .querySelectorAll(".is-onboard-target")
        .forEach((node) => node.classList.remove("is-onboard-target"));
      return;
    }

    document.body.classList.add("is-onboard-active");
    document.body.setAttribute("data-onboard-target", current.id);

    document
      .querySelectorAll(".is-onboard-target")
      .forEach((node) => node.classList.remove("is-onboard-target"));

    const el = document.querySelector(current.selector);
    if (!(el instanceof HTMLElement)) return;

    el.classList.add("is-onboard-target");

    const rect = el.getBoundingClientRect();
    const popupBox = popupRef.current?.getBoundingClientRect();
    const popupW = popupBox?.width || 240;
    const popupH = popupBox?.height || 180;
    setPos(placePopup(rect, current.placement, popupW, popupH));
  }, [open, current]);

  useLayoutEffect(() => {
    syncTarget();
  }, [syncTarget, step]);

  useEffect(() => {
    if (!open) return;
    const onResize = () => syncTarget();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [open, syncTarget]);

  useEffect(() => {
    if (!open) return;
    return () => {
      document.body.removeAttribute("data-onboard-target");
      document.body.classList.remove("is-onboard-active");
      document
        .querySelectorAll(".is-onboard-target")
        .forEach((node) => node.classList.remove("is-onboard-target"));
    };
  }, [open]);

  useEffect(() => {
    if (!open) setStep(0);
  }, [open]);

  if (!open || !current) return null;

  const popupStyle: CSSProperties = {
    top: pos.top,
    left: pos.left,
  };

  const descLines = current.description.split("\n");

  const handleNext = () => {
    if (isLast) {
      onComplete();
      return;
    }
    setStep((value) => value + 1);
  };

  return createPortal(
    <div className="onboard-guide" role="dialog" aria-modal="true" aria-label="온보딩 가이드">
      <DimmedOverlay open />
      <article
        ref={popupRef}
        className="onboard-popup onboard-guide__popup"
        style={popupStyle}
      >
        <h4 className="onboard-popup__title">{current.title}</h4>
        <p className="onboard-popup__desc">
          {descLines.map((line, index) => (
            <span key={`${current.id}-${index}`}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
        <ol className="onboard-popup__dots" aria-label="가이드 단계">
          {steps.map((item, index) => (
            <li
              key={item.id}
              className={`onboard-popup__dot${index === step ? " is-active" : ""}`}
            />
          ))}
        </ol>
        <div className="onboard-popup__nav">
          <button className="onboard-popup__skip" type="button" onClick={onSkip}>
            건너뛰기
          </button>
          <button
            className="btn btn--push onboard-popup__next"
            type="button"
            onClick={handleNext}
          >
            {isLast ? "완료" : "다음"}
          </button>
        </div>
      </article>
    </div>,
    document.body,
  );
}
