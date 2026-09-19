import {
  RECEIVED_LOCKED_SAMPLES,
  RECEIVED_OPEN_SAMPLES,
  SENT_LOCKED_SAMPLES,
  SENT_OPEN_SAMPLES,
} from "@/data/pock-mailbox-samples";

const SELF_NAME = "나";

/** 편지 샘플에 등장한 친구 이름(유니크) — 앞에 '나' */
export function getMailboxFriendNames(): string[] {
  const seen = new Set<string>();
  const names: string[] = [];

  const push = (name: string) => {
    if (seen.has(name)) return;
    seen.add(name);
    names.push(name);
  };

  push(SELF_NAME);

  for (const item of [
    ...RECEIVED_LOCKED_SAMPLES,
    ...RECEIVED_OPEN_SAMPLES,
    ...SENT_LOCKED_SAMPLES,
    ...SENT_OPEN_SAMPLES,
  ]) {
    push(item.target);
  }

  return names;
}

export { SELF_NAME as MAILBOX_SELF_NAME };
