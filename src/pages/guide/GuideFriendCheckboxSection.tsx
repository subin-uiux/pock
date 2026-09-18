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
      <p className="friend-checkbox-system__eyebrow">POCK · Friend Checkbox</p>
      <div className="friend-checkbox-system__panel">
        <h2
          className="friend-checkbox-system__title"
          id="friend-checkbox-system-title"
        >
          FRIEND CHECKBOX
        </h2>
        <p className="friend-checkbox-system__lead">
          친구목록 선택 = 하나의 체크박스
        </p>
        <p className="friend-checkbox-system__desc">
          친구목록에서 사용하는 체크박스입니다. 기본은 배경 #fff, stroke 1.5px
          base/400이며, hover·click 시 배경만 base/300으로 부드럽게 전환됩니다.
          체크 시 checkbox-check 아이콘을 중앙에 표시합니다. 모바일 20×20(아이콘
          12×12), 태블릿·PC 30×30(아이콘 18×18)입니다.
        </p>
      </div>

      <p className="friend-checkbox-system__label">Friend Checkbox</p>
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
