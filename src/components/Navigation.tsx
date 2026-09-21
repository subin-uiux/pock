import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { askLeave, shouldBlockLeave } from "@/lib/leave-guard";

const NAV_ITEMS = [
  {
    to: "/home",
    label: "홈",
    icon: "/assets/icons/navigation/home.svg",
    onboard: "nav-home",
  },
  {
    to: "/pock-received",
    label: "보관함",
    icon: "/assets/icons/navigation/Storage%20Box.svg",
    onboard: "nav-received",
  },
  {
    to: "/pock-send",
    label: "보내기",
    icon: "/assets/icons/navigation/sand.svg",
    onboard: "nav-send",
  },
  {
    to: "/pock-sent",
    label: "전송함",
    icon: "/assets/icons/navigation/Sent.svg",
    onboard: "nav-sent",
  },
  {
    to: "/settings",
    label: "설정",
    icon: "/assets/icons/navigation/setting.svg",
    onboard: "nav-settings",
  },
] as const;

type NavTo = (typeof NAV_ITEMS)[number]["to"];

interface NavigationProps {
  /** 가이드 미리보기용 — fixed 해제 */
  preview?: boolean;
  /** 미리보기에서 강제 디바이스 (없으면 breakpoint) */
  forceDevice?: "mo" | "pad";
}

export function Navigation({ preview = false, forceDevice }: NavigationProps) {
  const size = useBreakpoint();
  const navigate = useNavigate();
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
                  data-onboard={item.onboard}
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
                  data-onboard={item.onboard}
                  className={({ isActive }) =>
                    isActive
                      ? "navigation__link navigation__link--active"
                      : "navigation__link"
                  }
                  end={item.to === "/home"}
                  onClick={(event) => {
                    if (item.to === location.pathname) return;
                    if (!shouldBlockLeave()) return;
                    event.preventDefault();
                    askLeave(() => navigate(item.to));
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <img
                        className="navigation__icon"
                        src={item.icon}
                        alt=""
                        width={56}
                        height={56}
                      />
                      <span className="navigation__label">{item.label}</span>
                      {isActive ? (
                        <span className="visually-hidden">(현재 페이지)</span>
                      ) : null}
                    </>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
