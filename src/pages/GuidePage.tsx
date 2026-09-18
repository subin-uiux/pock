import { useEffect, useState } from "react";
import { GuideMarkup } from "@/pages/guide/GuideMarkup";

const LABELS = {
  mo: "Mobile · ~1023",
  tb: "Tablet · 1024–1919",
  pc: "Desktop · 1920+",
} as const;

const GUIDE_NAV = [
  {
    href: "#nav-system",
    label: "홈",
    icon: "/assets/icons/navigation/home.svg",
    width: 50,
    height: 42,
  },
  {
    href: "#nav-system",
    label: "보관함",
    icon: "/assets/icons/navigation/Storage%20Box.svg",
    width: 54,
    height: 54,
  },
  {
    href: "#send-category-system",
    label: "보내기",
    icon: "/assets/icons/navigation/sand.svg",
    width: 44,
    height: 50,
  },
  {
    href: "#card-system",
    label: "전송함",
    icon: "/assets/icons/navigation/Sent.svg",
    width: 42,
    height: 43,
  },
  {
    href: "#popup-system",
    label: "설정",
    icon: "/assets/icons/navigation/setting.svg",
    width: 54,
    height: 54,
  },
] as const;

function readBreakpointLabel(): string {
  if (typeof window === "undefined") return LABELS.mo;
  if (window.matchMedia("(min-width: 1920px)").matches) return LABELS.pc;
  if (window.matchMedia("(min-width: 1024px)").matches) return LABELS.tb;
  return LABELS.mo;
}

/**
 * 디자인 시스템 가이드 — 기존 guide.html React 이식
 * 로그인 없이 /guide
 */
export function GuidePage() {
  const [badge, setBadge] = useState(readBreakpointLabel);

  useEffect(() => {
    document.title = "컴포넌트 가이드 ㅣ POCK";
    const update = () => setBadge(readBreakpointLabel());
    const mqTb = window.matchMedia("(min-width: 1024px)");
    const mqPc = window.matchMedia("(min-width: 1920px)");
    update();
    mqTb.addEventListener("change", update);
    mqPc.addEventListener("change", update);
    return () => {
      mqTb.removeEventListener("change", update);
      mqPc.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="page page--guide page--has-navigation">
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <div className="page__wrapper">
        <p className="guide__badge" aria-live="polite">
          {badge}
        </p>
        <main id="main" className="main">
          <GuideMarkup />
        </main>
      </div>

      <nav className="navigation navigation--fixed" aria-label="가이드 섹션 바로가기">
        <ul className="navigation__list">
          {GUIDE_NAV.map((item) => (
            <li className="navigation__item" key={item.label}>
              <a className="navigation__link" href={item.href}>
                <img
                  className="navigation__icon"
                  src={item.icon}
                  alt=""
                  width={item.width}
                  height={item.height}
                />
                <span className="navigation__label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
