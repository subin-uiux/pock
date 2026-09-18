export type PockSendTabId = "locked" | "open";
export type PockSendTabSize = "mo" | "tb" | "pc";

interface TabItem {
  id: PockSendTabId;
  label: string;
}

const TABS: TabItem[] = [
  { id: "locked", label: "잠김" },
  { id: "open", label: "열림" },
];

interface PockSendTabsProps {
  value: PockSendTabId;
  onChange: (id: PockSendTabId) => void;
  size?: PockSendTabSize;
  className?: string;
}

export function PockSendTabs({
  value,
  onChange,
  size = "mo",
  className = "",
}: PockSendTabsProps) {
  const rootClass = ["pock-send-tabs", `pock-send-tabs--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} role="tablist" aria-label="잠김 열림 탭">
      {TABS.map((item) => {
        const selected = value === item.id;

        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            className={
              selected
                ? "pock-send-tabs__button pock-send-tabs__button--selected"
                : "pock-send-tabs__button"
            }
            aria-selected={selected}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
