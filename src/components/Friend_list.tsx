import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { FriendCheckbox } from "@/components/FriendCheckbox";
import { PockWindowScrollbar } from "@/components/PockWindowScrollbar";
import { SearchInput } from "@/components/SearchInput";
import type { PockUser } from "@/types";

interface Friend_listProps {
  open: boolean;
  friends: PockUser[];
  selectedId?: string | null;
  size?: "mo" | "tb" | "pc";
  /** modal: 딤+팝업(기본) · inline: 페이지 내 배치(홈) */
  variant?: "modal" | "inline";
  /**
   * grid: 프로필 그리드 + 친구 관리(기본)
   * pick: 행 목록 + 선택완료 — Letter_write 친구 선택
   */
  mode?: "grid" | "pick";
  /** false면 그리드 모드 푸터 숨김 */
  showManage?: boolean;
  onSelect: (friend: PockUser) => void;
  onClose: () => void;
  onManage?: () => void;
  /** pick 모드 — 선택완료 시 (기본: onSelect 후 닫기는 부모가 처리) */
  onConfirm?: (friend: PockUser) => void;
  confirmLabel?: string;
}

export function Friend_list({
  open,
  friends,
  selectedId,
  size = "mo",
  variant = "modal",
  mode = "grid",
  showManage = true,
  onSelect,
  onClose,
  onManage,
  onConfirm,
  confirmLabel = "선택완료",
}: Friend_listProps) {
  const [query, setQuery] = useState("");
  const [pendingId, setPendingId] = useState<string | null>(selectedId ?? null);
  const listRef = useRef<HTMLUListElement>(null);
  const isPick = mode === "pick";

  useEffect(() => {
    if (open) {
      setPendingId(selectedId ?? null);
      setQuery("");
    }
  }, [open, selectedId]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return friends;
    return friends.filter((f) => f.name.toLowerCase().includes(q));
  }, [friends, query]);

  if (!open) return null;

  const activeId = isPick ? pendingId : selectedId;

  const handleItemClick = (friend: PockUser) => {
    if (isPick) {
      setPendingId((prev) => (prev === friend.id ? null : friend.id));
      return;
    }
    onSelect(friend);
  };

  const handleConfirm = () => {
    const friend = friends.find((f) => f.id === pendingId);
    if (!friend) return;
    if (onConfirm) {
      onConfirm(friend);
      return;
    }
    onSelect(friend);
  };

  const windowClass = [
    "pock-window",
    "pock-window--friend",
    isPick ? "pock-window--friend-pick" : "",
    `pock-window--${size}`,
  ]
    .filter(Boolean)
    .join(" ");

  const checkboxSize = size === "pc" ? "tb" : size;

  const windowEl = (
    <article className={windowClass} aria-label="친구 목록">
      <header className="pock-window__bar">
        <h4 className="pock-window__title">친구 목록</h4>
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
            id={isPick ? "friend-pick-search" : "friend-search"}
            label="친구 검색"
            placeholder="친구 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="pock-window__pane">
          <PockWindowScrollbar listRef={listRef} syncKey={filtered.length} />
          <ul className="pock-window__list" ref={listRef}>
            {filtered.map((friend) => {
              const selected = friend.id === activeId;
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
                    onClick={() => handleItemClick(friend)}
                  >
                    {hasThumb ? (
                      <img
                        className="pock-window__thumb"
                        src={friend.profileImage}
                        alt=""
                        width={isPick ? 36 : 48}
                        height={isPick ? 36 : 48}
                      />
                    ) : (
                      <span className="pock-window__thumb" aria-hidden="true" />
                    )}
                    <p className="pock-window__name">{friend.name}</p>
                    <FriendCheckbox size={checkboxSize} checked={selected} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isPick ? (
        <footer className="pock-window__foot pock-window__foot--confirm">
          <Button
            variant="push"
            block
            className="pock-window__confirm"
            disabled={!pendingId}
            onClick={handleConfirm}
          >
            {confirmLabel}
          </Button>
        </footer>
      ) : showManage ? (
        <footer className="pock-window__foot">
          <button
            className="pock-window__manage"
            type="button"
            onClick={onManage}
          >
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
      ) : null}
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
      aria-label="친구 목록"
    >
      <DimmedOverlay open onClick={onClose} />
      {windowEl}
    </div>
  );
}
