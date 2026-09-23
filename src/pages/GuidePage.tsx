import { GuideMarkup } from "@/pages/guide/GuideMarkup";
import { useEffect } from "react";

/**
 * 디자인 시스템 가이드 — /guide
 * 로그인 없이 접근
 */
export function GuidePage() {
  useEffect(() => {
    document.title = "컴포넌트 가이드 ㅣ POCK";
  }, []);

  return (
    <div className="page page--guide">
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <div className="page__wrapper">
        <main id="main" className="main">
          <GuideMarkup />
        </main>
      </div>
    </div>
  );
}
