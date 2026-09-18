import { useState } from "react";
import { SelectionBox } from "@/components/SelectionBox";

/**
 * 가이드 — 선택 상자 샘플 (기본 / 선택)
 */
export function GuideSelectionBoxSection() {
  const [selectedId, setSelectedId] = useState("b");

  const items = [
    { id: "a", label: "선택지 A" },
    { id: "b", label: "선택지 B" },
    { id: "c", label: "선택지 C" },
  ];

  return (
    <section
      className="selection-box-system"
      id="selection-box-system"
      aria-labelledby="selection-box-system-title"
    >
      <p className="selection-box-system__eyebrow">POCK · Selection Box</p>
      <div className="selection-box-system__panel">
        <h2
          className="selection-box-system__title"
          id="selection-box-system-title"
        >
          SELECTION BOX
        </h2>
        <p className="selection-box-system__lead">
          캐릭터 · 옷 · 배경 선택 = 하나의 선택 상자
        </p>
        <p className="selection-box-system__desc">
          로그인 캐릭터 설정과 설정 화면에서 사용하는 선택 UI입니다. 기본은
          base/0 배경이며, 선택 시 배경은 #C7DDFF, stroke 3px는
          Navigation/home/selected(#2753F7), 하단 중앙에 check-blue 아이콘이
          표시됩니다.
        </p>
      </div>

      <p className="selection-box-system__label">Selection Box</p>
      <div className="selection-box-system__board">
        <h3 className="selection-box-system__card-title">Selection Box</h3>
        <div className="selection-box-system__samples">
          <div className="selection-box-system__stage">
            <p className="selection-box-system__caption">Default</p>
            <SelectionBox aria-label="기본 상태 예시">
              <span className="selection-box-system__placeholder">기본</span>
            </SelectionBox>
          </div>
          <div className="selection-box-system__stage">
            <p className="selection-box-system__caption">Selected</p>
            <SelectionBox selected aria-label="선택 상태 예시">
              <span className="selection-box-system__placeholder">선택</span>
            </SelectionBox>
          </div>
          <div className="selection-box-system__stage">
            <p className="selection-box-system__caption">Interactive</p>
            <div className="selection-box-system__row">
              {items.map((item) => (
                <SelectionBox
                  key={item.id}
                  selected={selectedId === item.id}
                  aria-label={item.label}
                  onClick={() => setSelectedId(item.id)}
                >
                  <span className="selection-box-system__placeholder">
                    {item.label}
                  </span>
                </SelectionBox>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
