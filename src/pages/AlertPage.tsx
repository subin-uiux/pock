import { useEffect, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { alertGroups, type AlertItem } from "@/data/alert-data";

/** 카드 높이 116 · 펼침 간격 16 */
const CARD_H = 116;
const CARD_GAP = 16;
/** 접힘 시 뒤 카드 peek (세 장 기준) */
const STACK_PEEK = 8;

function AlertCard({
  item,
  onClick,
  className = "",
  style,
}: {
  item: AlertItem;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      className={["alert-card", "alert-card--button", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      onClick={onClick}
    >
      <div className="alert-card__inner">
        <div className="alert-card__top">
          <div className="alert-card__meta">
            <img
              className="alert-card__icon"
              src={item.icon}
              alt=""
              width={item.iconW}
              height={item.iconH}
            />
            <p className="alert-card__label">{item.label}</p>
          </div>
          <div className="alert-card__aside">
            <time className="alert-card__time">{item.time}</time>
            {item.unread ? (
              <span className="alert-card__dot" aria-label="읽지 않음" />
            ) : null}
          </div>
        </div>
        <p className="alert-card__message">{item.message}</p>
      </div>
    </button>
  );
}

/**
 * 알림 `/alerts`
 * 홈 main-alert → 진입
 */
export function AlertPage() {
  const navigate = useNavigate();
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  useEffect(() => {
    document.title = "알림 ㅣ POCK";
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/home", { replace: true });
  };

  const toggleStack = (groupId: string) => {
    setExpandedIds((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId],
    );
  };

  return (
    <section className="alert-page" aria-label="알림">
      <header className="alert-page__header">
        <button
          type="button"
          className="alert-page__back"
          aria-label="이전"
          onClick={goBack}
        >
          <img
            className="alert-page__back-icon"
            src="/assets/icons/left-arrow.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
        <h1 className="alert-page__title">알림</h1>
      </header>

      <ul className="alert-page__list">
        {alertGroups.map((group) => {
          const stacked = Boolean(group.stacked && group.items.length > 1);
          const expanded = expandedIds.includes(group.id);
          const front = group.items[0];
          const count = Math.min(group.items.length, 3);

          if (!front) return null;

          if (!stacked) {
            return (
              <li key={group.id} className="alert-page__item">
                <AlertCard item={front} />
              </li>
            );
          }

          const items = group.items.slice(0, 3);
          const collapsedH = CARD_H + STACK_PEEK * (count - 1);
          const expandedH = count * CARD_H + (count - 1) * CARD_GAP;

          return (
            <li key={group.id} className="alert-page__item">
              <div
                className={
                  expanded
                    ? "alert-stack alert-stack--expanded"
                    : "alert-stack alert-stack--collapsed"
                }
                style={{
                  height: `${expanded ? expandedH : collapsedH}px`,
                }}
              >
                {items.map((item, index) => (
                  <AlertCard
                    key={item.id}
                    item={item}
                    className={`alert-stack__card alert-stack__card--${index}`}
                    style={
                      {
                        "--i": index,
                        zIndex: expanded ? 1 : count - index,
                      } as CSSProperties
                    }
                    onClick={() => toggleStack(group.id)}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
