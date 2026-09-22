import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Popup } from "@/components/Popup";
import { useAuth } from "@/hooks/useAuth";
import { hasUnreadNotice } from "@/lib/notice";
import { getProfileSetup } from "@/lib/profile-setup";

/** 임시값 — 프로필 닉네임 시안 샘플 */
const DEFAULT_NICKNAME = "zl존 킹왕짱";
/** 데모 보유 코인 */
const DEMO_COIN = 1000;
/** 데모 출석 완료 일수 — 시안: 1일차 완료 */
const DEMO_ATTENDANCE_DONE = 1;
/** 임시값 — 초대 링크 */
const INVITE_LINK = "https://pock.app/invite";

/** 출석 스탬프 시안 표기 (보상 문구는 시안 그대로) */
const ATTENDANCE_DAYS: {
  day: number;
  reward?: string;
  wide?: boolean;
}[] = [
  { day: 1 },
  { day: 2 },
  { day: 3, reward: "1coin" },
  { day: 4 },
  { day: 5, reward: "2coin" },
  { day: 6 },
  { day: 7, reward: "+5 COIN", wide: true },
];

/**
 * 설정 `/settings`
 * 반응형: Mo 360~768 (1열) · Tb/Pc min-width 769px
 */
export function SettingsPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const savedNickname = getProfileSetup().nickname?.trim();
  const nickname =
    savedNickname && savedNickname.length > 0
      ? savedNickname
      : DEFAULT_NICKNAME;
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [noticeUnread, setNoticeUnread] = useState(hasUnreadNotice);

  useEffect(() => {
    document.title = "설정 ㅣ POCK";
    setNoticeUnread(hasUnreadNotice());
  }, []);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 1000);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  const confirmInviteCopy = async () => {
    try {
      await navigator.clipboard.writeText(INVITE_LINK);
    } catch {
      /* 클립보드 실패 — 미확정 */
    }
    setToastOpen(true);
  };

  const handleLogoutConfirm = () => {
    setLogoutOpen(false);
    logout();
    navigate("/login", { replace: true });
  };

  const handleWithdrawConfirm = () => {
    setWithdrawOpen(false);
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <section className="settings" aria-label="설정">
      <div className="settings__coin-row">
        <Button
          variant="action-icon"
          className="settings__coin-btn"
          aria-label={`보유 코인 ${DEMO_COIN}`}
          onClick={() => navigate("/coin")}
        >
          <img
            className="settings__coin-icon"
            src="/assets/images/coin-store/1coin.svg"
            alt=""
            width={18}
            height={18}
          />
          <span className="settings__coin-value">{DEMO_COIN}</span>
        </Button>
        <button
          type="button"
          className="settings__coin-plus"
          aria-label="코인 충전"
          onClick={() => navigate("/coin")}
        >
          <img
            className="settings__coin-plus-icon"
            src="/assets/images/setting/plus-box.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>

      <article className="settings-profile" aria-label="프로필">
        <header className="pock-window__bar">
          <h1 className="pock-window__title">프로필</h1>
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

        <div className="settings-profile__body">
          <div className="settings-profile__avatar">
            <img
              className="settings-profile__avatar-img"
              src="/assets/images/setting/girl.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>
          <div className="settings-profile__meta">
            <p className="settings-profile__name">{nickname}</p>
            <Button
              variant="popup"
              className="settings-profile__edit"
              onClick={() => navigate("/mypage")}
            >
              프로필 수정
            </Button>
          </div>
        </div>
      </article>

      <div className="settings__panels">
        <article className="settings-attendance" aria-label="출석 현황">
          <header className="settings-attendance__bar">
            <div className="settings-attendance__bar-inset">
              <h2 className="settings-attendance__title">출석 현황</h2>
            </div>
          </header>
          <div className="settings-attendance__body">
            <ul className="settings-attendance__grid">
              {ATTENDANCE_DAYS.map((item) => {
                const done = item.day <= DEMO_ATTENDANCE_DONE;
                const className = [
                  "settings-attendance__stamp",
                  item.wide ? "settings-attendance__stamp--wide" : "",
                  done ? "settings-attendance__stamp--done" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <li key={item.day} className={className}>
                    <span className="settings-attendance__stamp-day">
                      {item.day}일차
                    </span>
                    {item.reward ? (
                      <span className="settings-attendance__stamp-reward">
                        {item.reward}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </article>

        <div className="settings__menus">
          <article className="settings-menu" aria-label="친구">
            <header className="settings-menu__head">
              <img
                className="settings-menu__icon settings-menu__icon--friends"
                src="/assets/images/setting/Friends-icon.svg"
                alt=""
                width={38}
                height={23}
              />
              <h2 className="settings-menu__title">친구</h2>
            </header>
            <ul className="settings-menu__list">
              <li className="settings-menu__item">
                <button
                  type="button"
                  className="settings-menu__btn"
                  onClick={() => setInviteOpen(true)}
                >
                  <span className="settings-menu__label">친구 초대하기</span>
                  <img
                    className="settings-menu__chevron"
                    src="/assets/icons/left-arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </button>
              </li>
              <li className="settings-menu__item">
                <button
                  type="button"
                  className="settings-menu__btn"
                  onClick={() => navigate("/Friend_list")}
                >
                  <span className="settings-menu__label">
                    친구 목록 관리하기
                  </span>
                  <img
                    className="settings-menu__chevron"
                    src="/assets/icons/left-arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </article>

          <article className="settings-menu settings-menu--service" aria-label="서비스">
            <header className="settings-menu__head">
              <img
                className="settings-menu__icon settings-menu__icon--service"
                src="/assets/images/setting/Service-icon.svg"
                alt=""
                width={24}
                height={18}
              />
              <h2 className="settings-menu__title">서비스</h2>
            </header>
            <ul className="settings-menu__list">
              <li className="settings-menu__item">
                <button
                  type="button"
                  className="settings-menu__btn"
                  onClick={() => navigate("/notice")}
                >
                  <span className="settings-menu__label">
                    공지사항
                    {noticeUnread ? (
                      <span
                        className="settings-menu__dot"
                        aria-label="새 공지"
                      />
                    ) : null}
                  </span>
                  <img
                    className="settings-menu__chevron"
                    src="/assets/icons/left-arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </button>
              </li>
              <li className="settings-menu__item">
                <button
                  type="button"
                  className="settings-menu__btn"
                  onClick={() => navigate("/terms")}
                >
                  <span className="settings-menu__label">약관 및 정책</span>
                  <img
                    className="settings-menu__chevron"
                    src="/assets/icons/left-arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </button>
              </li>
              <li className="settings-menu__item">
                <button
                  type="button"
                  className="settings-menu__btn"
                  onClick={() => navigate("/inquiry")}
                >
                  <span className="settings-menu__label">문의하기</span>
                  <img
                    className="settings-menu__chevron"
                    src="/assets/icons/left-arrow.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div className="settings__foot">
        <button
          type="button"
          className="settings__foot-btn settings__foot-btn--logout"
          onClick={() => setLogoutOpen(true)}
        >
          로그아웃
        </button>
        <button
          type="button"
          className="settings__foot-btn settings__foot-btn--withdraw"
          onClick={() => setWithdrawOpen(true)}
        >
          탈퇴하기
        </button>
      </div>

      <Popup
        open={logoutOpen}
        variant="warning"
        message="로그아웃 하시겠습니까?"
        confirmLabel="확인"
        cancelLabel="취소"
        onConfirm={handleLogoutConfirm}
        onCancel={() => setLogoutOpen(false)}
        onClose={() => setLogoutOpen(false)}
      />

      <Popup
        open={withdrawOpen}
        variant="warning"
        message={
          <>
            <span className="pock-popup__heading">POCK을 정말 떠나시겠어요?</span>
            <br />
            탈퇴하면 지금까지의 편지와 기록이 모두 삭제되며 다시 복구할 수
            없습니다.
          </>
        }
        confirmLabel="탈퇴하기"
        cancelLabel="취소"
        onConfirm={handleWithdrawConfirm}
        onCancel={() => setWithdrawOpen(false)}
        onClose={() => setWithdrawOpen(false)}
      />

      {/* 친구 초대 — Share 팝업 · 카피 임시값 */}
      <Popup
        open={inviteOpen}
        variant="share"
        iconSrc="/assets/images/Friend_list-icon.svg"
        iconSize={40}
        message="내 POCK에 놀러와!" /* 임시값 — 시안 카피 미확정 */
        cancelLabel="링크 복사"
        confirmLabel="닫기"
        onCancel={confirmInviteCopy}
        onClose={() => setInviteOpen(false)}
        onConfirm={() => setInviteOpen(false)}
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
