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
      <h2
        className="selection-box-system__title"
        id="selection-box-system-title"
      >
        SELECTION BOX
      </h2>
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
