import { Link, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";

gsap.registerPlugin(ScrollTrigger);

export function LandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".landing__brand", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(".landing__lead", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        delay: 0.15,
        ease: "power2.out",
      });
      gsap.from(".landing__actions", {
        y: 12,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="page page--index">
      <div className="page__wrapper" id="smooth-wrapper">
        <div className="page__content" id="smooth-content">
          <main className="main main--index">
            <section className="landing" ref={heroRef} aria-labelledby="landing-title">
              <img
                className="landing__logo"
                src="/assets/images/logo.svg"
                alt=""
                width={132}
                height={163}
              />
              <h1 className="landing__brand" id="landing-title">
                POCK
              </h1>
              <p className="landing__lead">
                미래의 나에게 보내는 디지털 타임캡슐
              </p>
              <div className="landing__actions">
                <Link to="/login">
                  <Button variant="push">시작하기</Button>
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
