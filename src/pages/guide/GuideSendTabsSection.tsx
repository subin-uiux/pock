import { useState } from "react";
import {
  PockSendTabs,
  type PockSendTabId,
} from "@/components/PockSendTabs";

/**
 * 가이드 — POCK 보내기 잠김/열림 탭 샘플 (Mo / Pad·Pc)
 */
export function GuideSendTabsSection() {
  const [tabMo, setTabMo] = useState<PockSendTabId>("open");
  const [tabPad, setTabPad] = useState<PockSendTabId>("locked");

  return (
    <section
      className="send-tabs-system"
      id="send-tabs-system"
      aria-labelledby="send-tabs-system-title"
    >
      <p className="send-tabs-system__eyebrow">POCK · Send Tabs</p>
      <div className="send-tabs-system__panel">
        <h2 className="send-tabs-system__title" id="send-tabs-system-title">
          SEND TABS
        </h2>
        <p className="send-tabs-system__lead">잠김 · 열림 = 하나의 탭 메뉴</p>
        <p className="send-tabs-system__desc">
          POCK 보내기 화면의 상태 탭입니다. 선택 시 배경은 brand/cyworld/base,
          글자는 base/0으로 바뀝니다. 모바일은 상단 가로 탭(14px / padding
          8px, bottom stroke 제외), 태블릿·PC는 측면 세로 탭(18px / padding
          12px, left stroke 제외)입니다.
        </p>
      </div>

      <p className="send-tabs-system__label">Send Tabs</p>
      <div className="send-tabs-system__board">
        <h3 className="send-tabs-system__card-title">Send Tabs</h3>
        <div className="send-tabs-system__samples">
          <div className="send-tabs-system__stage">
            <p className="send-tabs-system__caption">
              Mobile · 14px / padding 8px
            </p>
            <PockSendTabs size="mo" value={tabMo} onChange={setTabMo} />
          </div>
          <div className="send-tabs-system__stage">
            <p className="send-tabs-system__caption">
              Tablet · PC · 18px / padding 12px
            </p>
            <PockSendTabs size="tb" value={tabPad} onChange={setTabPad} />
          </div>
        </div>
      </div>
    </section>
  );
}
