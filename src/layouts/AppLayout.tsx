import { Outlet } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

interface AppLayoutProps {
  pageClassName: string;
  showNav?: boolean;
}

export function AppLayout({
  pageClassName,
  showNav = true,
}: AppLayoutProps) {
  const classes = [
    "page",
    pageClassName,
    showNav ? "page--has-navigation" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <div className="page__wrapper">
        <main id="main" className="main">
          <Outlet />
        </main>
        {showNav ? <Navigation /> : null}
      </div>
    </div>
  );
}
