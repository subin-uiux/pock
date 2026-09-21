import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Friend_list } from "@/components/Friend_list";
import { friendItems } from "@/data/friend-data";
import type { PockUser } from "@/types";

const MQ_TB = "(min-width: 768px)";
const MQ_PC = "(min-width: 1280px)";

type FriendListSize = "mo" | "tb" | "pc";

function getFriendListSize(): FriendListSize {
  if (typeof window === "undefined") return "mo";
  if (window.matchMedia(MQ_PC).matches) return "pc";
  if (window.matchMedia(MQ_TB).matches) return "tb";
  return "mo";
}

/**
 * 친구목록 `/Friend_list`
 * Friend_list 컴포넌트 페이지
 */
export function Friend_listPage() {
  const navigate = useNavigate();
  const [size, setSize] = useState<FriendListSize>(getFriendListSize);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    document.title = "친구목록 ㅣ POCK";
  }, []);

  useEffect(() => {
    const mqTb = window.matchMedia(MQ_TB);
    const mqPc = window.matchMedia(MQ_PC);
    const sync = () => setSize(getFriendListSize());
    sync();
    mqTb.addEventListener("change", sync);
    mqPc.addEventListener("change", sync);
    return () => {
      mqTb.removeEventListener("change", sync);
      mqPc.removeEventListener("change", sync);
    };
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/settings", { replace: true });
  };

  return (
    <section className="friend-list-page" aria-label="친구목록">
      <Friend_list
        open
        friends={friendItems}
        selectedId={selectedId}
        size={size}
        onSelect={(friend: PockUser) => {
          setSelectedId((prev) => (prev === friend.id ? null : friend.id));
        }}
        onClose={goBack}
      />
    </section>
  );
}
