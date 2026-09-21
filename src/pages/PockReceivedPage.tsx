import { useEffect } from "react";
import { PockMailbox } from "@/pages/PockMailbox";

export function PockReceivedPage() {
  useEffect(() => {
    document.title = "보관함 ㅣ POCK";
  }, []);

  return <PockMailbox mailbox="received" />;
}
