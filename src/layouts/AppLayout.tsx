import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

interface AppLayoutProps {
  pageClassName: string;
  title?: string;
  showCoin?: boolean;
  showHeader?: boolean;
  showNav?: boolean;
}

export function AppLayout({
  pageClassName,
  title,
  showCoin = true,
  showHeader = true,
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
        {showHeader ? <Header title={title} showCoin={showCoin} /> : null}
        <main id="main" className="main">
          <Outlet />
        </main>
        {showNav ? <Navigation /> : null}
      </div>
    </div>
  );
}
