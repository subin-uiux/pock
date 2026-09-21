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
      className={["notice-card", "notice-card--button", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      onClick={onClick}
    >
      <div className="notice-card__inner">
        <div className="notice-card__top">
          <div className="notice-card__meta">
            <img
              className="notice-card__icon"
              src={item.icon}
              alt=""
              width={item.iconW}
              height={item.iconH}
            />
            <p className="notice-card__label">{item.label}</p>
          </div>
          <div className="notice-card__aside">
            <time className="notice-card__time">{item.time}</time>
            {item.unread ? (
              <span className="notice-card__dot" aria-label="읽지 않음" />
            ) : null}
          </div>
        </div>
        <p className="notice-card__message">{item.message}</p>
      </div>
    </button>
  );
}

/**
 * 알림 `/notice`
 * 홈 main-alert → 진입
 */
export function NoticePage() {
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
    <section className="notice" aria-label="알림">
      <header className="notice__header">
        <button
          type="button"
          className="notice__back"
          aria-label="이전"
          onClick={goBack}
        >
          <img
            className="notice__back-icon"
            src="/assets/images/arrow-before.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
        <h1 className="notice__title">알림</h1>
      </header>

      <ul className="notice__list">
        {alertGroups.map((group) => {
          const stacked = Boolean(group.stacked && group.items.length > 1);
          const expanded = expandedIds.includes(group.id);
          const front = group.items[0];
          const count = Math.min(group.items.length, 3);

          if (!front) return null;

          if (!stacked) {
            return (
              <li key={group.id} className="notice__item">
                <AlertCard item={front} />
              </li>
            );
          }

          const items = group.items.slice(0, 3);
          const collapsedH = CARD_H + STACK_PEEK * (count - 1);
          const expandedH = count * CARD_H + (count - 1) * CARD_GAP;

          return (
            <li key={group.id} className="notice__item">
              <div
                className={
                  expanded
                    ? "notice-stack notice-stack--expanded"
                    : "notice-stack notice-stack--collapsed"
                }
                style={{
                  height: `${expanded ? expandedH : collapsedH}px`,
                }}
              >
                {items.map((item, index) => (
                  <AlertCard
                    key={item.id}
                    item={item}
                    className={`notice-stack__card notice-stack__card--${index}`}
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
