import { useEffect } from "react";

/** 원본 스크립트: "random" 또는 CSS 색상 */
const COLOUR: "random" | string = "random";
const SPARKLES = 50;
const TICK_MS = 40;

/** mf2fm Tinkerbell — 밝은 랜덤 색 */
function newColour(): string {
  const c = [
    255,
    Math.floor(Math.random() * 256),
    0,
  ];
  c[2] = Math.floor(Math.random() * ((256 - c[1]) / 2));
  c.sort(() => 0.5 - Math.random());
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

function starColour(): string {
  return COLOUR === "random" ? newColour() : COLOUR;
}

/**
 * Tinkerbell Magic Sparkle (© mf2fm) — 태블릿·데스크톱 마우스 트레일
 */
export function SparkleCursor() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    /* 모바일(~768)에서는 클릭 스파클만 사용 */
    if (!window.matchMedia("(min-width: 769px)").matches) {
      return undefined;
    }

    const layer = document.createElement("div");
    layer.className = "sparkle-cursor";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);

    const tiny: HTMLDivElement[] = [];
    const star: HTMLDivElement[] = [];
    const starv = new Array<number>(SPARKLES).fill(0);
    const starx = new Array<number>(SPARKLES).fill(0);
    const stary = new Array<number>(SPARKLES).fill(0);
    const tinyx = new Array<number>(SPARKLES).fill(0);
    const tinyy = new Array<number>(SPARKLES).fill(0);
    const tinyv = new Array<number>(SPARKLES).fill(0);

    let x = 400;
    let y = 300;
    let ox = 400;
    let oy = 300;
    let shigh = window.innerHeight;
    let timerId = 0;
    let running = true;

    for (let i = 0; i < SPARKLES; i += 1) {
      const tinyEl = document.createElement("div");
      tinyEl.className = "sparkle-cursor__tiny";
      layer.appendChild(tinyEl);
      tiny[i] = tinyEl;

      const starEl = document.createElement("div");
      starEl.className = "sparkle-cursor__star";
      const barV = document.createElement("div");
      barV.className = "sparkle-cursor__bar sparkle-cursor__bar--v";
      const barH = document.createElement("div");
      barH.className = "sparkle-cursor__bar sparkle-cursor__bar--h";
      starEl.appendChild(barV);
      starEl.appendChild(barH);
      layer.appendChild(starEl);
      star[i] = starEl;
    }

    const updateStar = (i: number) => {
      starv[i] -= 1;
      if (starv[i] === 25) {
        star[i].classList.add("sparkle-cursor__star--mid");
      }
      if (starv[i] > 0) {
        stary[i] += 1 + Math.random() * 3;
        starx[i] += (i % 5 - 2) / 5;
        if (stary[i] < shigh) {
          star[i].style.top = `${stary[i]}px`;
          star[i].style.left = `${starx[i]}px`;
        } else {
          star[i].style.visibility = "hidden";
          starv[i] = 0;
        }
        return;
      }

      tinyv[i] = 50;
      tinyy[i] = stary[i];
      tinyx[i] = starx[i];
      tiny[i].style.top = `${tinyy[i]}px`;
      tiny[i].style.left = `${tinyx[i]}px`;
      tiny[i].style.width = "2px";
      tiny[i].style.height = "2px";
      const bar = star[i].querySelector(
        ".sparkle-cursor__bar",
      ) as HTMLElement | null;
      tiny[i].style.backgroundColor =
        bar?.style.backgroundColor || starColour();
      star[i].style.visibility = "hidden";
      star[i].classList.remove("sparkle-cursor__star--mid");
      tiny[i].style.visibility = "visible";
    };

    const updateTiny = (i: number) => {
      tinyv[i] -= 1;
      if (tinyv[i] === 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
      }
      if (tinyv[i] > 0) {
        tinyy[i] += 1 + Math.random() * 3;
        tinyx[i] += (i % 5 - 2) / 5;
        if (tinyy[i] < shigh) {
          tiny[i].style.top = `${tinyy[i]}px`;
          tiny[i].style.left = `${tinyx[i]}px`;
        } else {
          tiny[i].style.visibility = "hidden";
          tinyv[i] = 0;
        }
        return;
      }
      tiny[i].style.visibility = "hidden";
    };

    const tick = () => {
      if (!running) return;

      if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
        ox = x;
        oy = y;
        for (let c = 0; c < SPARKLES; c += 1) {
          if (starv[c]) continue;
          starx[c] = x;
          stary[c] = y + 1;
          star[c].style.left = `${starx[c]}px`;
          star[c].style.top = `${stary[c]}px`;
          star[c].classList.remove("sparkle-cursor__star--mid");
          const colour = starColour();
          star[c]
            .querySelectorAll<HTMLElement>(".sparkle-cursor__bar")
            .forEach((bar) => {
              bar.style.backgroundColor = colour;
            });
          star[c].style.visibility = "visible";
          starv[c] = 50;
          break;
        }
      }

      for (let c = 0; c < SPARKLES; c += 1) {
        if (starv[c]) updateStar(c);
        if (tinyv[c]) updateTiny(c);
      }

      timerId = window.setTimeout(tick, TICK_MS);
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const onResize = () => {
      shigh = window.innerHeight;
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", onResize);
    tick();

    return () => {
      running = false;
      window.clearTimeout(timerId);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      layer.remove();
    };
  }, []);

  return null;
}
