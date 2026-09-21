import { useMemo, type CSSProperties } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import {
  CHARACTER_BASE,
  getOutfitById,
  getProfileSetup,
} from "@/lib/profile-setup";

/**
 * 프로필 설정 완료 — 시작하기
 */
export function ProfileCompletePage() {
  const navigate = useNavigate();
  const saved = getProfileSetup();
  const character = saved.character;

  const outfit = useMemo(
    () => (character ? getOutfitById(character, saved.outfit) : null),
    [character, saved.outfit],
  );

  if (!character) {
    return <Navigate to="/profile/character" replace />;
  }

  const wearStyle: CSSProperties | undefined = outfit
    ? { width: `${(outfit.width / CHARACTER_BASE.width) * 100}%` }
    : undefined;

  return (
    <section className="profile-complete" aria-label="설정 완료">
      <div className="profile-complete__body">
        <div className="profile-complete__hero">
          <div className="profile-complete__bubble" aria-hidden="true">
            <img
              className="profile-complete__bubble-img"
              src="/assets/images/hello-bubble.svg"
              alt=""
              width={105}
              height={48}
            />
            <span className="profile-complete__bubble-text">반가워요</span>
          </div>

          <div className="profile-complete__figure" aria-hidden="true">
            <img
              className="profile-complete__base"
              src={CHARACTER_BASE.src[character]}
              alt=""
              width={CHARACTER_BASE.width}
              height={CHARACTER_BASE.height}
            />
            {outfit ? (
              <img
                className="profile-complete__wear"
                src={outfit.src}
                alt=""
                width={outfit.width}
                height={outfit.height}
                style={wearStyle}
              />
            ) : null}
          </div>
        </div>

        <div className="profile-complete__copy">
          <h1 className="profile-complete__title">설정이 완료되었어요!</h1>
          <p className="profile-complete__desc">
            이제 POCK에서 특별한
            <br />
            메시지를 주고받을 수 있어요.
          </p>
        </div>

        <div className="profile-complete__footer">
          <Button
            type="button"
            variant="push-green"
            block
            onClick={() => navigate("/home")}
          >
            시작하기
          </Button>
        </div>
      </div>
    </section>
  );
}
