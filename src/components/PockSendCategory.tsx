import type { CSSProperties } from "react";

export type PockSendCategoryId = "array" | "search" | "friends";
export type PockSendCategorySize = "mo" | "tb" | "pc";

interface CategoryItem {
  id: PockSendCategoryId;
  label: string;
  icon: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "array",
    label: "배열",
    icon: "/assets/images/PockSendPage_array-icon.svg",
  },
  {
    id: "search",
    label: "검색",
    icon: "/assets/images/PockSendPage_search-icon.svg",
  },
  {
    id: "friends",
    label: "친구",
    icon: "/assets/images/PockSendPage_freinds-icon.svg",
  },
];

interface PockSendCategoryProps {
  value: PockSendCategoryId;
  onChange: (id: PockSendCategoryId) => void;
  size?: PockSendCategorySize;
  className?: string;
}

export function PockSendCategory({
  value,
  onChange,
  size = "mo",
  className = "",
}: PockSendCategoryProps) {
  const rootClass = [
    "pock-send-category",
    `pock-send-category--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      role="tablist"
      aria-label="보내기 카테고리"
    >
      {CATEGORIES.map((item, index) => {
        const selected = value === item.id;
        const iconStyle = {
          "--pock-send-category-icon": `url("${item.icon}")`,
        } as CSSProperties;

        return (
          <div className="pock-send-category__item" key={item.id}>
            {index > 0 ? (
              <span className="pock-send-category__divider" aria-hidden="true" />
            ) : null}
            <button
              type="button"
              role="tab"
              className={
                selected
                  ? "pock-send-category__button pock-send-category__button--selected"
                  : "pock-send-category__button"
              }
              aria-selected={selected}
              aria-label={item.label}
              onClick={() => onChange(item.id)}
            >
              <span
                className="pock-send-category__icon"
                style={iconStyle}
                aria-hidden="true"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
