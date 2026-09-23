import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Friend_list } from "@/components/Friend_list";
import { Letter_write } from "@/components/Letter_write";
import { Popup } from "@/components/Popup";
import { SendLoading } from "@/components/SendLoading";
import { friendItems } from "@/data/friend-data";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import {
  clearDraftLeaveGuard,
  setDraftLeaveGuard,
} from "@/lib/leave-guard";
import { addSentPockFromPayload } from "@/lib/pock";
import type { LetterWritePayload, PockUser } from "@/types";

type PockSendLocationState = {
  friend?: PockUser;
};

/**
 * POCK 보내기 `/pock-send`
 * Navigation 「보내기」탭 — Letter_write 화면 중앙
 */
export function PockSendPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const breakpoint = useBreakpoint();
  const size = breakpoint === "mo" ? "mo" : "tb";
  const popupSize = size === "mo" ? "mo" : "tb";
  const [friend, setFriend] = useState<PockUser | null>(() => {
    const state = location.state as PockSendLocationState | null;
    return state?.friend ?? null;
  });
  const [friendOpen, setFriendOpen] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [leaveOpen, setLeaveOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [writeKey, setWriteKey] = useState(0);
  const pendingPayloadRef = useRef<LetterWritePayload | null>(null);
  const pendingLeaveRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    document.title = "POCK 작성 ㅣ POCK";
  }, []);

  useEffect(() => {
    const state = location.state as PockSendLocationState | null;
    if (!state?.friend) return;
    setFriend(state.friend);
    navigate(location.pathname, { replace: true, state: {} });
  }, [location.pathname, location.state, navigate]);

  useEffect(() => {
    setDraftLeaveGuard({
      blocked: dirty && !sending,
      onAsk: (proceed) => {
        pendingLeaveRef.current = proceed;
        setLeaveOpen(true);
      },
    });
    return () => clearDraftLeaveGuard();
  }, [dirty, sending]);

  const handleSend = (payload: LetterWritePayload) => {
    clearDraftLeaveGuard();
    setDirty(false);
    pendingPayloadRef.current = payload;
    setSending(true);
  };

  const handleSendComplete = useCallback(() => {
    const payload = pendingPayloadRef.current;
    pendingPayloadRef.current = null;
    if (!payload) return;
    addSentPockFromPayload(payload);
  }, []);

  const handleWriteMore = useCallback(() => {
    setSending(false);
    setFriend(null);
    setDirty(false);
    setWriteKey((key) => key + 1);
  }, []);

  const handleOpenSent = useCallback(() => {
    setSending(false);
    navigate("/pock-sent", { replace: true });
  }, [navigate]);

  const handleLeaveConfirm = () => {
    const proceed = pendingLeaveRef.current;
    pendingLeaveRef.current = null;
    setLeaveOpen(false);
    clearDraftLeaveGuard();
    setDirty(false);
    proceed?.();
  };

  const handleLeaveCancel = () => {
    pendingLeaveRef.current = null;
    setLeaveOpen(false);
  };

  return (
    <section className="pock-send" aria-label="POCK 작성">
      <div className="pock-send__stage">
        <Letter_write
          key={writeKey}
          size={size}
          friend={friend}
          onSend={handleSend}
          onSelectFriend={() => setFriendOpen(true)}
          onDirtyChange={setDirty}
        />
      </div>

      <Friend_list
        open={friendOpen}
        friends={friendItems}
        selectedId={friend?.id ?? null}
        size={size}
        mode="pick"
        onSelect={(selected) => {
          setFriend(selected);
          setFriendOpen(false);
        }}
        onConfirm={(selected) => {
          setFriend(selected);
          setFriendOpen(false);
        }}
        onClose={() => setFriendOpen(false)}
      />

      <Popup
        open={leaveOpen}
        variant="warning"
        size={popupSize}
        message={
          <>
            아직 작성 중인 POCK가 있어요!
            <br />
            지금 나가면 작성한 내용이 사라져요.
            <br />
            그래도 나갈까요?
          </>
        }
        confirmLabel="확인"
        cancelLabel="취소"
        onConfirm={handleLeaveConfirm}
        onCancel={handleLeaveCancel}
        onClose={handleLeaveCancel}
      />

      <SendLoading
        open={sending}
        onComplete={handleSendComplete}
        onWriteMore={handleWriteMore}
        onOpenSent={handleOpenSent}
      />
    </section>
  );
}
