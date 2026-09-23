import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { FriendCheckbox } from "@/components/FriendCheckbox";
import { SearchInput } from "@/components/SearchInput";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import {
  getMailboxFriendFilter,
  setMailboxFriendFilter,
} from "@/lib/mailbox-friend-filter";
import {
  getMailboxFriends,
  MAILBOX_SELF_NAME,
  type MailboxFriendEntry,
} from "@/lib/mailbox-friends";
import {
  CHARACTER_BASE,
  getOutfitById,
  getProfileSetup,
  type CharacterId,
  type OutfitId,
} from "@/lib/profile-setup";
import type { LetterCardMailbox } from "@/types";

function parseMailbox(raw: string | null): LetterCardMailbox {
  return raw === "sent" ? "sent" : "received";
}

function avatarClass(character: CharacterId | null | undefined): string {
  const gender = character === "boy" ? "male" : "female";
  return gender === "male"
    ? "friend-list-page__avatar friend-list-page__avatar--male"
    : "friend-list-page__avatar friend-list-page__avatar--female";
}

function FriendAvatar({
  character,
  outfitId,
}: {
  character: CharacterId | null | undefined;
  outfitId: OutfitId | null | undefined;
}) {
  const wear =
    character && outfitId ? getOutfitById(character, outfitId) : null;

  return (
    <span className={avatarClass(character)} aria-hidden="true">
      {character ? (
        <span className="friend-list-page__avatar-figure">
          <img
            className="friend-list-page__avatar-base"
            src={CHARACTER_BASE.src[character]}
            alt=""
            width={CHARACTER_BASE.width}
            height={CHARACTER_BASE.height}
          />
          {wear ? (
            <img
              className={
                wear.fullFrame
                  ? "friend-list-page__avatar-wear friend-list-page__avatar-wear--full"
                  : "friend-list-page__avatar-wear"
              }
              src={wear.src}
              alt=""
              width={wear.width}
              height={wear.height}
            />
          ) : null}
        </span>
      ) : (
        <img
          className="friend-list-page__avatar-img"
          src="/assets/images/setting/girl.svg"
          alt=""
          width={50}
          height={50}
        />
      )}
    </span>
  );
}

export function PockMailboxFriendsPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const mailbox = parseMailbox(params.get("mailbox"));
  const breakpoint = useBreakpoint();
  const isMo = breakpoint === "mo";
  const checkboxSize = isMo ? "mo" : "tb";
  const saved = useMemo(() => getProfileSetup(), []);
  const allFriends = useMemo(() => getMailboxFriends(), []);
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
    if (!q) return allFriends;
    return allFriends.filter((friend) =>
      friend.name.toLowerCase().includes(q),
    );
  }, [allFriends, query]);

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

  const resolveAvatar = (friend: MailboxFriendEntry) => {
    if (friend.isSelf) {
      return {
        character: saved.character,
        outfitId: saved.outfit,
      };
    }
    return {
      character: friend.character,
      outfitId: friend.outfit,
    };
  };

  return (
    <div className="mailbox-friends">
      <div className="mailbox-friends__inner">
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
            className={isMo ? "search-input--mo" : "search-input--wide"}
            label="친구 검색"
            placeholder="친구 검색"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <ul className="mailbox-friends__list">
          {filtered.map((friend, index) => {
            const checked = selected.includes(friend.name);
            const isSelf = friend.isSelf;
            const prev = index > 0 ? filtered[index - 1] : null;
            const friendSpaced =
              !isSelf && prev !== null && !prev.isSelf;
            const avatar = resolveAvatar(friend);

            return (
              <li
                className={
                  friendSpaced
                    ? "mailbox-friends__item mailbox-friends__item--spaced"
                    : "mailbox-friends__item"
                }
                key={friend.name}
              >
                <button
                  type="button"
                  className="mailbox-friends__row"
                  onClick={() => toggleName(friend.name)}
                >
                  <FriendAvatar
                    character={avatar.character}
                    outfitId={avatar.outfitId}
                  />
                  <span className="mailbox-friends__name">{friend.name}</span>
                  <FriendCheckbox size={checkboxSize} checked={checked} />
                </button>
                {isSelf || friend.name === MAILBOX_SELF_NAME ? (
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
          <Button
            variant="push"
            block
            className="mailbox-friends__apply"
            onClick={handleApply}
          >
            적용하기
          </Button>
        </div>
      </div>
    </div>
  );
}
