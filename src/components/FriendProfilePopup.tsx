import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { Popup } from "@/components/Popup";

export interface FriendProfilePopupProps {
  open: boolean;
  name: string;
  /** 프로필 이미지 — 비우면 placeholder */
  profileImage?: string;
  /** 친구가 보낸 POCK 수 — 임시값 */
  receivedCount?: number;
  /** 내가 보낸 POCK 수 — 임시값 */
  sentCount?: number;
  popupSize?: "mo" | "tb";
  onClose: () => void;
  onDelete: () => void;
}

/**
 * 친구 선택 시 프로필 팝업 + 삭제 확인(Popup)
 */
export function FriendProfilePopup({
  open,
  name,
  profileImage = "",
  receivedCount = 3,
  sentCount = 2,
  popupSize = "mo",
  onClose,
  onDelete,
}: FriendProfilePopupProps) {
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);

  if (!open) return null;

  const handleConfirmDelete = () => {
    setConfirmOpen(false);
    onDelete();
    onClose();
  };

  return (
    <>
      <div
        className="popup-layer"
        role="dialog"
        aria-modal="true"
        aria-label={`${name} 프로필`}
      >
        <DimmedOverlay open onClick={onClose} />
        <article className="friend-profile-popup">
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

          <div className="friend-profile-popup__avatar" aria-hidden="true">
            {profileImage ? (
              <img
                className="friend-profile-popup__avatar-img"
                src={profileImage}
                alt=""
              />
            ) : null}
          </div>

          <p className="friend-profile-popup__name">{name}</p>

          <div className="friend-profile-popup__delete">
            <Button
              type="button"
              variant="popup"
              className="friend-profile-popup__delete-btn"
              onClick={() => setConfirmOpen(true)}
            >
              친구 삭제
            </Button>
          </div>

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
            type="button"
            variant="push-green"
            className="friend-profile-popup__send"
            onClick={() => navigate("/pock-send")}
          >
            편지 보내러 가기
          </Button>
        </article>
      </div>

      <Popup
        open={confirmOpen}
        variant="info"
        size={popupSize}
        message="친구를 정말로 삭제하시겠습니까?"
        cancelLabel="취소"
        confirmLabel="확인"
        onCancel={() => setConfirmOpen(false)}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
