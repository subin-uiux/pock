import { useEffect, useMemo, useRef, useState } from "react";
import { toBlob } from "html-to-image";
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

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

async function renderLetterBlob(node: HTMLElement): Promise<Blob | null> {
  await document.fonts.ready;
  const options = {
    pixelRatio: 2,
    cacheBust: true,
    filter: (el: Node) =>
      !(el instanceof HTMLElement && el.classList.contains("letter__expand")),
  };
  // Safari는 첫 렌더에서 이미지가 비어 나오는 경우가 있어 한 번 더 그린다
  await toBlob(node, options);
  return toBlob(node, options);
}

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
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
  const blobRef = useRef<Promise<Blob | null> | null>(null);

  const title = sample?.title ?? "제목";
  const body = sample?.body ?? "";
  const displayTitle = mode === "choseong" ? toChoseong(title) : title;
  const displayBody = mode === "choseong" ? toChoseong(body) : body;
  const from = mailbox === "received" ? (sample?.target ?? "발신인") : "나";
  const date = sample?.openDate ?? "2026.09.01";
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

  // 모바일 공유 시트는 탭 직후(사용자 제스처)에만 열리므로 미리 렌더해 둔다
  useEffect(() => {
    blobRef.current = null;
    if (!open || !sample || !isTouchDevice()) return undefined;

    const timerId = window.setTimeout(() => {
      const node = letterRef.current?.querySelector(".letter");
      if (!(node instanceof HTMLElement)) return;
      blobRef.current = renderLetterBlob(node).catch(() => null);
    }, 300);

    return () => {
      window.clearTimeout(timerId);
      blobRef.current = null;
    };
  }, [open, sample, displayTitle, displayBody]);

  if (!open || !sample) return null;

  const handleSave = async () => {
    const node = letterRef.current?.querySelector(".letter");
    if (!(node instanceof HTMLElement) || saving) return;

    setSaving(true);
    const fileName = `pock-${fileSafeName(displayTitle)}.png`;

    try {
      const blob =
        (await (blobRef.current ?? Promise.resolve(null))) ??
        (await renderLetterBlob(node));
      if (!blob) return;

      const file = new File([blob], fileName, { type: "image/png" });
      if (isTouchDevice() && navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file] });
          return;
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") {
            return;
          }
        }
      }
      downloadBlob(blob, fileName);
    } finally {
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
              src="/assets/images/icons/save.webp"
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
