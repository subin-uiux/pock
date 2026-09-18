import type { ButtonHTMLAttributes } from "react";

export type FriendCheckboxSize = "mo" | "tb" | "pc";

interface FriendCheckboxProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  size?: FriendCheckboxSize;
  /** 있으면 독립 토글 버튼, 없으면 표시용 span */
  onCheckedChange?: (checked: boolean) => void;
}

const CHECK_SIZE: Record<FriendCheckboxSize, number> = {
  mo: 12,
  tb: 18,
  pc: 18,
};

/**
 * 친구목록 체크박스
 * mo 20×20 / tb·pc 30×30
 */
export function FriendCheckbox({
  checked = false,
  size = "mo",
  className = "",
  onCheckedChange,
  type = "button",
  onClick,
  ...rest
}: FriendCheckboxProps) {
  const rootClass = [
    "friend-checkbox",
    `friend-checkbox--${size}`,
    checked ? "friend-checkbox--checked" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const checkPx = CHECK_SIZE[size];
  const icon = checked ? (
    <img
      className="friend-checkbox__icon"
      src="/assets/icons/common/checkbox-check.svg"
      alt=""
      width={checkPx}
      height={checkPx}
    />
  ) : null;

  if (onCheckedChange) {
    return (
      <button
        type={type}
        className={rootClass}
        aria-pressed={checked}
        aria-label={rest["aria-label"] ?? "친구 선택"}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            onCheckedChange(!checked);
          }
        }}
        {...rest}
      >
        {icon}
      </button>
    );
  }

  return (
    <span className={rootClass} aria-hidden="true">
      {icon}
    </span>
  );
}
