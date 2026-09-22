import { useMemo, useState, type CSSProperties, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { SelectionBox } from "@/components/SelectionBox";
import { SignUpStepGauge } from "@/components/SignUpStepGauge";
import {
  CHARACTER_BASE,
  getOutfitsForCharacter,
  getProfileSetup,
  setProfileOutfit,
  type OutfitId,
  type OutfitOption,
} from "@/lib/profile-setup";

/**
 * 프로필 설정 3단계 — 옷 선택
 */
export function OutfitSetupPage() {
  const navigate = useNavigate();
  const saved = getProfileSetup();
  const character = saved.character;

  const outfits = useMemo(
    () => (character ? getOutfitsForCharacter(character) : []),
    [character],
  );

  const [outfitId, setOutfitId] = useState<OutfitId | null>(
    () => saved.outfit ?? outfits[0]?.id ?? null,
  );

  if (!character) {
    return <Navigate to="/profile/character" replace />;
  }

  const selected =
    outfits.find((item) => item.id === outfitId) ?? outfits[0] ?? null;

  const handleSelect = (option: OutfitOption) => {
    setOutfitId(option.id);
    setProfileOutfit(option.id);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected) return;
    setProfileOutfit(selected.id);
    navigate("/profile/background");
  };

  const wearStyle: CSSProperties | undefined =
    selected && !selected.fullFrame
      ? {
          width: `${(selected.width / CHARACTER_BASE.width) * 100}%`,
        }
      : undefined;

  return (
    <section className="outfit-setup" aria-label="옷 선택">
      <form className="outfit-setup__form" onSubmit={handleSubmit}>
        <div className="outfit-setup__body">
          <div className="outfit-setup__steps">
            <SignUpStepGauge
              className="outfit-setup__gauge outfit-setup__gauge--mo"
              size="mo"
              step={3}
            />
            <SignUpStepGauge
              className="outfit-setup__gauge outfit-setup__gauge--pad"
              size="tb"
              step={3}
            />
          </div>

          <h1 className="outfit-setup__title">옷을 골라볼까요?</h1>

          <div className="outfit-setup__preview" aria-hidden="true">
            <img
              className="outfit-setup__base"
              src={CHARACTER_BASE.src[character]}
              alt=""
              width={CHARACTER_BASE.width}
              height={CHARACTER_BASE.height}
            />
            {selected ? (
              <img
                className={
                  selected.fullFrame
                    ? "outfit-setup__wear outfit-setup__wear--full"
                    : "outfit-setup__wear"
                }
                src={selected.src}
                alt=""
                width={selected.width}
                height={selected.height}
                style={wearStyle}
              />
            ) : null}
          </div>

          <div
            className="outfit-setup__choices"
            role="group"
            aria-label="옷 선택"
          >
            {outfits.map((item) => (
              <SelectionBox
                key={item.id}
                className="outfit-setup__choice"
                selected={selected?.id === item.id}
                aria-label={item.label}
                onClick={() => handleSelect(item)}
              >
                <img
                  className="outfit-setup__thumb"
                  src={item.thumbSrc ?? item.src}
                  alt=""
                  width={item.thumbWidth ?? item.width}
                  height={item.thumbHeight ?? item.height}
                />
              </SelectionBox>
            ))}
          </div>
        </div>

        <div className="outfit-setup__footer">
          <Button type="submit" variant="push" block disabled={!selected}>
            다음
          </Button>
        </div>
      </form>
    </section>
  );
}
