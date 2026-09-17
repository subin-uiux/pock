import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { Letter } from "@/components/Letter";
import { canOpenPock, getPockById, getPockDday } from "@/lib/pock";

export function PockDetailPage() {
  const { id } = useParams();
  const pock = id ? getPockById(id) : null;

  if (!pock) {
    return (
      <section className="pock-detail">
        <p>POCK을 찾을 수 없습니다.</p>
        <Link to="/home">홈으로</Link>
      </section>
    );
  }

  const openable = canOpenPock(pock);

  return (
    <section className="pock-detail" aria-labelledby="detail-title">
      <div className="pock-detail__meta">
        <h1 className="pock-detail__title" id="detail-title">
          {pock.title ?? "POCK 상세"}
        </h1>
        <p className="pock-detail__lead">
          {pock.type === "received"
            ? `From. ${pock.sender.name}`
            : `To. ${pock.receiver.name}`}
          {" · "}
          {getPockDday(pock.openDate)}
        </p>
      </div>

      {openable ? (
        <Letter
          title={pock.title ?? "제목"}
          body={pock.message}
          from={pock.sender.name}
          date={pock.openDate}
          theme="rainbow"
        />
      ) : (
        <Letter title="" body="" from="" date="" beforeOpen />
      )}

      <div className="pock-detail__actions">
        {pock.hint ? (
          <Link to={`/pock-hint/${pock.id}`}>
            <Button variant="push-muted">
              힌트 보기 ({pock.hintCost} coin)
            </Button>
          </Link>
        ) : null}
        <Link to={pock.type === "sent" ? "/pock-sent" : "/pock-received"}>
          <Button variant="guide">목록으로</Button>
        </Link>
      </div>
    </section>
  );
}
