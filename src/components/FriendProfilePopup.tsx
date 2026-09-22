import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export interface FriendProfilePopupProps {
  open: boolean;
  name: string;
  /** 프로필 이미지 — 비우면 placeholder */
  profileImage?: string;
  /** 캐릭터 배경 — male: 배경선택 파랑 · female: 배경선택 분홍 */
  gender?: "male" | "female";
  /** 친구가 보낸 POCK 수 — 임시값 */
  receivedCount?: number;
  /** 내가 보낸 POCK 수 — 임시값 */
  sentCount?: number;
  /** Mo — 친구 삭제 (없으면 버튼 숨김) */
  onDelete?: () => void;
  /** Mo — 편지 보내러 가기 (없으면 /pock-send) */
  onSendLetter?: () => void;
  onClose: () => void;
}

/**
 * 친구 프로필·닉네임 선택 시 — POCK 수 팝업
 * Mo: 새 시안(360~883×807) · Tb/Pc: 기존 레이아웃
 */
export function FriendProfilePopup({
  open,
  name,
  profileImage = "",
  gender = "female",
  receivedCount = 3,
  sentCount = 2,
  onDelete,
  onSendLetter,
  onClose,
}: FriendProfilePopupProps) {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  const isMo = breakpoint === "mo";

  if (!open) return null;

  const handleSendLetter = () => {
    if (onSendLetter) {
      onSendLetter();
      return;
    }
    onClose();
    navigate("/pock-send");
  };

  const rootClass = [
    "friend-profile-popup",
    isMo ? "friend-profile-popup--mo" : "friend-profile-popup--tb",
  ].join(" ");

  return (
    <div
      className="popup-layer"
      role="dialog"
      aria-modal="true"
      aria-label={`${name} 프로필`}
    >
      <DimmedOverlay open onClick={onClose} />
      <article className={rootClass}>
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

        <p className="friend-profile-popup__name">{name}</p>

        {isMo && onDelete ? (
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

        {isMo ? (
          <Button
            variant="push-green"
            className="friend-profile-popup__send"
            onClick={handleSendLetter}
          >
            편지 보내러 가기
          </Button>
        ) : null}
      </article>
    </div>
  );
}
