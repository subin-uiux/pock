import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { PockWindowThumb } from "@/components/PockWindowThumb";
import type {
  BackgroundId,
  CharacterId,
  OutfitId,
} from "@/lib/profile-setup";
import type { PockUser } from "@/types";

export interface FriendProfilePopupProps {
  open: boolean;
  name: string;
  /** 있으면 보내기 화면 To.에 그대로 전달 */
  friendId?: string;
  /** 프로필 이미지 — 비우면 placeholder · thumb 없을 때 fallback */
  profileImage?: string;
  /** 캐릭터 배경 — male: 배경선택 파랑 · female: 배경선택 분홍 */
  gender?: "male" | "female";
  /** pock-window__thumb와 동일 — 있으면 우선 */
  character?: CharacterId;
  outfit?: OutfitId;
  background?: BackgroundId;
  /** 친구가 보낸 POCK 수 — 임시값 */
  receivedCount?: number;
  /** 내가 보낸 POCK 수 — 임시값 */
  sentCount?: number;
  /** 친구 삭제 (없으면 버튼 숨김) */
  onDelete?: () => void;
  /** 편지 보내러 가기 (없으면 /pock-send) */
  onSendLetter?: () => void;
  onClose: () => void;
}

/**
 * 친구 프로필·닉네임 선택 시 — POCK 수 팝업
 * Mo 시안을 Tb/Pc에도 동일 적용
 */
export function FriendProfilePopup({
  open,
  name,
  friendId,
  profileImage = "",
  gender = "female",
  character,
  outfit,
  background,
  receivedCount = 3,
  sentCount = 2,
  onDelete,
  onSendLetter,
  onClose,
}: FriendProfilePopupProps) {
  const navigate = useNavigate();

  if (!open) return null;

  const hasThumb =
    Boolean(character) && Boolean(outfit) && Boolean(background);

  const handleSendLetter = () => {
    if (onSendLetter) {
      onSendLetter();
      return;
    }

    const friend: PockUser = {
      id: friendId || `friend-${name}`,
      name,
      profileImage,
      gender,
      character,
      outfit,
      background,
    };

    onClose();
    navigate("/pock-send", {
      state: { friend },
    });
  };

  return (
    <div
      className="popup-layer"
      role="dialog"
      aria-modal="true"
      aria-label={`${name} 프로필`}
    >
      <DimmedOverlay open onClick={onClose} />

      <article className="friend-profile-popup friend-profile-popup--mo">
        <button
          type="button"
          className="friend-profile-popup__close"
          aria-label="닫기"
          onClick={onClose}
        >
          <img
            src="/assets/images/pixelarticons_close.svg"
            alt=""
            width={18}
            height={18}
          />
        </button>

        {hasThumb ? (
          <PockWindowThumb
            character={character!}
            outfit={outfit!}
            background={background!}
            className="friend-profile-popup__avatar"
          />
        ) : (
          <div
            className={
              gender === "male"
                ? "friend-profile-popup__avatar friend-profile-popup__avatar--male"
                : "friend-profile-popup__avatar friend-profile-popup__avatar--female"
            }
            aria-hidden="true"
          >
            {profileImage ? (
              <img
                className="friend-profile-popup__avatar-img"
                src={profileImage}
                alt=""
                width={82}
                height={137}
              />
            ) : null}
          </div>
        )}

        <p className="friend-profile-popup__name">{name}</p>

        {onDelete ? (
          <div className="friend-profile-popup__delete-row">
            <Button
              variant="popup"
              className="friend-profile-popup__delete"
              onClick={onDelete}
            >
              친구 삭제
            </Button>
          </div>
        ) : null}

        <div className="friend-profile-popup__stats">
          <div className="friend-profile-popup__stat">
            <span className="friend-profile-popup__stat-label">
              친구가 보낸 POCK
            </span>
            <span className="friend-profile-popup__stat-value">
              {receivedCount}
            </span>
          </div>
          <div className="friend-profile-popup__stat">
            <span className="friend-profile-popup__stat-label">
              내가 보낸 POCK
            </span>
            <span className="friend-profile-popup__stat-value">
              {sentCount}
            </span>
          </div>
        </div>

        <Button
          variant="push-green"
          className="friend-profile-popup__send"
          onClick={handleSendLetter}
        >
          친구에게 POCK 보내기
        </Button>
      </article>
    </div>
  );
}
