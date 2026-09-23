import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FriendProfilePopup } from "@/components/FriendProfilePopup";
import { OnboardGuide } from "@/components/OnboardGuide";
import { PockWindowScrollbar } from "@/components/PockWindowScrollbar";
import { PockWindowThumb } from "@/components/PockWindowThumb";
import { homeFriends, type HomeFriend } from "@/data/home-friends";
import {
  markHomeOnboardSeen,
  shouldOpenHomeOnboard,
} from "@/lib/home-onboard";
import {
  CHARACTER_BASE,
  backgroundGradient,
  getBackgroundById,
  getOutfitById,
  getProfileSetup,
} from "@/lib/profile-setup";

const MQ_TB = "(min-width: 1024px)";
const MQ_PC = "(min-width: 1920px)";

type FriendListSize = "mo" | "tb" | "pc";

function getFriendListSize(): FriendListSize {
  if (typeof window === "undefined") return "mo";
  if (window.matchMedia(MQ_PC).matches) return "pc";
  if (window.matchMedia(MQ_TB).matches) return "tb";
  return "mo";
}

/** 새 알림 여부 — 임시값, 알림 API 연동 시 교체 */
const DEMO_HOME_ALERT_UNREAD = true;

/**
 * 홈 메인
 */
export function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const listRef = useRef<HTMLUListElement>(null);

  const saved = getProfileSetup();
  const character = saved.character;
  const nickname = saved.nickname?.trim() || "닉네임";

  const [size, setSize] = useState<FriendListSize>(getFriendListSize);
  const [hasAlert] = useState(DEMO_HOME_ALERT_UNREAD);
  const [selectedFriend, setSelectedFriend] = useState<HomeFriend | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  const [onboardOpen, setOnboardOpen] = useState(() => {
    const fromComplete =
      (location.state as { showOnboard?: boolean } | null)?.showOnboard ===
      true;

    return fromComplete || shouldOpenHomeOnboard();
  });

  const profileBg = useMemo(
    () => getBackgroundById(saved.background),
    [saved.background],
  );
  const outfit = useMemo(
    () => (character ? getOutfitById(character, saved.outfit) : null),
    [character, saved.outfit],
  );

  useEffect(() => {
    document.title = "홈 ㅣ POCK";
  }, []);

  useEffect(() => {
    const state = location.state as { showOnboard?: boolean } | null;

    if (!state?.showOnboard) return;

    setOnboardOpen(true);

    navigate(location.pathname, {
      replace: true,
      state: {},
    });
  }, [location.pathname, location.state, navigate]);

  useEffect(() => {
    const mqTb = window.matchMedia(MQ_TB);
    const mqPc = window.matchMedia(MQ_PC);

    const sync = () => setSize(getFriendListSize());

    sync();

    mqTb.addEventListener("change", sync);
    mqPc.addEventListener("change", sync);

    return () => {
      mqTb.removeEventListener("change", sync);
      mqPc.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 1000);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  const finishOnboard = () => {
    markHomeOnboardSeen();
    setOnboardOpen(false);
  };

  const handleCopyProfileLink = async () => {
    /* 임시값 — 프로필 공유 URL 미확정 */
    const link = `${window.location.origin}/home?u=${encodeURIComponent(nickname)}`;
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      /* ignore */
    }
    setToastOpen(true);
  };

  return (
    <section className="home" aria-label="홈">
      <button
        type="button"
        className={
          hasAlert
            ? "home__alert home__alert--unread"
            : "home__alert"
        }
        aria-label={
          hasAlert ? "알림, 새 알림 있음" : "알림"
        }
        data-onboard="alert"
        onClick={() => navigate("/alerts")}
      >
        <img
          className="home__alert-icon"
          src="/assets/images/main-alert.svg"
          alt=""
          width={20}
          height={20}
        />

        {hasAlert ? (
          <span
            className="home__alert-dot"
            aria-hidden="true"
          />
        ) : null}
      </button>

      <div className="home__stage">
        <aside
          className="home__profile"
          aria-label="내 프로필"
          data-onboard="profile"
        >
          <div
            className="home__profile-figure"
            style={{ backgroundImage: backgroundGradient(profileBg) }}
            aria-hidden="true"
          >
            {character ? (
              <span className="home__profile-figure-inner">
                <img
                  className="home__profile-figure-base"
                  src={CHARACTER_BASE.src[character]}
                  alt=""
                  width={CHARACTER_BASE.width}
                  height={CHARACTER_BASE.height}
                />
                {outfit ? (
                  <img
                    className={
                      outfit.fullFrame
                        ? "home__profile-figure-wear home__profile-figure-wear--full"
                        : "home__profile-figure-wear"
                    }
                    src={outfit.src}
                    alt=""
                    width={outfit.width}
                    height={outfit.height}
                  />
                ) : null}
              </span>
            ) : (
              <img
                className="home__profile-figure-img"
                src="/assets/images/setting/girl.svg"
                alt=""
                width={80}
                height={80}
              />
            )}
          </div>

          <div className="home__profile-side">
            <div className="home__profile-meta">
              <p className="home__profile-name">
                {nickname}
              </p>

              <div className="home__profile-coin">
                <img
                  className="home__profile-coin-icon"
                  src="/assets/images/coin.svg"
                  alt=""
                  width={18}
                  height={18}
                />

                <span className="home__profile-coin-text">
                  10 coin
                </span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--popup home__profile-copy"
              onClick={handleCopyProfileLink}
            >
              초대링크 복사하기
            </button>
          </div>

          <span
            className="home__profile-bubble home__profile-bubble--lg"
            aria-hidden="true"
          />
          <span
            className="home__profile-bubble home__profile-bubble--sm"
            aria-hidden="true"
          />
        </aside>

        <div className="home__friends">
          <article
            className={`pock-window pock-window--friend pock-window--${size}`}
            aria-label="친구목록"
          >
            <header className="pock-window__bar">
              <h4 className="pock-window__title">
                친구목록
              </h4>

              <div className="pock-window__actions">
                <span
                  className="pock-window__control pock-window__control--min"
                  aria-hidden="true"
                />

                <span
                  className="pock-window__control pock-window__control--close"
                  aria-hidden="true"
                >
                  <img
                    className="pock-window__control-icon"
                    src="/assets/images/heart-icon.svg"
                    alt=""
                    width={9}
                    height={7}
                  />
                </span>
              </div>
            </header>

            <div
              className="pock-window__rule"
              aria-hidden="true"
            />

            <div className="pock-window__body">
              <div className="pock-window__pane">
                <PockWindowScrollbar
                  listRef={listRef}
                  syncKey={homeFriends.length}
                />

                <ul
                  className="pock-window__list"
                  ref={listRef}
                >
                  {homeFriends.map((friend, index) => (
                    <li key={friend.name}>
                      <button
                        type="button"
                        className="pock-window__item"
                        data-onboard={
                          index === 0 ? "friend" : undefined
                        }
                        onClick={() =>
                          setSelectedFriend(friend)
                        }
                      >
                        <PockWindowThumb
                          character={friend.character}
                          outfit={friend.outfit}
                          background={friend.background}
                        />

                        <p className="pock-window__name">
                          {friend.name}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <footer className="pock-window__foot">
              <button
                className="pock-window__manage"
                type="button"
                onClick={() =>
                  navigate("/Friend_list")
                }
              >
                <img
                  className="pock-window__manage-icon"
                  src="/assets/images/friends-management-icon.svg"
                  alt=""
                  width={18}
                  height={18}
                />

                <span>친구 관리</span>
              </button>
            </footer>
          </article>
        </div>
      </div>

      <FriendProfilePopup
        open={selectedFriend !== null}
        name={selectedFriend?.name ?? ""}
        friendId={
          selectedFriend
            ? `home-${selectedFriend.name}`
            : undefined
        }
        character={selectedFriend?.character}
        outfit={selectedFriend?.outfit}
        background={selectedFriend?.background}
        gender={
          selectedFriend?.character === "boy" ? "male" : "female"
        }
        onClose={() => setSelectedFriend(null)}
      />

      <OnboardGuide
        open={onboardOpen}
        onSkip={finishOnboard}
        onComplete={finishOnboard}
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