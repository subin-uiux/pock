import { useId } from "react";
import { Navigation } from "@/components/Navigation";

/**
 * 가이드 — Navigation 미리보기
 * Mo: 가로 리사이즈로 그라데이션만 늘어나는지 확인
 * Pad/Pc: 그라데이션 485 고정
 */
export function GuideNavigationDemo() {
  const moHintId = useId();

  return (
    <>
      <div className="nav-system__variant">
        <p className="nav-system__device">Mo</p>
        <p className="nav-system__hint" id={moHintId}>
          오른쪽 아래 모서리를 드래그해 너비를 조절하세요. 아이콘 묶음은 360
          고정, 그라데이션만 넓어집니다.
        </p>
        <div
          className="nav-system__resize"
          role="group"
          aria-labelledby={moHintId}
        >
          <Navigation preview forceDevice="mo" />
        </div>
      </div>

      <div className="nav-system__variant">
        <p className="nav-system__device">Pad / Pc</p>
        <p className="nav-system__hint">
          그라데이션 485px 고정 · 아이콘 gap 26 · 기본 50 / hover·활성 60
        </p>
        <div className="nav-system__pad-frame">
          <Navigation preview forceDevice="pad" />
        </div>
      </div>
    </>
  );
}
