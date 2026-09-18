import type { ButtonHTMLAttributes, ReactNode } from "react";

interface SelectionBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children?: ReactNode;
}

/**
 * 캐릭터 · 옷 · 배경 선택 상자
 * 기본: base/0 배경 / 선택: #C7DDFF + Navigation blue 3px stroke + check-blue
 */
export function SelectionBox({
  selected = false,
  className = "",
  children,
  type = "button",
  ...rest
}: SelectionBoxProps) {
  const rootClass = [
    "selection-box",
    selected ? "selection-box--selected" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={rootClass} aria-pressed={selected} {...rest}>
      <span className="selection-box__media">{children}</span>
      {selected ? (
        <img
          className="selection-box__check"
          src="/assets/icons/common/check-blue.svg"
          alt=""
          width={25}
          height={25}
        />
      ) : null}
    </button>
  );
}
