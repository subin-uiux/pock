import { noticeItems } from "@/data/notice-data";

export function NoticePage() {
  return (
    <section className="notice" aria-labelledby="notice-title">
      <h1 className="notice__title" id="notice-title">
        공지사항
      </h1>
      <ul className="notice__list">
        {noticeItems.map((item) => (
          <li key={item.id}>
            <article className="notice-item">
              <h2 className="notice-item__title">
                {item.title}
                {item.isNew ? (
                  <span className="notice-item__badge">N</span>
                ) : null}
              </h2>
              <p className="notice-item__date">{item.date}</p>
              <p className="notice-item__content">{item.content}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
