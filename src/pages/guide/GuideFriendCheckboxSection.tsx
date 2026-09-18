import { useState } from "react";
import { FriendCheckbox } from "@/components/FriendCheckbox";

/**
 * 가이드 — 친구목록 체크박스 샘플
 */
export function GuideFriendCheckboxSection() {
  const [checkedMo, setCheckedMo] = useState(true);
  const [checkedPad, setCheckedPad] = useState(false);

  return (
    <section
      className="friend-checkbox-system"
      id="friend-checkbox-system"
      aria-labelledby="friend-checkbox-system-title"
    >
      <h2
        className="friend-checkbox-system__title"
        id="friend-checkbox-system-title"
      >
        FRIEND CHECKBOX
      </h2>
      <div className="friend-checkbox-system__board">
        <h3 className="friend-checkbox-system__card-title">Friend Checkbox</h3>
        <div className="friend-checkbox-system__samples">
          <div className="friend-checkbox-system__stage">
            <p className="friend-checkbox-system__caption">
              Mobile · 20×20
            </p>
            <div className="friend-checkbox-system__row">
              <FriendCheckbox
                size="mo"
                checked={checkedMo}
                onCheckedChange={setCheckedMo}
                aria-label="모바일 체크박스"
              />
              <FriendCheckbox
                size="mo"
                checked={false}
                onCheckedChange={() => undefined}
                aria-label="모바일 기본 · hover"
              />
              <FriendCheckbox
                size="mo"
                checked
                onCheckedChange={() => undefined}
                aria-label="모바일 체크됨"
              />
            </div>
          </div>
          <div className="friend-checkbox-system__stage">
            <p className="friend-checkbox-system__caption">
              Tablet · PC · 30×30
            </p>
            <div className="friend-checkbox-system__row">
              <FriendCheckbox
                size="tb"
                checked={checkedPad}
                onCheckedChange={setCheckedPad}
                aria-label="패드 체크박스"
              />
              <FriendCheckbox
                size="tb"
                checked={false}
                onCheckedChange={() => undefined}
                aria-label="패드 기본 · hover"
              />
              <FriendCheckbox
                size="tb"
                checked
                onCheckedChange={() => undefined}
                aria-label="패드 체크됨"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
