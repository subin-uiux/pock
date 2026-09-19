import { useEffect, useRef } from "react";
import type { MailboxSortId, MailboxSortOption } from "@/lib/mailbox-sort";

interface MailboxSortMenuProps {
  open: boolean;
  options: MailboxSortOption[];
  value: MailboxSortId;
  onSelect: (id: MailboxSortId) => void;
  onClose: () => void;
}

export function MailboxSortMenu({
  open,
  options,
  value,
  onSelect,
  onClose,
}: MailboxSortMenuProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (root.contains(target)) return;
      // 카테고리 바(배열 버튼) 클릭은 토글에 맡김
      if (
        target instanceof Element &&
        target.closest(".pock-mailbox__category")
      ) {
        return;
      }
      onClose();
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="mailbox-sort"
      ref={rootRef}
      role="listbox"
      aria-label="정렬"
    >
      <p className="mailbox-sort__label">정렬</p>
      <ul className="mailbox-sort__list">
        {options.map((option, index) => {
          const selected = option.id === value;
          return (
            <li className="mailbox-sort__item" key={option.id}>
              {index > 0 ? (
                <span className="mailbox-sort__rule" aria-hidden="true" />
              ) : null}
              <button
                type="button"
                className={
                  selected
                    ? "mailbox-sort__option mailbox-sort__option--selected"
                    : "mailbox-sort__option"
                }
                role="option"
                aria-selected={selected}
                onClick={() => onSelect(option.id)}
              >
                <img
                  className="mailbox-sort__check"
                  src="/assets/icons/alignment-check.svg"
                  alt=""
                  width={12}
                  height={12}
                  aria-hidden={!selected}
                />
                <span className="mailbox-sort__text">{option.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
