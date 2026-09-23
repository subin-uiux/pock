import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";

/** 시안 안내 카피 */
const INTRO_LINES = [
  "POCK을 사용하면서 궁금한 점이 있나요?",
  "작은 궁금증부터 이용 중 불편했던 점까지 편하게 남겨주세요.",
  "POCK이 확인하고 답변해드릴게요",
] as const;

/** 기본 placeholder */
const PLACEHOLDERS = {
  title: "궁금한 내용을 한 줄로 입력해주세요.",
  content:
    "문의하실 내용을 자세하게 적어주세요. 발생한 상황이나 오류 화면을 함께 알려주시면 더 빠르게 도와드릴 수 있어요.",
  email: "답변받을 이메일을 입력해주세요.",
} as const;

/** 미작성 시 입력칸 안 빨간 안내 — 시안 */
const EMPTY_HINTS = {
  title: "궁금한 내용을 한 줄로 입력해주세요.",
  content: "문의제목을 작성해주세요.",
  email: "답변받을 이메일을 입력해주세요.",
} as const;

type FieldKey = keyof typeof EMPTY_HINTS;

/**
 * 문의하기 `/inquiry`
 * 설정 → 문의하기
 * 창 레이아웃: 공지사항과 동일 · 본문 문의 폼
 */
export function InquiryPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, boolean>>>({});

  useEffect(() => {
    document.title = "문의하기 ㅣ POCK";
  }, []);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 1000);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/settings", { replace: true });
  };

  const clearError = (field: FieldKey) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldKey, boolean>> = {};
    if (!title.trim()) nextErrors.title = true;
    if (!content.trim()) nextErrors.content = true;
    if (!email.trim()) nextErrors.email = true;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setToastOpen(true);
  };

  return (
    <section className="inquiry-page" aria-label="문의하기">
      <header className="inquiry-page__header">
        <button
          type="button"
          className="inquiry-page__back"
          aria-label="뒤로가기"
          onClick={goBack}
        >
          <img
            className="inquiry-page__back-icon"
            src="/assets/icons/left-arrow.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
        <h1 className="inquiry-page__title">문의하기</h1>
      </header>

      <article className="inquiry-page__window" aria-label="문의하기">
        <header className="pock-window__bar">
          <h2 className="pock-window__title">문의하기</h2>
          <div className="pock-window__actions">
            <span
              className="pock-window__control pock-window__control--min"
              aria-hidden="true"
            />
            <button
              type="button"
              className="pock-window__control pock-window__control--close"
              aria-label="닫기"
              onClick={goBack}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              <img
                className="pock-window__control-icon"
                src="/assets/images/heart-icon.svg"
                alt=""
                width={9}
                height={7}
              />
            </button>
          </div>
        </header>

        <div className="inquiry-page__body">
          <p className="inquiry-page__intro">
            {INTRO_LINES.map((line, index) => (
              <span key={line}>
                {line}
                {index < INTRO_LINES.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>

          <form
            className="inquiry-page__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="inquiry-page__field">
              <label className="inquiry-page__label" htmlFor="inquiry-title">
                문의제목
              </label>
              <input
                id="inquiry-title"
                className={
                  errors.title
                    ? "inquiry-page__input inquiry-page__input--error"
                    : "inquiry-page__input"
                }
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                  clearError("title");
                }}
                placeholder={
                  errors.title ? EMPTY_HINTS.title : PLACEHOLDERS.title
                }
                autoComplete="off"
                aria-invalid={Boolean(errors.title)}
              />
            </div>

            <div className="inquiry-page__field">
              <label className="inquiry-page__label" htmlFor="inquiry-content">
                문의내용
              </label>
              <textarea
                id="inquiry-content"
                className={
                  errors.content
                    ? "inquiry-page__textarea inquiry-page__textarea--error"
                    : "inquiry-page__textarea"
                }
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                  clearError("content");
                }}
                placeholder={
                  errors.content ? EMPTY_HINTS.content : PLACEHOLDERS.content
                }
                rows={6}
                aria-invalid={Boolean(errors.content)}
              />
            </div>

            <div className="inquiry-page__field">
              <label className="inquiry-page__label" htmlFor="inquiry-email">
                이메일
              </label>
              <input
                id="inquiry-email"
                className={
                  errors.email
                    ? "inquiry-page__input inquiry-page__input--error"
                    : "inquiry-page__input"
                }
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearError("email");
                }}
                placeholder={
                  errors.email ? EMPTY_HINTS.email : PLACEHOLDERS.email
                }
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
              />
            </div>

            <div className="inquiry-page__actions">
              <Button
                type="submit"
                variant="popup"
                className="inquiry-page__submit"
              >
                문의 보내기
              </Button>
            </div>
          </form>
        </div>
      </article>

      {toastOpen ? (
        <div className="inquiry-toast" role="status" aria-live="polite">
          <span className="inquiry-toast__icon" aria-hidden="true" />
          <p className="inquiry-toast__text">문의 보내기 완료되었습니다!</p>
        </div>
      ) : null}
    </section>
  );
}
