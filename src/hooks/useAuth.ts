import { useCallback, useState } from "react";
import { storage } from "@/lib/storage";

const AUTH_KEY = "pock.auth";

export interface AuthUser {
  id: string;
  name: string;
  /** 가상 로그인 — Kakao API 미연동 */
  provider: "kakao-mock";
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(
    () => storage.get<AuthUser>(AUTH_KEY),
  );

  const loginMock = useCallback(() => {
    const next: AuthUser = {
      id: "user-001",
      name: "나",
      provider: "kakao-mock",
    };
    storage.set(AUTH_KEY, next);
    setUser(next);
    return next;
  }, []);

  const logout = useCallback(() => {
    storage.remove(AUTH_KEY);
    setUser(null);
  }, []);

  return {
    user,
    isLoggedIn: Boolean(user),
    loginMock,
    logout,
  };
}
