import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/Card";
import {
  MailboxLetterLayer,
  type MailboxLetterMode,
} from "@/components/MailboxLetterLayer";
import { MailboxSearchPanel } from "@/components/MailboxSearchPanel";
import { MailboxSortMenu } from "@/components/MailboxSortMenu";
import {
  PockSendCategory,
  type PockSendCategoryId,
} from "@/components/PockSendCategory";
import {
  PockSendTabs,
  type PockSendTabId,
} from "@/components/PockSendTabs";
import { Popup } from "@/components/Popup";
import {
  RECEIVED_LOCKED_SAMPLES,
  RECEIVED_OPEN_SAMPLES,
  SENT_LOCKED_SAMPLES,
  SENT_OPEN_SAMPLES,
  type MailboxCardSample,
} from "@/data/pock-mailbox-samples";
import { useCoin } from "@/hooks/useCoin";
import { HINT_COST, isHintPaid, markHintPaid } from "@/lib/hint";
import {
  clearMailboxFriendFilter,
  getMailboxFriendFilter,
} from "@/lib/mailbox-friend-filter";
import {
  defaultMailboxSort,
  RECEIVED_SORT_OPTIONS,
  SENT_SORT_OPTIONS,
  sortMailboxCards,
  type MailboxSortId,
} from "@/lib/mailbox-sort";
import type { LetterCardMailbox } from "@/types";

interface PockMailboxProps {
  mailbox: LetterCardMailbox;
}

interface LetterViewer {
  sample: MailboxCardSample;
  mode: MailboxLetterMode;
}

type HintDialog = "purchase" | "insufficient" | null;

