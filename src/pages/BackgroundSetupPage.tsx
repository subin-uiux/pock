import { useMemo, useState, type CSSProperties, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { SelectionBox } from "@/components/SelectionBox";
import { SignUpStepGauge } from "@/components/SignUpStepGauge";
import {
  BACKGROUND_OPTIONS,
  backgroundGradient,
  CHARACTER_BASE,
  getBackgroundById,
  getOutfitById,
  getProfileSetup,
  setProfileBackground,
  type BackgroundId,
  type BackgroundOption,
} from "@/lib/profile-setup";

/**
 * 프로필 설정 4단계 — 배경 선택
 */
export function BackgroundSetupPage() {
  const navigate = useNavigate();
  const saved = getProfileSetup();
  const character = saved.character;

  const [backgroundId, setBackgroundId] = useState<BackgroundId>(
    () => saved.background ?? BACKGROUND_OPTIONS[0].id,
  );

  const selected = useMemo(
    () => getBackgroundById(backgroundId),
    [backgroundId],
  );

  const outfit = useMemo(
    () => (character ? getOutfitById(character, saved.outfit) : null),
    [character, saved.outfit],
  );

  if (!character) {
    return <Navigate to="/profile/character" replace />;
  }

  const handleSelect = (option: BackgroundOption) => {
    setBackgroundId(option.id);
    setProfileBackground(option.id);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProfileBackground(selected.id);
    navigate("/profile/complete");
  };

  const previewStyle: CSSProperties = {
    backgroundImage: backgroundGradient(selected),
  };

  const wearStyle: CSSProperties | undefined =
    outfit && !outfit.fullFrame
      ? { width: `${(outfit.width / CHARACTER_BASE.width) * 100}%` }
      : undefined;

  return (
    <section className="background-setup" aria-label="배경 선택">
      <form className="background-setup__form" onSubmit={handleSubmit}>
        <div className="background-setup__body">
          <div className="background-setup__steps">
            <SignUpStepGauge
              className="background-setup__gauge background-setup__gauge--mo"
              size="mo"
              step={4}
            />
            <SignUpStepGauge
              className="background-setup__gauge background-setup__gauge--pad"
              size="tb"
              step={4}
            />
          </div>

          <h1 className="background-setup__title">배경을 골라볼까요?</h1>

          <div
            className="background-setup__preview"
            style={previewStyle}
            aria-hidden="true"
          >
            <div className="background-setup__figure">
              <img
                className="background-setup__base"
                src={CHARACTER_BASE.src[character]}
                alt=""
                width={CHARACTER_BASE.width}
                height={CHARACTER_BASE.height}
              />
              {outfit ? (
                <img
                  className={
                    outfit.fullFrame
                      ? "background-setup__wear background-setup__wear--full"
                      : "background-setup__wear"
                  }
                  src={outfit.src}
                  alt=""
                  width={outfit.width}
                  height={outfit.height}
                  style={wearStyle}
                />
              ) : null}
            </div>
          </div>

          <div
            className="background-setup__choices"
            role="group"
            aria-label="배경 색상 선택"
          >
            {BACKGROUND_OPTIONS.map((item) => (
              <SelectionBox
                key={item.id}
                className="background-setup__swatch"
                selected={selected.id === item.id}
                aria-label={item.label}
                onClick={() => handleSelect(item)}
                style={
                  {
                    "--background-swatch": backgroundGradient(item),
                  } as CSSProperties
                }
              >
                <span className="background-setup__swatch-fill" />
              </SelectionBox>
            ))}
          </div>
        </div>

        <div className="background-setup__footer">
          <Button type="submit" variant="push" block>
            다음
          </Button>
        </div>
      </form>
    </section>
  );
}
