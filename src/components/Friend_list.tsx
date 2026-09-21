import { DimmedOverlay } from "@/components/DimmedOverlay";
import { FriendCheckbox } from "@/components/FriendCheckbox";
import { PockWindowScrollbar } from "@/components/PockWindowScrollbar";
import { SearchInput } from "@/components/SearchInput";
import type { PockUser } from "@/types";
import { useMemo, useRef, useState } from "react";

interface Friend_listProps {
  open: boolean;
  friends: PockUser[];
  selectedId?: string | null;
  size?: "mo" | "tb" | "pc";
  /** modal: 딤+팝업(기본) · inline: 페이지 내 배치(홈) */
  variant?: "modal" | "inline";
  onSelect: (friend: PockUser) => void;
  onClose: () => void;
  onManage?: () => void;
}

export function Friend_list({
  open,
  friends,
  selectedId,
  size = "mo",
  variant = "modal",
  onSelect,
  onClose,
  onManage,
}: Friend_listProps) {
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return friends;
    return friends.filter((f) => f.name.toLowerCase().includes(q));
  }, [friends, query]);

  if (!open) return null;

  const windowEl = (
    <article
      className={`pock-window pock-window--friend pock-window--${size}`}
      aria-label="친구목록"
    >
      <header className="pock-window__bar">
        <h4 className="pock-window__title">친구목록</h4>
        <div className="pock-window__actions">
          <span
            className="pock-window__control pock-window__control--min"
            aria-hidden="true"
          />
          <button
            type="button"
            className="pock-window__control pock-window__control--close"
            aria-label="닫기"
            onClick={onClose}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            <img
              className="pock-window__control-icon"
              src="/assets/images/heart-icon.svg"
              alt=""
              width={9}
              height={7}
            />
          </button>
        </div>
      </header>
      <div className="pock-window__rule" aria-hidden="true" />
      <div className="pock-window__body">
        <div className="pock-window__search">
          <SearchInput
            id="friend-search"
            label="친구 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="pock-window__pane">
          <PockWindowScrollbar listRef={listRef} syncKey={filtered.length} />
          <ul className="pock-window__list" ref={listRef}>
            {filtered.map((friend) => {
              const selected = friend.id === selectedId;
              const hasThumb = Boolean(friend.profileImage);

              return (
                <li key={friend.id}>
                  <button
                    type="button"
                    className={
                      selected
                        ? "pock-window__item pock-window__item--selected"
                        : "pock-window__item"
                    }
                    onClick={() => onSelect(friend)}
                  >
                    {hasThumb ? (
                      <img
                        className="pock-window__thumb"
                        src={friend.profileImage}
                        alt=""
                        width={48}
                        height={48}
                      />
                    ) : (
                      <span
                        className="pock-window__thumb"
                        aria-hidden="true"
                      />
                    )}
                    <p className="pock-window__name">{friend.name}</p>
                    <FriendCheckbox size={size} checked={selected} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <footer className="pock-window__foot">
        <button className="pock-window__manage" type="button" onClick={onManage}>
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

  if (variant === "inline") {
    return windowEl;
  }

  return (
    <div
      className="popup-layer"
      role="dialog"
      aria-modal="true"
      aria-label="친구목록"
    >
      <DimmedOverlay open onClick={onClose} />
      {windowEl}
    </div>
  );
}
