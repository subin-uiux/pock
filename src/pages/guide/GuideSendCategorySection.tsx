import { useState } from "react";
import {
  PockSendCategory,
  type PockSendCategoryId,
} from "@/components/PockSendCategory";

/**
 * 가이드 — POCK 보내기 카테고리 바 샘플 (Mo / Pad·Pc)
 */
export function GuideSendCategorySection() {
  const [categoryMo, setCategoryMo] = useState<PockSendCategoryId>("array");
  const [categoryPad, setCategoryPad] = useState<PockSendCategoryId>("array");

  return (
    <section
      className="send-category-system"
      id="send-category-system"
      aria-labelledby="send-category-system-title"
    >
      <p className="send-category-system__eyebrow">POCK · Send Category</p>
      <div className="send-category-system__panel">
        <h2
          className="send-category-system__title"
          id="send-category-system-title"
        >
          SEND CATEGORY
        </h2>
        <p className="send-category-system__lead">
          배열 · 검색 · 친구 = 하나의 카테고리 바
        </p>
        <p className="send-category-system__desc">
          POCK 보내기 화면에서 사용하는 카테고리 선택 UI입니다. 아이콘을
          선택하면 brand/cyworld/base 컬러로 활성화되며, 모바일은 24px /
          태블릿·PC는 32px 아이콘 크기를 사용합니다.
        </p>
      </div>

      <p className="send-category-system__label">Send Category</p>
      <div className="send-category-system__board">
        <h3 className="send-category-system__card-title">Send Category</h3>
        <div className="send-category-system__samples">
          <div className="send-category-system__stage">
            <p className="send-category-system__caption">
              Mobile · icon 24px
            </p>
            <PockSendCategory
              size="mo"
              value={categoryMo}
              onChange={setCategoryMo}
            />
          </div>
          <div className="send-category-system__stage">
            <p className="send-category-system__caption">
              Tablet · PC · icon 32px
            </p>
            <PockSendCategory
              size="tb"
              value={categoryPad}
              onChange={setCategoryPad}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
