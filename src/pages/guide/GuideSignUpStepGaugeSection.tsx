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
      <p className="signup-step-system__eyebrow">POCK · Sign Up Step Gauge</p>
      <div className="signup-step-system__panel">
        <h2
          className="signup-step-system__title"
          id="signup-step-system-title"
        >
          SIGN UP STEP
        </h2>
        <p className="signup-step-system__lead">
          캐릭터 설정 진행 단계 = 하나의 게이지
        </p>
        <p className="signup-step-system__desc">
          로그인 후 캐릭터 설정 화면 상단에 사용하는 단계 게이지입니다. 현재
          단계까지는 color 이미지, 이후 단계는 grey 이미지를 사용합니다.
          모바일은 mo 전용 이미지와 22px 간격, 태블릿·PC는 기본 이미지와 30px
          간격을 적용합니다.
        </p>
      </div>

      <p className="signup-step-system__label">Sign Up Step</p>
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
