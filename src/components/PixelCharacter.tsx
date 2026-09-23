import { useEffect, useRef } from "react";
import {
  CHARACTER_BASE,
  getOutfitById,
  type CharacterId,
  type OutfitId,
} from "@/lib/profile-setup";

/** 썸네일·홈 프로필 캐릭터 표시 크기 (기존과 동일) */
export const PIXEL_CHARACTER_WIDTH = 74;
export const PIXEL_CHARACTER_HEIGHT = 126;

interface PixelCharacterProps {
  character: CharacterId;
  outfit?: OutfitId | null;
  className?: string;
  width?: number;
  height?: number;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * 원본 해상도로 래스터 → nearest-neighbor 축소
 * SVG를 CSS로 비정수 스케일하면 눈이 짝짝이 되는 문제 방지
 */
export function PixelCharacter({
  character,
  outfit: outfitId = null,
  className = "",
  width = PIXEL_CHARACTER_WIDTH,
  height = PIXEL_CHARACTER_HEIGHT,
}: PixelCharacterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wear = getOutfitById(character, outfitId);

  useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    (async () => {
      try {
        const baseImg = await loadImage(CHARACTER_BASE.src[character]);
        const wearImg = wear ? await loadImage(wear.src) : null;
        if (cancelled) return;

        const nativeW = CHARACTER_BASE.width;
        const nativeH = CHARACTER_BASE.height;
        const native = document.createElement("canvas");
        native.width = nativeW;
        native.height = nativeH;
        const nctx = native.getContext("2d");
        if (!nctx) return;

        nctx.imageSmoothingEnabled = false;
        nctx.clearRect(0, 0, nativeW, nativeH);
        nctx.drawImage(baseImg, 0, 0, nativeW, nativeH);

        if (wearImg && wear) {
          if (wear.fullFrame) {
            nctx.drawImage(wearImg, 0, 0, nativeW, nativeH);
          } else {
            const wearW = (wear.width / CHARACTER_BASE.width) * nativeW;
            const wearX = (nativeW - wearW) / 2;
            const wearY = nativeH * 0.483;
            nctx.drawImage(wearImg, wearX, wearY, wearW, wear.height);
          }
        }

        const ctx = canvas.getContext("2d");
        if (!ctx || cancelled) return;

        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(native, 0, 0, nativeW, nativeH, 0, 0, width, height);
      } catch {
        /* 이미지 로드 실패 시 빈 캔버스 유지 */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [character, wear, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={width}
      height={height}
      aria-hidden="true"
    />
  );
}
