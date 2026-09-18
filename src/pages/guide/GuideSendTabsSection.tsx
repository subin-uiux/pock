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
      <h2 className="send-tabs-system__title" id="send-tabs-system-title">
        SEND TABS
      </h2>
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
