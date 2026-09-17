import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";

export function SettingsPage() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <section className="settings" aria-labelledby="settings-title">
      <h1 className="settings__title" id="settings-title">
        설정
      </h1>
      <p className="settings__lead">
        {user ? `${user.name}님 로그인 중` : "비로그인"}
      </p>
      <ul className="settings__list">
        <li>
          <Link className="settings__link" to="/guide">
            컴포넌트 가이드
          </Link>
        </li>
        <li>
          <Link className="settings__link" to="/mypage">
            마이페이지
          </Link>
        </li>
        <li>
          <Link className="settings__link" to="/notice">
            공지사항
          </Link>
        </li>
        <li>
          <Link className="settings__link" to="/letter-store">
            편지지 스토어
          </Link>
        </li>
        <li>
          <Link className="settings__link" to="/privacy">
            개인정보처리방침
          </Link>
        </li>
        <li>
          <Link className="settings__link" to="/terms">
            이용약관
          </Link>
        </li>
      </ul>
      <Button variant="push-muted" block onClick={handleLogout}>
        로그아웃
      </Button>
    </section>
  );
}
