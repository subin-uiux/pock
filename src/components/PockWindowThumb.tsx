import {
  CHARACTER_BASE,
  backgroundGradient,
  getBackgroundById,
  getOutfitById,
  type BackgroundId,
  type CharacterId,
  type OutfitId,
} from "@/lib/profile-setup";

interface PockWindowThumbProps {
  character: CharacterId;
  outfit: OutfitId;
  background: BackgroundId;
  className?: string;
}

/**
 * 친구목록 카드 썸네일 — 배경 + 캐릭터 + 옷
 */
export function PockWindowThumb({
  character,
  outfit,
  background,
  className = "",
}: PockWindowThumbProps) {
  const wear = getOutfitById(character, outfit);
  const bg = getBackgroundById(background);
  const rootClass = ["pock-window__thumb", className].filter(Boolean).join(" ");

  return (
    <span
      className={rootClass}
      style={{ backgroundImage: backgroundGradient(bg) }}
      aria-hidden="true"
    >
      <span className="pock-window__thumb-figure">
        <img
          className="pock-window__thumb-base"
          src={CHARACTER_BASE.src[character]}
          alt=""
          width={CHARACTER_BASE.width}
          height={CHARACTER_BASE.height}
        />
        {wear ? (
          <img
            className={
              wear.fullFrame
                ? "pock-window__thumb-wear pock-window__thumb-wear--full"
                : "pock-window__thumb-wear"
            }
            src={wear.src}
            alt=""
            width={wear.width}
            height={wear.height}
            style={
              wear.fullFrame
                ? undefined
                : {
                    width: `${(wear.width / CHARACTER_BASE.width) * 100}%`,
                  }
            }
          />
        ) : null}
      </span>
    </span>
  );
}
