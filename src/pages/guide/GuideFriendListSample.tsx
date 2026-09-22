import { useRef } from "react";
import { PockWindowScrollbar } from "@/components/PockWindowScrollbar";
import { PockWindowThumb } from "@/components/PockWindowThumb";
import type {
  BackgroundId,
  CharacterId,
  OutfitId,
} from "@/lib/profile-setup";

const PROFILE_COUNT = 12;

/** 가이드 Friend_list 샘플 — 캐릭터·옷·배경 임시 매칭 */
const GUIDE_THUMBS: Array<{
  character: CharacterId;
  outfit: OutfitId;
  background: BackgroundId;
}> = [
  { character: "boy", outfit: "boy-hood", background: "blue" },
  { character: "girl", outfit: "girl-school", background: "pink" },
  { character: "boy", outfit: "boy-jacket", background: "green" },
  { character: "girl", outfit: "girl-coat", background: "orange" },
  { character: "boy", outfit: "boy-knit", background: "yellow" },
  { character: "girl", outfit: "girl-skirt", background: "red" },
  { character: "boy", outfit: "boy-hood", background: "pink" },
  { character: "girl", outfit: "girl-school", background: "blue" },
  { character: "boy", outfit: "boy-jacket", background: "orange" },
  { character: "girl", outfit: "girl-coat", background: "green" },
  { character: "boy", outfit: "boy-knit", background: "red" },
  { character: "girl", outfit: "girl-skirt", background: "yellow" },
];

interface GuideFriendListSampleProps {
  size: "mo" | "tb" | "pc";
}

/** /guide WINDOW — Friend_list 스크롤 샘플 */
export function GuideFriendListSample({ size }: GuideFriendListSampleProps) {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <article className={`pock-window pock-window--friend pock-window--${size}`} aria-label="친구목록">
      <header className="pock-window__bar">
        <h4 className="pock-window__title">친구목록</h4>
        <div className="pock-window__actions">
          <span className="pock-window__control pock-window__control--min" aria-hidden="true" />
          <span className="pock-window__control pock-window__control--close" aria-hidden="true">
            <img
              className="pock-window__control-icon"
              src="/assets/images/heart-icon.svg"
              alt=""
              width={9}
              height={7}
            />
          </span>
        </div>
      </header>
      <div className="pock-window__rule" aria-hidden="true" />
      <div className="pock-window__body">
        <div className="pock-window__pane">
          <PockWindowScrollbar listRef={listRef} syncKey={PROFILE_COUNT} />
          <ul className="pock-window__list" ref={listRef}>
            {Array.from({ length: PROFILE_COUNT }, (_, index) => {
              const thumb = GUIDE_THUMBS[index % GUIDE_THUMBS.length];

              return (
                <li key={index} className="pock-window__item">
                  <PockWindowThumb
                    character={thumb.character}
                    outfit={thumb.outfit}
                    background={thumb.background}
                  />
                  <p className="pock-window__name">Text</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <footer className="pock-window__foot">
        <button className="pock-window__manage" type="button">
          <img
            className="pock-window__manage-icon"
            src="/assets/images/friends-management-icon.svg"
            alt=""
            width={18}
            height={18}
          />
          <span>친구 관리</span>
        </button>
      </footer>
    </article>
  );
}
