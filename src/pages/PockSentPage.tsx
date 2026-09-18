import { Card } from "@/components/Card";
import { getPockDday, getSentPocks } from "@/lib/pock";

function variantFor(status: string) {
  if (status === "opened") return "open" as const;
  if (status === "opening") return "unopened" as const;
  return "progress" as const;
}

export function PockSentPage() {
  const items = getSentPocks();

  return (
    <section className="pock-list" aria-labelledby="sent-title">
      <div className="pock-list__head">
        <h1 className="pock-list__title" id="sent-title">
          전송함
        </h1>
        <p className="pock-list__lead">보낸 POCK {items.length}개</p>
      </div>
      <ul className="pock-list__items">
        {items.map((item) => (
          <li key={item.id}>
            <Card
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
    </section>
  );
}
