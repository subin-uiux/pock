import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import type { PopupVariant } from "@/types";

interface PopupProps {
  open: boolean;
  variant?: PopupVariant;
  /**
   * 생략 시 뷰포트 자동: Mo(~768) 320 · Tb/Pc(769~) 400
   * 가이드 등에서만 강제 지정
   */
  size?: "mo" | "tb";
  message: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  /** 기본 variant 아이콘 대신 사용 */
  iconSrc?: string;
  /** 아이콘 한 변(px). 기본 36 · share 기본 40 */
  iconSize?: number;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}

const ICONS: Record<PopupVariant, string> = {
  info: "/assets/images/Info_popup-icon.svg",
  warning: "/assets/images/Warning%20_Popup-icon.svg",
  share: "/assets/images/Share%20_Popup-icon.svg",
};

export function Popup({
  open,
  variant = "info",
  size,
  message,
  confirmLabel = "확인",
  cancelLabel,
  iconSrc,
  iconSize,
  onConfirm,
  onCancel,
  onClose,
}: PopupProps) {
  const breakpoint = useBreakpoint();
  const resolvedLayout: "mo" | "tb" =
    size ?? (breakpoint === "mo" ? "mo" : "tb");

  if (!open) return null;

  const barClass =
    resolvedLayout === "mo"
      ? "pock-window__bar pock-window__bar--normal pock-window__bar--w-mo-fit pock-popup__bar"
      : "pock-window__bar pock-window__bar--normal pock-window__bar--w-tb-pc pock-popup__bar";

  const resolvedIcon = iconSrc ?? ICONS[variant];
  const resolvedIconSize = iconSize ?? (variant === "share" ? 40 : 36);

  return (
    <div className="popup-layer" role="dialog" aria-modal="true">
      <DimmedOverlay open onClick={onClose ?? onCancel} />
      <article
        className={`pock-popup pock-popup--${variant} pock-popup--${resolvedLayout}`}
        aria-label={variant === "warning" ? "경고" : "정보"}
      >
        <header className={barClass}>
          <div className="pock-window__actions">
            <span
              className="pock-window__control pock-window__control--min"
              aria-hidden="true"
            />
            <button
              type="button"
              className="pock-window__control pock-window__control--close"
              aria-label="닫기"
              onClick={onClose ?? onCancel}
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
        <div className="pock-popup__body">
          <img
            className="pock-popup__icon"
            src={resolvedIcon}
            alt=""
            width={resolvedIconSize}
            height={resolvedIconSize}
            style={{ width: resolvedIconSize, height: resolvedIconSize }}
          />
          <p className="pock-popup__text">{message}</p>
        </div>
        <div className="pock-popup__actions">
          {cancelLabel ? (
            <Button variant="popup" onClick={onCancel}>
              {cancelLabel}
            </Button>
          ) : null}
          <Button variant="popup" onClick={onConfirm ?? onClose}>
            {confirmLabel}
          </Button>
        </div>
      </article>
    </div>
  );
}
