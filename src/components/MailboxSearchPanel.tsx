import { useEffect, useId, useState } from "react";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { SearchInput } from "@/components/SearchInput";
import { useBreakpoint } from "@/hooks/useBreakpoint";

interface MailboxSearchPanelProps {
  open: boolean;
  value: string;
  onApply: (query: string) => void;
  onClose: () => void;
}

export function MailboxSearchPanel({
  open,
  value,
  onApply,
  onClose,
}: MailboxSearchPanelProps) {
  const inputId = useId();
  const breakpoint = useBreakpoint();
  const isMo = breakpoint === "mo";
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    if (!open) return undefined;
    setDraft(value);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, value, onClose]);

  if (!open) return null;

  return (
    <div
      className="popup-layer popup-layer--mailbox-search"
      role="dialog"
      aria-modal="true"
      aria-label="검색"
    >
      <DimmedOverlay open onClick={onClose} />
      <div className="mailbox-search">
        <div className="mailbox-search__inner">
          <SearchInput
            id={inputId}
            className={isMo ? "search-input--mo" : "search-input--wide"}
            label="검색어"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                onApply(draft);
              }
            }}
          />
          <p className="mailbox-search__hint">
            <span className="mailbox-search__hint-mark" aria-hidden="true" />
            편지 제목 혹은 친구 이름을 입력하세요!
          </p>
          <div className="mailbox-search__actions">
            <Button
              variant="action-text"
              className="mailbox-search__apply"
              onClick={() => onApply(draft)}
            >
              적용하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
