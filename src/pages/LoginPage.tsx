import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginMock, isLoggedIn } = useAuth();
  const from =
    (location.state as { from?: string } | null)?.from &&
    (location.state as { from: string }).from !== "/login"
      ? (location.state as { from: string }).from
      : "/home";

  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  const handleKakaoMock = () => {
    loginMock();
    navigate(from, { replace: true });
  };

  return (
    <section className="login" aria-labelledby="login-title">
      <div className="login__card">
        <img
          className="login__logo"
          src="/assets/images/logo.svg"
          alt=""
          width={96}
          height={118}
        />
        <h1 className="login__title" id="login-title">
          POCK
        </h1>
        <p className="login__lead">미래의 나에게 보내는 타임캡슐</p>
        <p className="login__note">
          카카오 로그인 UI 목업입니다. 실제 API는 연동하지 않습니다.
        </p>
        <Button
          variant="push"
          block
          className="login__kakao-button"
          onClick={handleKakaoMock}
        >
          카카오로 시작하기
        </Button>
      </div>
    </section>
  );
}
