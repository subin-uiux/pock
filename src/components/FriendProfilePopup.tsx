import { DimmedOverlay } from "@/components/DimmedOverlay";

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
  onClose: () => void;
}

/**
 * 친구 프로필·닉네임 선택 시 — POCK 수 팝업
 */
export function FriendProfilePopup({
  open,
  name,
  profileImage = "",
  gender = "female",
  receivedCount = 3,
  sentCount = 2,
  onClose,
}: FriendProfilePopupProps) {
  if (!open) return null;

  return (
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
      </article>
    </div>
  );
}
