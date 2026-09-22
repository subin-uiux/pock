import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TERMS_EFFECTIVE_DATE,
  TERMS_NOTICE_LINES,
  TERMS_TITLE,
  termsArticles,
  type TermsBlock,
} from "@/data/terms-data";

function TermsBlocks({ blocks }: { blocks: TermsBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={`p-${index}`} className="terms-page__paragraph">
              {block.text}
            </p>
          );
        }

        if (block.type === "subtitle") {
          return (
            <h3 key={`sub-${index}`} className="terms-page__subtitle">
              {block.text}
            </h3>
          );
        }

        if (block.type === "ol") {
          return (
            <ol key={`ol-${index}`} className="terms-page__list">
              {block.items.map((item, itemIndex) => (
                <li key={item} className="terms-page__list-item">
                  <span className="terms-page__list-num" aria-hidden="true">
                    {itemIndex + 1}.
                  </span>
                  <span className="terms-page__list-text">{item}</span>
                </li>
              ))}
            </ol>
          );
        }

        return (
          <ul key={`ul-${index}`} className="terms-page__list terms-page__list--plain">
            {block.items.map((item) => (
              <li key={item} className="terms-page__list-item">
                <span className="terms-page__list-bullet" aria-hidden="true">
                  ·
                </span>
                <span className="terms-page__list-text">{item}</span>
              </li>
            ))}
          </ul>
        );
      })}
    </>
  );
}

/**
 * 약관 및 정책 `/terms`
 * 설정 → 약관 및 정책
 */
export function TermsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "약관 및 정책 ㅣ POCK";
  }, []);

  const goBack = () => {
    navigate("/settings");
  };

  const goNext = () => {
    navigate("/privacy");
  };

  return (
    <section className="terms-page" aria-label="약관 및 정책">
      <nav className="terms-page__nav" aria-label="문서 이동">
        <button type="button" className="terms-page__back" onClick={goBack}>
          <img
            className="terms-page__back-icon"
            src="/assets/icons/left-arrow.svg"
            alt=""
            width={24}
            height={24}
          />
          <span className="terms-page__back-label">이전으로</span>
        </button>
        <button type="button" className="terms-page__next" onClick={goNext}>
          <span className="terms-page__next-label">다음으로</span>
          <img
            className="terms-page__next-icon"
            src="/assets/icons/left-arrow.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
      </nav>

      <article className="terms-page__doc">
        <h1 className="terms-page__title">{TERMS_TITLE}</h1>
        <p className="terms-page__date">{TERMS_EFFECTIVE_DATE}</p>

        <aside className="terms-page__notice" aria-label="안내">
          <p className="terms-page__notice-text">
            {TERMS_NOTICE_LINES[0]}
            <br />
            {TERMS_NOTICE_LINES[1]}
          </p>
        </aside>

        <div className="terms-page__articles">
          {termsArticles.map((article) => (
            <section
              key={article.id}
              className="terms-page__article"
              aria-labelledby={article.id}
            >
              <h2 className="terms-page__article-title" id={article.id}>
                {article.title}
              </h2>
              <TermsBlocks blocks={article.blocks} />
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}
