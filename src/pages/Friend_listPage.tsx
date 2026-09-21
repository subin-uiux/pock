import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Friend_list } from "@/components/Friend_list";
import { FriendProfilePopup } from "@/components/FriendProfilePopup";
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
 * 친구 목록 관리 `/Friend_list`
 * 설정 → 친구 목록 관리하기 · 홈 친구목록 → 친구 관리
 */
export function Friend_listPage() {
  const navigate = useNavigate();
  const [size, setSize] = useState<FriendListSize>(getFriendListSize);
  const [friends, setFriends] = useState<PockUser[]>(() => [...friendItems]);
  const [selected, setSelected] = useState<PockUser | null>(null);

  useEffect(() => {
    document.title = "친구 목록 관리 ㅣ POCK";
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

  const popupSize = size === "mo" ? "mo" : "tb";

  return (
    <section className="friend-list-page" aria-label="친구 목록 관리">
      <Friend_list
        open
        friends={friends}
        selectedId={selected?.id ?? null}
        size={size}
        showManage={false}
        onSelect={(friend: PockUser) => {
          setSelected((prev) => (prev?.id === friend.id ? null : friend));
        }}
        onClose={goBack}
      />

      <FriendProfilePopup
        open={selected !== null}
        name={selected?.name ?? ""}
        profileImage={selected?.profileImage}
        popupSize={popupSize}
        onClose={() => setSelected(null)}
        onDelete={() => {
          if (!selected) return;
          setFriends((prev) => prev.filter((f) => f.id !== selected.id));
        }}
      />
    </section>
  );
}
