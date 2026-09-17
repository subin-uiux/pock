import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { LetterCard } from "@/components/LetterCard";
import { CoinBadge } from "@/components/CoinBadge";
import { useCoin } from "@/hooks/useCoin";
import { getPockDday, getReceivedPocks, getSentPocks } from "@/lib/pock";
import "swiper/css";

function variantFor(status: string) {
  if (status === "opened") return "open" as const;
  if (status === "opening") return "unopened" as const;
  return "progress" as const;
}

export function HomePage() {
  const { balance } = useCoin();
  const received = getReceivedPocks();
  const sent = getSentPocks();

  return (
    <section className="home" aria-labelledby="home-title">
      <div className="home__hero">
        <div>
          <h1 className="home__title" id="home-title">
            홈
          </h1>
          <p className="home__lead">받은 POCK과 보낸 POCK, 코인 현황</p>
        </div>
        <Link className="home__coin" to="/coin" aria-label="코인">
          <CoinBadge amount={balance} />
        </Link>
      </div>

      <div className="home__block">
        <h2 className="home__subtitle">받은 POCK ({received.length})</h2>
        {received.length > 0 ? (
          <Swiper spaceBetween={12} slidesPerView="auto" className="home__swiper">
            {received.map((item) => (
              <SwiperSlide key={item.id}>
                <LetterCard
                  target={item.sender.name}
                  variant={variantFor(item.status)}
                  moreHref={`/pock-detail/${item.id}`}
                  dday={getPockDday(item.openDate)}
                  title={item.title}
                  openDate={item.openDate}
                  receiver={item.receiver.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="home__lead">받은 POCK이 없습니다.</p>
        )}
        <Link className="home__link" to="/pock-received">
          보관함 전체보기 &gt;
        </Link>
      </div>

      <div className="home__block">
        <h2 className="home__subtitle">보낸 POCK ({sent.length})</h2>
        <ul className="home__sent-list">
          {sent.slice(0, 2).map((item) => (
            <li key={item.id}>
              <LetterCard
                target={item.receiver.name}
                variant={variantFor(item.status)}
                moreHref={`/pock-detail/${item.id}`}
                dday={getPockDday(item.openDate)}
                title={item.title}
                openDate={item.openDate}
                receiver={item.receiver.name}
              />
            </li>
          ))}
        </ul>
        <Link className="home__link" to="/pock-sent">
          전송함 전체보기 &gt;
        </Link>
      </div>
    </section>
  );
}
