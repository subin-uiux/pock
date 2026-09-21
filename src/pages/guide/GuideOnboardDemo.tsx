import { useState } from "react";
import { HOME_ONBOARD_STEPS } from "@/data/home-onboard";

/** 가이드용 온보딩 팝업 데모 — 홈 온보딩과 동일 단계 카피 */
export function GuideOnboardDemo() {
  const [step, setStep] = useState(0);
  const current = HOME_ONBOARD_STEPS[step];
  const isLast = step === HOME_ONBOARD_STEPS.length - 1;
  const descLines = current.description.split("\n");

  return (
    <article className="onboard-popup" aria-label="온보딩 가이드">
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
        {HOME_ONBOARD_STEPS.map((item, index) => (
          <li
            key={item.id}
            className={`onboard-popup__dot${index === step ? " is-active" : ""}`}
          />
        ))}
      </ol>
      <div className="onboard-popup__nav">
        <button
          className="onboard-popup__skip"
          type="button"
          onClick={() => setStep(0)}
        >
          건너뛰기
        </button>
        <button
          className="btn btn--push onboard-popup__next"
          type="button"
          onClick={() =>
            setStep((currentStep) =>
              currentStep >= HOME_ONBOARD_STEPS.length - 1
                ? 0
                : currentStep + 1,
            )
          }
        >
          {isLast ? "완료" : "다음"}
        </button>
      </div>
    </article>
  );
}
