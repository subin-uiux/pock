import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useCoin } from "@/hooks/useCoin";
import { CoinBadge } from "@/components/CoinBadge";

export function MyPage() {
  const { user } = useAuth();
  const { balance } = useCoin();

  return (
    <section className="mypage" aria-labelledby="mypage-title">
      <h1 className="visually-hidden" id="mypage-title">
        마이페이지
      </h1>
      <div className="mypage__profile">
        <img
          className="mypage__avatar"
          src="/assets/images/profile/profile-me.svg"
          alt=""
          width={72}
          height={88}
        />
        <div>
          <p className="mypage__name">{user?.name ?? "게스트"}</p>
          <p className="mypage__meta">가상 로그인</p>
          <CoinBadge amount={balance} />
        </div>
      </div>
      <ul className="mypage__list">
        <li>
          <Link className="mypage__link" to="/coin">
            코인
          </Link>
        </li>
        <li>
          <Link className="mypage__link" to="/letter-store">
            편지지 스토어
          </Link>
        </li>
        <li>
          <Link className="mypage__link" to="/settings">
            설정
          </Link>
        </li>
      </ul>
    </section>
  );
}
