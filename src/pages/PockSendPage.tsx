import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FriendWindow } from "@/components/FriendWindow";
import { LetterWrite } from "@/components/LetterWrite";
import { Popup } from "@/components/Popup";
import { friendItems } from "@/data/friend-data";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useCoin } from "@/hooks/useCoin";
import { spendCoin } from "@/lib/coin";
import { addSentPockFromPayload } from "@/lib/pock";
import type { LetterWritePayload, PockUser } from "@/types";

const SEND_COST = 10;

export function PockSendPage() {
  const navigate = useNavigate();
  const size = useBreakpoint();
  const { refresh } = useCoin();
  const [friendOpen, setFriendOpen] = useState(false);
  const [friend, setFriend] = useState<PockUser | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [sentOk, setSentOk] = useState(false);
  const [sentId, setSentId] = useState<string | null>(null);

  const handleSend = (payload: LetterWritePayload) => {
    if (!payload.friend) {
      setPopupMessage("받을 친구를 선택해주세요.");
      setSentOk(false);
      setPopupOpen(true);
      return;
    }
    if (!payload.title.trim() || !payload.body.trim()) {
      setPopupMessage("제목과 본문을 입력해주세요.");
      setSentOk(false);
      setPopupOpen(true);
      return;
    }
    if (!payload.date.trim()) {
      setPopupMessage("개봉일을 입력해주세요.");
      setSentOk(false);
      setPopupOpen(true);
      return;
    }

    const spent = spendCoin(SEND_COST, "POCK 보내기");
    if (!spent) {
      setPopupMessage("코인이 부족합니다. 출석 체크로 코인을 모아보세요.");
      setSentOk(false);
      setPopupOpen(true);
      return;
    }
    refresh();

    const item = addSentPockFromPayload(payload);
    if (!item) {
      setPopupMessage("전송에 실패했습니다.");
      setSentOk(false);
      setPopupOpen(true);
      return;
    }

    setSentId(item.id);
    setPopupMessage(
      `${payload.friend.name}님에게 POCK을 보냈어요. (${SEND_COST} coin 사용)`,
    );
    setSentOk(true);
    setPopupOpen(true);
  };

  return (
    <section className="pock-send" aria-labelledby="send-title">
      <h1 className="visually-hidden" id="send-title">
        POCK 보내기
      </h1>
      <div className="pock-send__stage">
        <LetterWrite
          size={size === "pc" ? "pc" : size === "tb" ? "tb" : "mo"}
          coinCost={SEND_COST}
          friend={friend}
          onSend={handleSend}
          onSelectFriend={() => setFriendOpen(true)}
        />
      </div>

      <FriendWindow
        open={friendOpen}
        size={size === "pc" ? "pc" : size === "tb" ? "tb" : "mo"}
        friends={friendItems}
        selectedId={friend?.id}
        onClose={() => setFriendOpen(false)}
        onSelect={(f) => {
          setFriend(f);
          setFriendOpen(false);
        }}
      />

      <Popup
        open={popupOpen}
        variant="info"
        message={popupMessage}
        onClose={() => setPopupOpen(false)}
        onConfirm={() => {
          setPopupOpen(false);
          if (sentOk) {
            navigate(sentId ? `/pock-detail/${sentId}` : "/pock-sent");
          }
        }}
      />
    </section>
  );
}
