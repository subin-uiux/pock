import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";

const DEMO_MESSAGE = "Demo 페이지입니다";

/**
 * 로그인 — UI만. 로그인/회원가입은 데모 안내, 데모 버튼으로 체험 진입
 */
export function LoginPage() {
  const navigate = useNavigate();
  const { loginMock } = useAuth();
  const [email, setEmail] = useState("");

  const showDemoNotice = () => {
    window.alert(DEMO_MESSAGE);
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    showDemoNotice();
  };

  const handleDemo = () => {
    loginMock();
    navigate("/profile/nickname", { replace: true });
  };

  return (
    <section className="login" aria-label="로그인">
      <img
        className="login__logo"
        src="/assets/images/logo.svg"
        alt="POCK"
        width={92}
        height={123}
      />
      <h1 className="login__title">로그인</h1>
      <p className="login__lead">
        현재는 데모 계정만 준비되어 있습니다.
        <br />
        아래 데모 버튼을 눌러 바로 체험해보세요.
      </p>

      <form className="login__form" onSubmit={handleLogin} noValidate>
        <div className="login__field">
          <label className="login__label" htmlFor="login-email">
            이메일
          </label>
          <div className="login__input-shell">
            <input
              id="login-email"
              className="login__input"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="your@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <div className="login__actions">
          <Button type="submit" variant="push-muted" block>
            로그인
          </Button>
          <Button type="button" variant="push" block onClick={handleDemo}>
            데모 계정으로 체험
          </Button>
        </div>
      </form>

      <p className="login__footer">
        <span className="login__footer-text">아직 계정이 없나요?</span>
        <button
          type="button"
          className="login__signup"
          onClick={showDemoNotice}
        >
          회원가입
        </button>
      </p>
    </section>
  );
}
