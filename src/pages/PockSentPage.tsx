import { useEffect } from "react";
import { PockMailbox } from "@/pages/PockMailbox";

export function PockSentPage() {
  useEffect(() => {
    document.title = "전송함 ㅣ POCK";
  }, []);

  return <PockMailbox mailbox="sent" />;
}
