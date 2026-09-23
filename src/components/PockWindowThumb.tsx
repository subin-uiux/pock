import { PixelCharacter } from "@/components/PixelCharacter";
import {
  backgroundGradient,
  getBackgroundById,
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
  const bg = getBackgroundById(background);
  const rootClass = ["pock-window__thumb", className].filter(Boolean).join(" ");

  return (
    <span
      className={rootClass}
      style={{ backgroundImage: backgroundGradient(bg) }}
      aria-hidden="true"
    >
      <span className="pock-window__thumb-figure">
        <PixelCharacter
          character={character}
          outfit={outfit}
          className="pock-window__thumb-canvas"
        />
      </span>
    </span>
  );
}
