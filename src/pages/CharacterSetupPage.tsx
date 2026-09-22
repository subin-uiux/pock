import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { SelectionBox } from "@/components/SelectionBox";
import { SignUpStepGauge } from "@/components/SignUpStepGauge";
import {
  setProfileCharacter,
  type CharacterId,
} from "@/lib/profile-setup";

const CHARACTERS: {
  id: CharacterId;
  label: string;
  src: string;
}[] = [
  {
    id: "boy",
    label: "남자 캐릭터",
    src: "/assets/images/character/boy-default.svg",
  },
  {
    id: "girl",
    label: "여자 캐릭터",
    src: "/assets/images/character/girl-default.svg",
  },
];

/**
 * 프로필 설정 2단계 — 캐릭터 선택
 */
export function CharacterSetupPage() {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<CharacterId>("boy");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!character) return;
    setProfileCharacter(character);
    navigate("/profile/outfit");
  };

  return (
    <section className="character-setup" aria-label="캐릭터 선택">
      <form className="character-setup__form" onSubmit={handleSubmit}>
        <div className="character-setup__body">
          <div className="character-setup__steps">
            <SignUpStepGauge
              className="character-setup__gauge character-setup__gauge--mo"
              size="mo"
              step={2}
            />
            <SignUpStepGauge
              className="character-setup__gauge character-setup__gauge--pad"
              size="tb"
              step={2}
            />
          </div>

          <h1 className="character-setup__title">
            어떤 모습으로
            <br />
            출발할까요?
          </h1>
          <p className="character-setup__desc">
            나의 캐릭터를 선택해주세요.
          </p>

          <div
            className="character-setup__choices"
            role="group"
            aria-label="캐릭터 선택"
          >
            {CHARACTERS.map((item) => (
              <SelectionBox
                key={item.id}
                className="character-setup__choice"
                selected={character === item.id}
                aria-label={item.label}
                onClick={() => setCharacter(item.id)}
              >
                <img
                  className="character-setup__avatar"
                  src={item.src}
                  alt=""
                  width={106}
                  height={180}
                />
              </SelectionBox>
            ))}
          </div>
        </div>

        <div className="character-setup__footer">
          <Button type="submit" variant="push" block>
            다음
          </Button>
        </div>
      </form>
    </section>
  );
}
