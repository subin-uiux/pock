import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import type { PopupVariant } from "@/types";

interface PopupProps {
  open: boolean;
  variant?: PopupVariant;
  size?: "mo" | "tb";
  message: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
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
  size = "mo",
  message,
  confirmLabel = "확인",
  cancelLabel,
  onConfirm,
  onCancel,
  onClose,
}: PopupProps) {
  if (!open) return null;

  const barClass =
    size === "mo"
      ? "pock-window__bar pock-window__bar--normal pock-window__bar--w-mo-fit pock-popup__bar"
      : "pock-window__bar pock-window__bar--normal pock-window__bar--w-tb-pc pock-popup__bar";

  return (
    <div className="popup-layer" role="dialog" aria-modal="true">
      <DimmedOverlay open onClick={onClose ?? onCancel} />
      <article
        className={`pock-popup pock-popup--${variant} pock-popup--${size}`}
        aria-label={variant === "warning" ? "경고" : "정보"}
      >
        <header className={barClass}>
          <div className="pock-window__actions">
            <span className="pock-window__control pock-window__control--min" aria-hidden="true" />
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
            src={ICONS[variant]}
            alt=""
            width={36}
            height={36}
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
