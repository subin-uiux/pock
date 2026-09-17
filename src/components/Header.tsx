import { Link } from "react-router-dom";
import { useCoin } from "@/hooks/useCoin";

interface HeaderProps {
  title?: string;
  showCoin?: boolean;
}

export function Header({ title = "POCK", showCoin = true }: HeaderProps) {
  const { balance } = useCoin();

  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo-link" to="/home">
          {title}
        </Link>
        {showCoin ? (
          <div className="header__tools">
            <Link className="coin coin--header" to="/coin" aria-label="코인">
              <img
                className="coin__icon"
                src="/assets/images/coin.svg"
                alt=""
                width={18}
                height={18}
              />
              <span className="coin__value">{balance}</span>
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
