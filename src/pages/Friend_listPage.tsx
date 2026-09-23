import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { FriendProfilePopup } from "@/components/FriendProfilePopup";
import { Popup } from "@/components/Popup";
import { SearchInput } from "@/components/SearchInput";
import { friendItems } from "@/data/friend-data";
import {
  CHARACTER_BASE,
  getOutfitById,
} from "@/lib/profile-setup";
import type { PockUser } from "@/types";

/** 임시값 — 초대 링크 */
const INVITE_LINK = "https://pock.app/invite";

/**
 * 친구 목록 관리 `/Friend_list`
 * 설정 → 친구 목록 관리하기 · 홈 친구목록 → 친구 관리
 */
export function Friend_listPage() {
  const navigate = useNavigate();

  const [friends, setFriends] = useState<PockUser[]>(() => [...friendItems]);
  const [query, setQuery] = useState("");
  const [profileFriend, setProfileFriend] = useState<PockUser | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<PockUser | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    document.title = "친구 목록 관리 ㅣ POCK";
  }, []);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 1000);
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

  const closeDeletePopup = () => setDeleteTarget(null);

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setFriends((prev) => prev.filter((f) => f.id !== deleteTarget.id));
    setDeleteTarget(null);
    setProfileFriend((prev) =>
      prev?.id === deleteTarget.id ? null : prev
    );
  };

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(INVITE_LINK);
    } catch {
      /* 클립보드 실패 — 미확정 */
    }
    setToastOpen(true);
  };

  return (
    <section className="friend-list-page" aria-label="친구 목록 관리">
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
          onClick={copyInviteLink}
        >
          <img
            className="friend-list-page__invite-icon"
            src="/assets/images/Friend_list-icon.svg"
            alt=""
            width={20}
            height={20}
          />
          <span className="friend-list-page__invite-label">초대링크 복사하기</span>
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
              id="friend-list-page-search"
              label="친구 검색"
              placeholder="친구 검색"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <ul className="friend-list-page__list">
            {filtered.map((friend) => {
              const gender = friend.gender ?? "female";
              const avatarClass =
                gender === "male"
                  ? "friend-list-page__avatar friend-list-page__avatar--male"
                  : "friend-list-page__avatar friend-list-page__avatar--female";
              const wear =
                friend.character && friend.outfit
                  ? getOutfitById(friend.character, friend.outfit)
                  : null;

              return (
                <li key={friend.id} className="friend-list-page__item">
                  <button
                    type="button"
                    className="friend-list-page__profile"
                    onClick={() => setProfileFriend(friend)}
                  >
                    <span className={avatarClass} aria-hidden="true">
                      {friend.character ? (
                        <span className="friend-list-page__avatar-figure">
                          <img
                            className="friend-list-page__avatar-base"
                            src={CHARACTER_BASE.src[friend.character]}
                            alt=""
                            width={CHARACTER_BASE.width}
                            height={CHARACTER_BASE.height}
                          />
                          {wear ? (
                            <img
                              className={
                                wear.fullFrame
                                  ? "friend-list-page__avatar-wear friend-list-page__avatar-wear--full"
                                  : "friend-list-page__avatar-wear"
                              }
                              src={wear.src}
                              alt=""
                              width={wear.width}
                              height={wear.height}
                            />
                          ) : null}
                        </span>
                      ) : friend.profileImage ? (
                        <img
                          className="friend-list-page__avatar-img"
                          src={friend.profileImage}
                          alt=""
                          width={50}
                          height={50}
                        />
                      ) : null}
                    </span>
                    <span className="friend-list-page__name">{friend.name}</span>
                  </button>

                  <Button
                    type="button"
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

      <FriendProfilePopup
        open={profileFriend !== null}
        name={profileFriend?.name ?? ""}
        friendId={profileFriend?.id}
        profileImage={profileFriend?.profileImage}
        gender={profileFriend?.gender}
        character={profileFriend?.character}
        outfit={profileFriend?.outfit}
        background={profileFriend?.background}
        onClose={() => setProfileFriend(null)}
        onDelete={() => {
          if (!profileFriend) return;
          setDeleteTarget(profileFriend);
          setProfileFriend(null);
        }}
      />

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

      {toastOpen ? (
        <div className="friend-list-toast" role="status" aria-live="polite">
          <span className="friend-list-toast__icon" aria-hidden="true" />
          <p className="friend-list-toast__text">링크 복사가 완료되었습니다.</p>
        </div>
      ) : null}
    </section>
  );
}
