import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Friend_list } from "@/components/Friend_list";
import { FriendProfilePopup } from "@/components/FriendProfilePopup";
import { friendItems } from "@/data/friend-data";
import type { PockUser } from "@/types";

/**
 * 친구 목록 관리 `/Friend_list`
 * 설정 → 친구 목록 관리하기 · 홈 친구목록 → 친구 관리
 */
export function Friend_listPage() {
  const navigate = useNavigate();

  const [friends] = useState<PockUser[]>(
    () => [...friendItems]
  );

  const [selected, setSelected] = useState<PockUser | null>(null);

  useEffect(() => {
    document.title = "친구 목록 관리 ㅣ POCK";
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/settings", { replace: true });
  };

  return (
    <section
      className="friend-list-page"
      aria-label="친구 목록 관리"
    >
      <Friend_list
        open
        friends={friends}
        selectedId={selected?.id ?? null}
        showManage={false}
        onSelect={(friend: PockUser) => {
          setSelected((prev) =>
            prev?.id === friend.id ? null : friend
          );
        }}
        onClose={goBack}
      />

      <FriendProfilePopup
        open={selected !== null}
        name={selected?.name ?? ""}
        friendId={selected?.id}
        profileImage={selected?.profileImage}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}