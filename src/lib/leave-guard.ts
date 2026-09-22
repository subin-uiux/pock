/**
 * 작성 중 이탈 가드 — Navigation 등에서 동기 확인
 * (BrowserRouter라 useBlocker 대신 모듈 가드 사용)
 */

type LeaveAskHandler = (proceed: () => void) => void;

let blocked = false;
let onAsk: LeaveAskHandler | null = null;

export function setDraftLeaveGuard(options: {
  blocked: boolean;
  onAsk: LeaveAskHandler | null;
}) {
  blocked = options.blocked;
  onAsk = options.onAsk;
}

export function clearDraftLeaveGuard() {
  blocked = false;
  onAsk = null;
}

/** true면 기본 이동을 막고 askLeave로 확인해야 함 */
export function shouldBlockLeave() {
  return blocked && onAsk !== null;
}

export function askLeave(proceed: () => void) {
  if (!blocked || !onAsk) {
    proceed();
    return;
  }
  onAsk(proceed);
}
