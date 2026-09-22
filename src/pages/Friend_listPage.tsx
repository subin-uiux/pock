import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { FriendProfilePopup } from "@/components/FriendProfilePopup";
import { Popup } from "@/components/Popup";
import { SearchInput } from "@/components/SearchInput";
import { friendItems } from "@/data/friend-data";
import type { PockUser } from "@/types";

/** 임시값 — 초대 링크 */
const INVITE_LINK = "https://pock.app/invite";

/**
 * 친구목록 `/Friend_list`
 * 설정 → 친구 목록 관리
 * 반응형: Mo 좌우 20·540 · Tb/Pc 670
 */
export function Friend_listPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [friends, setFriends] = useState<PockUser[]>(friendItems);
  const [deleteTarget, setDeleteTarget] = useState<PockUser | null>(null);
  const [profileFriend, setProfileFriend] = useState<PockUser | null>(null);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    document.title = "친구 목록 ㅣ POCK";
  }, []);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 800);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return friends;
    return friends.filter((f) => f.name.toLowerCase().includes(q));
  }, [friends, query]);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/settings", { replace: true });
  };

  const closeDeletePopup = () => {
    setDeleteTarget(null);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setFriends((prev) => prev.filter((f) => f.id !== deleteTarget.id));
    if (profileFriend?.id === deleteTarget.id) {
      setProfileFriend(null);
    }
    setDeleteTarget(null);
  };

  const closeInvitePopup = () => {
    setInviteOpen(false);
  };

  const confirmInviteCopy = async () => {
    try {
      await navigator.clipboard.writeText(INVITE_LINK);
    } catch {
      /* 클립보드 실패 — 미확정 */
    }
    setToastOpen(true);
  };

  return (
    <section className="friend-list-page" aria-label="친구 목록">
      <header className="friend-list-page__header">
        <button
          type="button"
          className="friend-list-page__back"
          aria-label="뒤로가기"
          onClick={goBack}
        >
          <img
            className="friend-list-page__back-icon"
            src="/assets/icons/left-arrow.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
        <h1 className="friend-list-page__title">친구 목록</h1>
      </header>

      <div className="friend-list-page__invite-row">
        <button
          type="button"
          className="friend-list-page__invite"
          onClick={() => setInviteOpen(true)}
        >
          <img
            className="friend-list-page__invite-icon"
            src="/assets/images/Friend_list-icon.svg"
            alt=""
            width={20}
            height={20}
          />
          <span className="friend-list-page__invite-label">
            초대링크 복사하기
          </span>
        </button>
      </div>

      <article className="friend-list-page__window" aria-label="친구 목록">
        <header className="pock-window__bar">
          <h2 className="pock-window__title">친구 목록</h2>
          <div className="pock-window__actions">
            <span
              className="pock-window__control pock-window__control--min"
              aria-hidden="true"
            />
            <button
              type="button"
              className="pock-window__control pock-window__control--close"
              aria-label="닫기"
              onClick={goBack}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              <img
                className="pock-window__control-icon"
                src="/assets/images/heart-icon.svg"
                alt=""
                width={9}
                height={7}
              />
            </button>
          </div>
        </header>

        <div className="friend-list-page__body">
          <div className="friend-list-page__search">
            <SearchInput
              id="friend-list-search"
              label="친구 검색"
              placeholder="친구 검색"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <ul className="friend-list-page__list">
            {filtered.map((friend) => {
              const gender = friend.gender ?? "female";
              return (
                <li className="friend-list-page__item" key={friend.id}>
                  <button
                    type="button"
                    className="friend-list-page__profile"
                    onClick={() => setProfileFriend(friend)}
                  >
                    <div
                      className={
                        gender === "male"
                          ? "friend-list-page__avatar friend-list-page__avatar--male"
                          : "friend-list-page__avatar friend-list-page__avatar--female"
                      }
                      aria-hidden="true"
                    >
                      <img
                        className="friend-list-page__avatar-img"
                        src={friend.profileImage}
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <span className="friend-list-page__name">{friend.name}</span>
                  </button>
                  <Button
                    variant="popup"
                    className="friend-list-page__delete"
                    onClick={() => setDeleteTarget(friend)}
                  >
                    삭제하기
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </article>

      {/* 삭제하기 — Warning Popup */}
      <Popup
        open={deleteTarget !== null}
        variant="warning"
        message={
          <>
            <span className="friend-list-page__delete-lead">
              정말 친구 삭제
              <br />
              하시겠습니까?
            </span>
            <span className="friend-list-page__delete-note">
              상대가 초대 링크로 들어오면
              <br />
              다시 친구가 될 수 있어요
            </span>
          </>
        }
        cancelLabel="취소"
        confirmLabel="확인"
        onCancel={closeDeletePopup}
        onClose={closeDeletePopup}
        onConfirm={confirmDelete}
      />

      {/* 초대링크 — Share 팝업 · 카피 임시값 */}
      <Popup
        open={inviteOpen}
        variant="share"
        iconSrc="/assets/images/Friend_list-icon.svg"
        iconSize={40}
        message="내 POCK에 놀러와!" /* 임시값 — 시안 카피 미확정 */
        cancelLabel="링크 복사"
        confirmLabel="닫기"
        onCancel={confirmInviteCopy}
        onClose={closeInvitePopup}
        onConfirm={closeInvitePopup}
      />

      {/* 프로필·닉네임 — Mo 새 시안 · Tb/Pc 기존 */}
      <FriendProfilePopup
        open={profileFriend !== null}
        name={profileFriend?.name ?? ""}
        profileImage={profileFriend?.profileImage}
        gender={profileFriend?.gender}
        onClose={() => setProfileFriend(null)}
        onDelete={() => {
          if (!profileFriend) return;
          setDeleteTarget(profileFriend);
          setProfileFriend(null);
        }}
        onSendLetter={() => {
          setProfileFriend(null);
          navigate("/pock-send");
        }}
      />

      {toastOpen ? (
        <div className="friend-list-toast" role="status" aria-live="polite">
          <span className="friend-list-toast__icon" aria-hidden="true" />
          <p className="friend-list-toast__text">링크 복사가 완료되었습니다.</p>
        </div>
      ) : null}
    </section>
  );
}
