import { Card } from "@/components/Card";
import { getPockDday, getReceivedPocks } from "@/lib/pock";

function variantFor(status: string) {
  if (status === "opened") return "open" as const;
  if (status === "opening") return "unopened" as const;
  return "progress" as const;
}

export function PockReceivedPage() {
  const items = getReceivedPocks();

  return (
    <section className="pock-list" aria-labelledby="received-title">
      <div className="pock-list__head">
        <h1 className="pock-list__title" id="received-title">
          보관함
        </h1>
        <p className="pock-list__lead">받은 POCK {items.length}개</p>
      </div>
      <ul className="pock-list__items">
        {items.map((item) => (
          <li key={item.id}>
            <Card
              target={item.sender.name}
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
