import { useState } from "react";
import { Button } from "@/components/Button";
import { SignUpStepGauge } from "@/components/SignUpStepGauge";

/**
 * 가이드 — 캐릭터 설정 단계 게이지 샘플 (Mo / Pad·Pc)
 */
export function GuideSignUpStepGaugeSection() {
  const [stepMo, setStepMo] = useState(1);
  const [stepPad, setStepPad] = useState(3);

  const next = (value: number) => (value >= 4 ? 1 : value + 1);

  return (
    <section
      className="signup-step-system"
      id="signup-step-system"
      aria-labelledby="signup-step-system-title"
    >
      <h2
        className="signup-step-system__title"
        id="signup-step-system-title"
      >
        SIGN UP STEP
      </h2>
      <div className="signup-step-system__board">
        <h3 className="signup-step-system__card-title">Sign Up Step</h3>
        <div className="signup-step-system__samples">
          <div className="signup-step-system__stage">
            <p className="signup-step-system__caption">
              Mobile · gap 22px · step {stepMo}
            </p>
            <SignUpStepGauge size="mo" step={stepMo} />
            <Button
              variant="action-text"
              onClick={() => setStepMo((prev) => next(prev))}
            >
              다음 단계
            </Button>
          </div>
          <div className="signup-step-system__stage">
            <p className="signup-step-system__caption">
              Tablet · PC · gap 30px · step {stepPad}
            </p>
            <SignUpStepGauge size="tb" step={stepPad} />
            <Button
              variant="action-text"
              onClick={() => setStepPad((prev) => next(prev))}
            >
              다음 단계
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
