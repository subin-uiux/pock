import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { noticeItems } from "@/data/notice-data";
import { markNoticeRead } from "@/lib/notice";

/**
 * 공지사항 `/notice`
 * 설정 → 공지사항
 * 반응형: Mo 좌우 20·540 · Tb/Pc 666
 */
export function NoticePage() {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<string | null>(
    noticeItems[0]?.id ?? null,
  );

  useEffect(() => {
    document.title = "공지사항 ㅣ POCK";
    markNoticeRead();
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/settings", { replace: true });
  };

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="notice-page" aria-label="공지사항">
      <header className="notice-page__header">
        <button
          type="button"
          className="notice-page__back"
          aria-label="뒤로가기"
          onClick={goBack}
        >
          <img
            className="notice-page__back-icon"
            src="/assets/icons/left-arrow.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
        <h1 className="notice-page__title">공지사항</h1>
      </header>

      <article className="notice-page__window" aria-label="공지 목록">
        <header className="pock-window__bar">
          <h2 className="pock-window__title">공지사항</h2>
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

        <div className="notice-page__body">
          <ul className="notice-page__list">
            {noticeItems.map((item) => {
              const open = openId === item.id;
              return (
                <li
                  key={item.id}
                  className={
                    open
                      ? "notice-page__item notice-page__item--open"
                      : "notice-page__item"
                  }
                >
                  <button
                    type="button"
                    className={
                      open
                        ? "notice-page__row notice-page__row--open"
                        : "notice-page__row"
                    }
                    aria-expanded={open}
                    onClick={() => toggleItem(item.id)}
                  >
                    <span className="notice-page__row-title">{item.title}</span>
                    <img
                      className="notice-page__chevron"
                      src="/assets/icons/left-arrow.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                  </button>
                  {open ? (
                    <div className="notice-page__panel">
                      <p className="notice-page__text">
                        {item.content.split("\n").map((line, index, lines) => (
                          <span key={`${item.id}-line-${index}`}>
                            {line}
                            {index < lines.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </p>
                      <time className="notice-page__date" dateTime={item.date}>
                        {item.date}
                      </time>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}
