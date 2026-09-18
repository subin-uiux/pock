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
      <h2
        className="send-category-system__title"
        id="send-category-system-title"
      >
        SEND CATEGORY
      </h2>
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
