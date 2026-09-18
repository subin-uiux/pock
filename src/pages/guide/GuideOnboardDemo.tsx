import { useState } from "react";

const STEP_COUNT = 8;

/** 가이드용 온보딩 팝업 데모 — 단계 카피 미확정, 페이지네이션만 동작 */
export function GuideOnboardDemo() {
  const [step, setStep] = useState(0);
  const isLast = step === STEP_COUNT - 1;

  return (
    <article className="onboard-popup" aria-label="온보딩 가이드">
      <h4 className="onboard-popup__title">내 프로필</h4>
      <p className="onboard-popup__desc">
        내 닉네임과 보유한 코인을
        <br />
        언제든지 확인할 수 있어요.
      </p>
      <ol className="onboard-popup__dots" aria-label="가이드 단계">
        {Array.from({ length: STEP_COUNT }, (_, index) => (
          <li
            key={index}
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
          className="btn btn--push"
          type="button"
          onClick={() =>
            setStep((current) => (current >= STEP_COUNT - 1 ? 0 : current + 1))
          }
        >
          {isLast ? "완료" : "다음"}
        </button>
      </div>
    </article>
  );
}
