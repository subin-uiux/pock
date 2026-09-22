import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { Popup } from "@/components/Popup";
import type { PockUser } from "@/types";
import { useNavigate } from "react-router-dom";

export interface FriendProfilePopupProps {
  open: boolean;
  name: string;
  /** 있으면 보내기 화면 To.에 그대로 전달 */
  friendId?: string;
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
  friendId,
  profileImage = "",
  gender = "female",
  receivedCount = 3,
  sentCount = 2,
  onDelete,
  onSendLetter,
  onClose,
}: FriendProfilePopupProps) {
  const navigate = useNavigate();

  if (!open) return null;

  const handleGoSend = () => {
    const friend: PockUser = {
      id: friendId || `friend-${name}`,
      name,
      profileImage,
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

    <article className="friend-profile-popup">
      {/* 닫기 버튼 */}
      <button
        type="button"
        className="friend-profile-popup__close"
        aria-label="닫기"
        onClick={onClose}
      >
        <img
          src="/assets/images/pixelarticons_close.svg"
          alt=""
          width={16}
          height={16}
        />
      </button>

      {/* 프로필 이미지 */}
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

      {/* 친구 이름 */}
      <p className="friend-profile-popup__name">{name}</p>

      {/* POCK 통계 */}
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

      {/* 편지 보내러 가기 */}
      <button
        type="button"
        className="friend-profile-popup__send"
        onClick={handleGoSend}
      >
        편지 보내러 가기
      </button>
    </article>
  </div>
);
}
