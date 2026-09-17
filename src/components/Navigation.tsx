import { NavLink } from "react-router-dom";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const NAV_ITEMS = [
  {
    to: "/home",
    label: "홈",
    icon: "/assets/icons/navigation/home.svg",
    width: 50,
    height: 42,
  },
  {
    to: "/pock-received",
    label: "보관함",
    icon: "/assets/icons/navigation/Storage%20Box.svg",
    width: 60,
    height: 60,
  },
  {
    to: "/pock-send",
    label: "보내기",
    icon: "/assets/icons/navigation/sand.svg",
    width: 44,
    height: 50,
  },
  {
    to: "/pock-sent",
    label: "전송함",
    icon: "/assets/icons/navigation/Sent.svg",
    width: 42,
    height: 43,
  },
  {
    to: "/settings",
    label: "설정",
    icon: "/assets/icons/navigation/setting.svg",
    width: 54,
    height: 54,
  },
] as const;

export function Navigation() {
  const size = useBreakpoint();
  const deviceClass = size === "mo" ? "navigation--mo" : "navigation--pad";

  return (
    <nav
      className={`navigation navigation--fixed ${deviceClass}`}
      aria-label="주요 메뉴"
    >
      <ul className="navigation__list">
        {NAV_ITEMS.map((item) => (
          <li className="navigation__item" key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "navigation__link navigation__link--active"
                  : "navigation__link"
              }
              end={item.to === "/home"}
            >
              {({ isActive }) => (
                <>
                  <img
                    className="navigation__icon"
                    src={item.icon}
                    alt=""
                    width={item.width}
                    height={item.height}
                  />
                  <span className="navigation__label">{item.label}</span>
                  {isActive ? (
                    <span className="visually-hidden">(현재 페이지)</span>
                  ) : null}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
