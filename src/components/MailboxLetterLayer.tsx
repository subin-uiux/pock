import { useEffect, useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/Button";
import { DimmedOverlay } from "@/components/DimmedOverlay";
import { Letter } from "@/components/Letter";
import type { MailboxCardSample } from "@/data/pock-mailbox-samples";
import { toChoseong } from "@/lib/choseong";
import type { LetterCardMailbox } from "@/types";

export type MailboxLetterMode = "full" | "choseong";

interface MailboxLetterLayerProps {
  open: boolean;
  mode: MailboxLetterMode;
  mailbox: LetterCardMailbox;
  sample: MailboxCardSample | null;
  onClose: () => void;
}

function fileSafeName(value: string): string {
  const trimmed = value.trim() || "letter";
  return trimmed.replace(/[\\/:*?"<>|]+/g, "").slice(0, 40);
}

export function MailboxLetterLayer({
  open,
  mode,
  mailbox,
  sample,
  onClose,
}: MailboxLetterLayerProps) {
  const letterRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const title = sample?.title ?? "제목";
  const body = sample?.body ?? "";
  const displayTitle = mode === "choseong" ? toChoseong(title) : title;
  const displayBody = mode === "choseong" ? toChoseong(body) : body;
  const from = mailbox === "received" ? (sample?.target ?? "발신인") : "나";
  const date = sample?.openDate ?? "20xx.00.00";
  const theme = sample?.theme ?? "rainbow";
  const imageSrc = sample?.imageSrc;

  const dialogLabel = useMemo(
    () => (mode === "choseong" ? "초성 편지" : "편지 전체보기"),
    [mode],
  );

  useEffect(() => {
    if (!open) return undefined;

    const page = document.querySelector(".page");
    page?.classList.add("page--modal-open");

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      page?.classList.remove("page--modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !sample) return null;

  const handleSave = async () => {
    const node = letterRef.current?.querySelector(".letter");
    if (!(node instanceof HTMLElement) || saving) return;

    setSaving(true);
    const closeBtn = node.querySelector(".letter__expand");
    if (closeBtn instanceof HTMLElement) closeBtn.style.visibility = "hidden";

    try {
      await document.fonts.ready;
      const dataUrl = await toPng(node, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `pock-${fileSafeName(displayTitle)}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      if (closeBtn instanceof HTMLElement) closeBtn.style.visibility = "";
      setSaving(false);
    }
  };

  return (
    <div
      className="popup-layer mailbox-letter"
      role="dialog"
      aria-modal="true"
      aria-label={dialogLabel}
    >
      <DimmedOverlay open onClick={onClose} />
      <div className="mailbox-letter__stage" ref={letterRef}>
        <Letter
          title={displayTitle}
          body={displayBody}
          from={from}
          date={date}
          theme={theme}
          size="mo"
          imageSrc={imageSrc}
          onClose={onClose}
        />
        <Button
          variant="action-icon"
          className="mailbox-letter__save"
          disabled={saving}
          onClick={() => {
            void handleSave();
          }}
        >
          <span className="btn__icon btn__icon--image" aria-hidden="true">
            <img
              className="btn__icon-image"
              src="/assets/images/save-icon.webp"
              alt=""
              width={15}
              height={15}
            />
          </span>
          이미지로 저장하기
        </Button>
      </div>
    </div>
  );
}
