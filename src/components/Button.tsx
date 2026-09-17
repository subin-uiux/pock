import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "push"
  | "push-muted"
  | "push-green"
  | "guide"
  | "popup"
  | "action-icon"
  | "action-text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  block?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "push",
  block = false,
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [
    "btn",
    `btn--${variant}`,
    block ? "btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
