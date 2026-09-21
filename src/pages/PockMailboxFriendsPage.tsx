import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { FriendCheckbox } from "@/components/FriendCheckbox";
import { SearchInput } from "@/components/SearchInput";
import {
  getMailboxFriendFilter,
  setMailboxFriendFilter,
} from "@/lib/mailbox-friend-filter";
import {
  getMailboxFriendNames,
  MAILBOX_SELF_NAME,
} from "@/lib/mailbox-friends";
import type { LetterCardMailbox } from "@/types";

function parseMailbox(raw: string | null): LetterCardMailbox {
  return raw === "sent" ? "sent" : "received";
}

export function PockMailboxFriendsPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const mailbox = parseMailbox(params.get("mailbox"));
  const allNames = useMemo(() => getMailboxFriendNames(), []);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>(() =>
    getMailboxFriendFilter(mailbox),
  );

  useEffect(() => {
    document.title = "친구 검색 ㅣ POCK";
  }, []);

  useEffect(() => {
    setSelected(getMailboxFriendFilter(mailbox));
  }, [mailbox]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allNames;
    return allNames.filter((name) => name.toLowerCase().includes(q));
  }, [allNames, query]);

  const returnPath =
    mailbox === "sent" ? "/pock-sent" : "/pock-received";

  const goBack = () => {
    navigate(returnPath);
  };

  const toggleName = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  const handleApply = () => {
    setMailboxFriendFilter(mailbox, selected);
    navigate(returnPath);
  };

  return (
    <div className="mailbox-friends">
      <h1 className="visually-hidden">친구 검색</h1>
      <button
        type="button"
        className="mailbox-friends__back"
        onClick={goBack}
      >
        <img
          className="mailbox-friends__back-icon"
          src="/assets/icons/left-arrow.svg"
          alt=""
          width={24}
          height={24}
        />
        <span className="mailbox-friends__back-text">뒤로가기</span>
      </button>

      <div className="mailbox-friends__search">
        <SearchInput
          id="mailbox-friend-search"
          label="친구 검색"
          placeholder="친구 검색"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <ul className="mailbox-friends__list">
        {filtered.map((name, index) => {
          const checked = selected.includes(name);
          const isSelf = name === MAILBOX_SELF_NAME;
          const prev = index > 0 ? filtered[index - 1] : null;
          const friendSpaced =
            !isSelf && prev !== null && prev !== MAILBOX_SELF_NAME;

          return (
            <li
              className={
                friendSpaced
                  ? "mailbox-friends__item mailbox-friends__item--spaced"
                  : "mailbox-friends__item"
              }
              key={name}
            >
              <button
                type="button"
                className="mailbox-friends__row"
                onClick={() => toggleName(name)}
              >
                <span
                  className="mailbox-friends__avatar"
                  aria-hidden="true"
                />
                <span className="mailbox-friends__name">{name}</span>
                <FriendCheckbox size="mo" checked={checked} />
              </button>
              {isSelf ? (
                <span
                  className="mailbox-friends__rule"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="mailbox-friends__footer">
        <Button variant="push" block onClick={handleApply}>
          적용하기
        </Button>
      </div>
    </div>
  );
}
