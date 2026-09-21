import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const NAV_ITEMS = [
  {
    to: "/home",
    label: "홈",
    icon: "/assets/icons/navigation/home.svg",
  },
  {
    to: "/pock-received",
    label: "보관함",
    icon: "/assets/icons/navigation/Storage%20Box.svg",
  },
  {
    to: "/pock-send",
    label: "보내기",
    icon: "/assets/icons/navigation/sand.svg",
  },
  {
    to: "/pock-sent",
    label: "전송함",
    icon: "/assets/icons/navigation/Sent.svg",
  },
  {
    to: "/settings",
    label: "설정",
    icon: "/assets/icons/navigation/setting.svg",
  },
] as const;

type NavTo = (typeof NAV_ITEMS)[number]["to"];

/** 설정 하위 경로 — 코인샵·마이페이지도 설정 활성 */
const SETTINGS_ACTIVE_PATHS = [
  "/settings",
  "/coin",
  "/mypage",
  "/Friend_list",
  "/notice",
  "/terms",
  "/privacy",
] as const;

function isSettingsActivePath(pathname: string) {
  return SETTINGS_ACTIVE_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

interface NavigationProps {
  /** 가이드 미리보기용 — fixed 해제 */
  preview?: boolean;
  /** 미리보기에서 강제 디바이스 (없으면 breakpoint) */
  forceDevice?: "mo" | "pad";
}

export function Navigation({ preview = false, forceDevice }: NavigationProps) {
  const size = useBreakpoint();
  const location = useLocation();
  const isMo =
    forceDevice === "mo" || (forceDevice !== "pad" && size === "mo");
  const deviceClass = isMo ? "navigation--mo" : "navigation--pad";
  const rootClass = [
    "navigation",
    preview ? "navigation--preview" : "navigation--fixed",
    deviceClass,
  ].join(" ");

  const [previewActive, setPreviewActive] = useState<NavTo>("/home");

  return (
    <nav className={rootClass} aria-label="주요 메뉴">
      <div className="navigation__shell">
        <ul className="navigation__list">
          {NAV_ITEMS.map((item) => (
            <li className="navigation__item" key={item.to}>
              {preview ? (
                <button
                  type="button"
                  className={
                    previewActive === item.to
                      ? "navigation__link navigation__link--active"
                      : "navigation__link"
                  }
                  aria-current={previewActive === item.to ? "page" : undefined}
                  onClick={() => setPreviewActive(item.to)}
                >
                  <img
                    className="navigation__icon"
                    src={item.icon}
                    alt=""
                    width={56}
                    height={56}
                  />
                  <span className="navigation__label">{item.label}</span>
                </button>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) => {
                    const active =
                      isActive ||
                      (item.to === "/settings" &&
                        isSettingsActivePath(location.pathname));
                    return active
                      ? "navigation__link navigation__link--active"
                      : "navigation__link";
                  }}
                  end={item.to === "/home"}
                >
                  {({ isActive }) => {
                    const active =
                      isActive ||
                      (item.to === "/settings" &&
                        isSettingsActivePath(location.pathname));
                    return (
                      <>
                        <img
                          className="navigation__icon"
                          src={item.icon}
                          alt=""
                          width={56}
                          height={56}
                        />
                        <span className="navigation__label">{item.label}</span>
                        {active ? (
                          <span className="visually-hidden">(현재 페이지)</span>
                        ) : null}
                      </>
                    );
                  }}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
