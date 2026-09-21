import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { SignUpStepGauge } from "@/components/SignUpStepGauge";
import { setProfileNickname, getProfileSetup } from "@/lib/profile-setup";

const NICKNAME_MAX = 10;

const RECOMMENDED_NICKNAMES = [
  "지존킹왕짱",
  "간지폭발",
  "얼짱지존",
  "무적주먹",
  "최강요미",
  "별빛천사",
  "고독한미소",
  "사랑폭격",
] as const;

/**
 * 프로필 설정 1단계 — 닉네임 입력
 */
export function NicknameSetupPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(
    () => getProfileSetup().nickname ?? "",
  );
  const canNext = nickname.trim().length > 0;

  const handleChange = (value: string) => {
    setNickname(value.slice(0, NICKNAME_MAX));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canNext) return;
    setProfileNickname(nickname.trim());
    navigate("/profile/character");
  };

  return (
    <section className="nickname-setup" aria-label="닉네임 설정">
      <form className="nickname-setup__form" onSubmit={handleSubmit}>
        <div className="nickname-setup__body">
          <div className="nickname-setup__steps">
            <SignUpStepGauge
              className="nickname-setup__gauge nickname-setup__gauge--mo"
              size="mo"
              step={1}
            />
            <SignUpStepGauge
              className="nickname-setup__gauge nickname-setup__gauge--pad"
              size="tb"
              step={1}
            />
          </div>

          <h1 className="nickname-setup__title">
            어떤 이름으로
            <br />
            시작할까요?
          </h1>
          <p className="nickname-setup__desc">
            POCK에서 사용할 닉네임을 입력해 주세요.
          </p>

          <div className="nickname-setup__field">
            <label className="visually-hidden" htmlFor="nickname-input">
              닉네임
            </label>
            <div className="nickname-setup__input-shell">
              <input
                id="nickname-input"
                className="nickname-setup__input"
                type="text"
                name="nickname"
                maxLength={NICKNAME_MAX}
                autoComplete="nickname"
                placeholder="닉네임을 입력하세요."
                value={nickname}
                onChange={(event) => handleChange(event.target.value)}
              />
            </div>
            <p className="nickname-setup__hint" aria-live="polite">
              최대 {NICKNAME_MAX}글자
            </p>
          </div>

          <div className="nickname-setup__recommend">
            <h2 className="nickname-setup__recommend-title">추천 닉네임</h2>
            <ul className="nickname-setup__recommend-list">
              {RECOMMENDED_NICKNAMES.map((name) => (
                <li className="nickname-setup__recommend-item" key={name}>
                  <button
                    type="button"
                    className="nickname-setup__chip"
                    onClick={() => handleChange(name)}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nickname-setup__footer">
          <Button
            type="submit"
            variant={canNext ? "push" : "push-muted"}
            block
            disabled={!canNext}
          >
            다음
          </Button>
        </div>
      </form>
    </section>
  );
}
