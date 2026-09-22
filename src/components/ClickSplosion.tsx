import { useEffect } from "react";

/** mf2fm Clicksplosion — 클릭 시 * 스파클 */
const SPARKS = 75;
const SPEED = 33;
const BANGS = 5;
const COLOURS = [
  "#03f",
  "#f03",
  "#0e0",
  "#93f",
  "#0cf",
  "#f93",
  "#f0c",
] as const;

/**
 * 모바일 전용 — 클릭(탭)하면 반짝이 폭죽
 */
export function ClickSplosion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const layer = document.createElement("div");
    layer.className = "click-splosion";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);

    const intensity = new Array<number>(BANGS).fill(0);
    const Xpos = new Array<number>(SPARKS * BANGS).fill(0);
    const Ypos = new Array<number>(SPARKS * BANGS).fill(0);
    const dX = new Array<number>(SPARKS * BANGS).fill(0);
    const dY = new Array<number>(SPARKS * BANGS).fill(0);
    const decay = new Array<number>(SPARKS * BANGS).fill(0);
    const timers = new Array<number>(BANGS).fill(0);
    const stars: HTMLDivElement[] = [];

    let swide = window.innerWidth - 7;
    let shigh = window.innerHeight - 7;
    let count = 0;
    let alive = true;

    for (let i = 0; i < BANGS; i += 1) {
      for (let j = SPARKS * i; j < SPARKS + SPARKS * i; j += 1) {
        const star = document.createElement("div");
        star.className = "click-splosion__star";
        star.textContent = "*";
        layer.appendChild(star);
        stars[j] = star;
      }
    }

    const bang = (N: number) => {
      if (!alive) return;
      let finished = 0;
      for (let i = SPARKS * N; i < SPARKS * (N + 1); i += 1) {
        if (decay[i]) {
          const Z = stars[i].style;
          Xpos[i] += dX[i];
          Ypos[i] += dY[i] += 1.25 / intensity[N];
          if (
            Xpos[i] >= swide ||
            Xpos[i] < 0 ||
            Ypos[i] >= shigh ||
            Ypos[i] < 0
          ) {
            decay[i] = 1;
          } else {
            Z.left = `${Xpos[i]}px`;
            Z.top = `${Ypos[i]}px`;
          }
          if (decay[i] === 15) Z.fontSize = "7px";
          else if (decay[i] === 7) Z.fontSize = "2px";
          else if (decay[i] === 1) Z.visibility = "hidden";
          decay[i] -= 1;
        } else {
          finished += 1;
        }
      }
      if (finished !== SPARKS) {
        timers[N] = window.setTimeout(() => bang(N), SPEED);
      }
    };

    const eksplode = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      const N = ++count % BANGS;
      const M = Math.floor(Math.random() * 3 * COLOURS.length);
      intensity[N] = 5 + Math.random() * 4;

      for (let i = N * SPARKS; i < (N + 1) * SPARKS; i += 1) {
        Xpos[i] = x;
        Ypos[i] = y - 5;
        dY[i] = (Math.random() - 0.5) * intensity[N];
        dX[i] =
          (Math.random() - 0.5) *
          (intensity[N] - Math.abs(dY[i])) *
          1.25;
        decay[i] = 16 + Math.floor(Math.random() * 16);
        const Z = stars[i].style;
        if (M < COLOURS.length) {
          Z.color = COLOURS[i % 2 ? count % COLOURS.length : M];
        } else if (M < 2 * COLOURS.length) {
          Z.color = COLOURS[count % COLOURS.length];
        } else {
          Z.color = COLOURS[i % COLOURS.length];
        }
        Z.fontSize = "13px";
        Z.visibility = "visible";
        Z.left = `${Xpos[i]}px`;
        Z.top = `${Ypos[i]}px`;
      }
      window.clearTimeout(timers[N]);
      bang(N);
    };

    const onResize = () => {
      swide = window.innerWidth - 7;
      shigh = window.innerHeight - 7;
    };

    document.addEventListener("click", eksplode);
    window.addEventListener("resize", onResize);

    return () => {
      alive = false;
      document.removeEventListener("click", eksplode);
      window.removeEventListener("resize", onResize);
      timers.forEach((id) => window.clearTimeout(id));
      layer.remove();
    };
  }, []);

  return null;
}
