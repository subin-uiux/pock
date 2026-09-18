import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

/**
 * 앱 진입 스플래시 — 포크가 pocket에 꽂힌 뒤 /login 으로 이동
 */
export function LandingPage() {
  const navigate = useNavigate();
  const forkRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.title = "POCK";

    const fork = forkRef.current;
    if (!fork) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cancelled = false;
    let done = false;
    const goNext = () => {
      if (cancelled || done) return;
      done = true;
      navigate("/login", { replace: true });
    };

    /* 최종: 포크가 주머니 위로 더 튀어나오게 (핸들은 pocket 뒤) */
    const docked = {
      left: "50%",
      top: "-92%",
      xPercent: -50,
      rotation: 0,
      transformOrigin: "50% 85%",
    } as const;

    if (reduceMotion) {
      gsap.set(fork, docked);
      const timer = window.setTimeout(goNext, 600);
      return () => {
        cancelled = true;
        window.clearTimeout(timer);
      };
    }

    /* 시작: 더 높은 우측 상단 → 화살표 호를 따라 좌하 → 중앙에 꽂힘 */
    gsap.set(fork, {
      left: "118%",
      top: "-175%",
      xPercent: -50,
      rotation: 38,
      transformOrigin: "50% 85%",
    });

    const tl = gsap.timeline({
      defaults: { ease: "sine.inOut" },
      onComplete: goNext,
    });

    // 1) 높은 우측 상단에서 약하게 흔들림
    tl.to(fork, {
      rotation: 33,
      duration: 0.16,
      yoyo: true,
      repeat: 1,
    })
      // 2) 첫 화살표: 좌하 대각으로 이동하며 살짝 흔들
      .to(fork, {
        left: "78%",
        top: "-125%",
        rotation: 20,
        duration: 0.4,
        ease: "power1.inOut",
      })
      .to(
        fork,
        {
          rotation: 24,
          duration: 0.14,
          yoyo: true,
          repeat: 1,
        },
        "<0.1",
      )
      // 3) 둘째 화살표: 포켓 위 중앙으로
      .to(fork, {
        left: "50%",
        top: "-115%",
        rotation: 4,
        duration: 0.4,
        ease: "power1.inOut",
      })
      .to(
        fork,
        {
          rotation: 0,
          duration: 0.14,
          yoyo: true,
          repeat: 1,
        },
        "<0.12",
      )
      // 4) 꽂힘
      .to(fork, {
        ...docked,
        duration: 0.48,
        ease: "power2.in",
      })
      .to(fork, {
        y: 2,
        duration: 0.08,
        yoyo: true,
        repeat: 1,
        ease: "power1.out",
      })
      .to({}, { duration: 0.75 });

    return () => {
      cancelled = true;
      tl.kill();
    };
  }, [navigate]);

  return (
    <div className="page page--index">
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <main id="main" className="main main--index">
        <section className="landing" aria-label="POCK 시작">
          <div className="landing__brand">
            <div className="landing__mark">
              <img
                ref={forkRef}
                className="landing__fork"
                src="/assets/images/pork-logo.svg"
                alt=""
                width={28}
                height={71}
              />
              <img
                className="landing__pocket"
                src="/assets/images/pocket-logo.svg"
                alt=""
                width={49}
                height={45}
              />
            </div>
            <img
              className="landing__wordmark"
              src="/assets/images/pocktext-logo.svg"
              alt="POCK"
              width={92}
              height={19}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