export function PockMailbox({ mailbox }: PockMailboxProps) {
  const navigate = useNavigate();
  const { balance, spend } = useCoin();
  const [tab, setTab] = useState<PockSendTabId>("locked");
  const [category, setCategory] = useState<PockSendCategoryId>("array");
  const [sortOpen, setSortOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [friendFilterNames, setFriendFilterNames] = useState<string[]>(() =>
    getMailboxFriendFilter(mailbox),
  );
  const [sortId, setSortId] = useState<MailboxSortId>(() =>
    defaultMailboxSort(mailbox),
  );
  const [viewer, setViewer] = useState<LetterViewer | null>(null);
  const [hintDialog, setHintDialog] = useState<HintDialog>(null);
  const [pendingHint, setPendingHint] = useState<MailboxCardSample | null>(
    null,
  );
  /** localStorage 결제 반영용 — markHintPaid 후 리렌더 */
  const [hintPaidTick, setHintPaidTick] = useState(0);
  const isReceived = mailbox === "received";
  const title = isReceived ? "보관함" : "전송함";
  const sortOptions = isReceived
    ? RECEIVED_SORT_OPTIONS
    : SENT_SORT_OPTIONS;

  useEffect(() => {
    setFriendFilterNames(getMailboxFriendFilter(mailbox));
  }, [mailbox]);

  const cards = useMemo(() => {
    void hintPaidTick;
    const list = isReceived
      ? tab === "locked"
        ? RECEIVED_LOCKED_SAMPLES
        : RECEIVED_OPEN_SAMPLES
      : tab === "locked"
        ? SENT_LOCKED_SAMPLES
        : SENT_OPEN_SAMPLES;

    const withPaid = list.map((item) => ({
      ...item,
      hintPaid: isHintPaid(item.id, item.hintPaid),
    }));

    const sorted = sortMailboxCards(withPaid, mailbox, sortId);
    const byFriend =
      friendFilterNames.length > 0
        ? sorted.filter((item) => friendFilterNames.includes(item.target))
        : sorted;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return byFriend;

    return byFriend.filter((item) => {
      const title = (item.title ?? "").toLowerCase();
      const friend = item.target.toLowerCase();
      return title.includes(q) || friend.includes(q);
    });
  }, [
    isReceived,
    tab,
    hintPaidTick,
    mailbox,
    sortId,
    searchQuery,
    friendFilterNames,
  ]);

  const closeSortMenu = useCallback(() => {
    setSortOpen(false);
  }, []);

  const closeSearchPanel = useCallback(() => {
    setSearchOpen(false);
  }, []);

  const handleFiltersReset = useCallback(() => {
    setSearchQuery("");
    setFriendFilterNames([]);
    clearMailboxFriendFilter(mailbox);
    setSearchOpen(false);
    setSortOpen(false);
    setCategory("array");
  }, [mailbox]);

  const categoryValue: PockSendCategoryId | null =
    category === "array"
      ? sortOpen
        ? "array"
        : null
      : category === "search"
        ? searchOpen
          ? "search"
          : null
        : null;

  const handleCategoryChange = (id: PockSendCategoryId) => {
    if (id === "array") {
      setSearchOpen(false);
      setCategory("array");
      setSortOpen((open) => !open);
      return;
    }
    if (id === "search") {
      setSortOpen(false);
      setCategory("search");
      setSearchOpen((open) => !open);
      return;
    }
    if (id === "friends") {
      setSortOpen(false);
      setSearchOpen(false);
      setCategory("array");
      navigate(`/pock-mailbox-friends?mailbox=${mailbox}`);
      return;
    }
    setSortOpen(false);
    setSearchOpen(false);
    setCategory(id);
  };

  const handleSortSelect = (id: MailboxSortId) => {
    setSortId(id);
    setSortOpen(false);
  };

  const handleSearchApply = (query: string) => {
    setSearchQuery(query);
    setSearchOpen(false);
  };

  const openFull = (sample: MailboxCardSample) => {
    setViewer({ sample, mode: "full" });
  };

  const openChoseong = (sample: MailboxCardSample) => {
    setViewer({ sample, mode: "choseong" });
  };

  const closeHintDialog = () => {
    setHintDialog(null);
    setPendingHint(null);
  };

  const handleHintClick = (sample: MailboxCardSample) => {
    if (isHintPaid(sample.id, sample.hintPaid)) {
      openChoseong(sample);
      return;
    }
    setPendingHint(sample);
    setHintDialog("purchase");
  };

  const handlePurchaseConfirm = () => {
    if (!pendingHint) return;

    if (balance < HINT_COST) {
      setHintDialog("insufficient");
      return;
    }

    const ok = spend(HINT_COST, "초성 보기 구매");
    if (!ok) {
      setHintDialog("insufficient");
      return;
    }

    markHintPaid(pendingHint.id);
    setHintPaidTick((n) => n + 1);
    const sample = pendingHint;
    closeHintDialog();
    openChoseong(sample);
  };

  const handleInsufficientConfirm = () => {
    closeHintDialog();
    navigate("/coin");
  };

  return (
    <div className="pock-mailbox">
      <h1 className="visually-hidden">{title}</h1>
      <div className="pock-mailbox__toolbar">
        <PockSendTabs
          className="pock-mailbox__tabs"
          size="mo"
          value={tab}
          onChange={(next) => {
            setTab(next);
            setSortOpen(false);
            setSearchOpen(false);
          }}
        />
        <div className="pock-mailbox__category">
          <PockSendCategory
            size="mo"
            value={categoryValue}
            onChange={handleCategoryChange}
          />
          <MailboxSortMenu
            open={sortOpen}
            options={sortOptions}
            value={sortId}
            onSelect={handleSortSelect}
            onClose={closeSortMenu}
          />
        </div>
      </div>
      <div className="pock-mailbox__board">
        <div className="pock-mailbox__meta">
          <p className="pock-mailbox__count">총 {cards.length}개</p>
          <button
            type="button"
            className="pock-mailbox__refresh"
            aria-label="검색·필터 초기화"
            onClick={handleFiltersReset}
          >
            <img
              className="pock-mailbox__refresh-icon"
              src="/assets/icons/refresh-solid.svg"
              alt=""
              width={18}
              height={18}
            />
          </button>
        </div>
        <ul className="pock-mailbox__cards">
          {cards.map((item) => (
            <li className="pock-mailbox__item" key={item.id}>
              <Card
                mailbox={mailbox}
                variant={item.variant}
                size="mo"
                target={item.target}
                title={item.title}
                sendDate={item.sendDate}
                openDate={item.openDate}
                timer={item.timer}
                hintPaid={item.hintPaid}
                theme={item.theme}
                imageSrc={item.imageSrc}
                sender={isReceived ? item.target : undefined}
                receiver={isReceived ? undefined : item.target}
                onMoreClick={
                  mailbox === "sent" || item.variant === "open"
                    ? () => openFull(item)
                    : undefined
                }
                onHintClick={
                  isReceived && tab === "locked"
                    ? () => handleHintClick(item)
                    : undefined
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <MailboxSearchPanel
        open={searchOpen}
        value={searchQuery}
        onApply={handleSearchApply}
        onClose={closeSearchPanel}
      />
      <MailboxLetterLayer
        open={Boolean(viewer)}
        mode={viewer?.mode ?? "full"}
        mailbox={mailbox}
        sample={viewer?.sample ?? null}
        onClose={() => setViewer(null)}
      />
      <Popup
        open={hintDialog === "purchase"}
        variant="info"
        message={
          <>
            코인을 사용하여 초성보기를
            <br />
            구매하시겠습니까?
          </>
        }
        cancelLabel="취소"
        confirmLabel="확인"
        onCancel={closeHintDialog}
        onClose={closeHintDialog}
        onConfirm={handlePurchaseConfirm}
      />
      <Popup
        open={hintDialog === "insufficient"}
        variant="warning"
        message={
          <>
            코인이 부족합니다.
            <br />
            구매하러 가시겠습니까?
          </>
        }
        cancelLabel="취소"
        confirmLabel="확인"
        onCancel={closeHintDialog}
        onClose={closeHintDialog}
        onConfirm={handleInsufficientConfirm}
      />
    </div>
  );
}
