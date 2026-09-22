import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RequireAuth } from "@/components/RequireAuth";
import { AppLayout } from "@/layouts/AppLayout";
import { LandingPage } from "@/pages/LandingPage";
import { LoginPage } from "@/pages/LoginPage";
import { NicknameSetupPage } from "@/pages/NicknameSetupPage";
import { CharacterSetupPage } from "@/pages/CharacterSetupPage";
import { OutfitSetupPage } from "@/pages/OutfitSetupPage";
import { BackgroundSetupPage } from "@/pages/BackgroundSetupPage";
import { ProfileCompletePage } from "@/pages/ProfileCompletePage";
import { GuidePage } from "@/pages/GuidePage";
import { HomePage } from "@/pages/HomePage";
import { AlertPage } from "@/pages/AlertPage";
import { NoticePage } from "@/pages/NoticePage";
import { SettingsPage } from "@/pages/SettingsPage";
import { Friend_listPage } from "@/pages/Friend_listPage";
import { MyPage } from "@/pages/MyPage";
import { CoinPage } from "@/pages/CoinPage";
import { LetterStorePage } from "@/pages/LetterStorePage";
import { PockReceivedPage } from "@/pages/PockReceivedPage";
import { PockSentPage } from "@/pages/PockSentPage";
import { PockSendPage } from "@/pages/PockSendPage";
import { PockMailboxFriendsPage } from "@/pages/PockMailboxFriendsPage";
import { PockHintPage } from "@/pages/PockHintPage";
import { PockDetailPage } from "@/pages/PockDetailPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guide" element={<GuidePage />} />

        <Route
          element={
            <AppLayout
              pageClassName="page--login"
              showNav={false}
            />
          }
        >
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<AppLayout pageClassName="page--privacy" />}>
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>

        <Route element={<AppLayout pageClassName="page--terms" />}>
          <Route path="/terms" element={<TermsPage />} />
        </Route>

        {/* 검수용 — 로그인 없이 확인 */}
        <Route element={<AppLayout pageClassName="page--pock-received" />}>
          <Route path="/pock-received" element={<PockReceivedPage />} />
        </Route>

        <Route element={<AppLayout pageClassName="page--pock-sent" />}>
          <Route path="/pock-sent" element={<PockSentPage />} />
        </Route>

        <Route element={<AppLayout pageClassName="page--coin" />}>
          <Route path="/coin" element={<CoinPage />} />
        </Route>

        <Route element={<AppLayout pageClassName="page--mypage" />}>
          <Route path="/mypage" element={<MyPage />} />
        </Route>

        <Route element={<AppLayout pageClassName="page--friend-list" />}>
          <Route path="/Friend_list" element={<Friend_listPage />} />
        </Route>

        <Route
          element={
            <AppLayout
              pageClassName="page--pock-mailbox-friends"
              showNav={false}
            />
          }
        >
          <Route
            path="/pock-mailbox-friends"
            element={<PockMailboxFriendsPage />}
          />
        </Route>

        <Route element={<RequireAuth />}>
          <Route
            element={
              <AppLayout
                pageClassName="page--nickname-setup"
                showNav={false}
              />
            }
          >
            <Route
              path="/profile/nickname"
              element={<NicknameSetupPage />}
            />
          </Route>

          <Route
            element={
              <AppLayout
                pageClassName="page--character-setup"
                showNav={false}
              />
            }
          >
            <Route
              path="/profile/character"
              element={<CharacterSetupPage />}
            />
          </Route>

          <Route
            element={
              <AppLayout
                pageClassName="page--outfit-setup"
                showNav={false}
              />
            }
          >
            <Route path="/profile/outfit" element={<OutfitSetupPage />} />
          </Route>

          <Route
            element={
              <AppLayout
                pageClassName="page--background-setup"
                showNav={false}
              />
            }
          >
            <Route
              path="/profile/background"
              element={<BackgroundSetupPage />}
            />
          </Route>

          <Route
            element={
              <AppLayout
                pageClassName="page--profile-complete"
                showNav={false}
              />
            }
          >
            <Route
              path="/profile/complete"
              element={<ProfileCompletePage />}
            />
          </Route>

          <Route element={<AppLayout pageClassName="page--home" />}>
            <Route path="/home" element={<HomePage />} />
          </Route>

          <Route
            element={
              <AppLayout pageClassName="page--alert" showNav={false} />
            }
          >
            <Route path="/alerts" element={<AlertPage />} />
          </Route>

          <Route element={<AppLayout pageClassName="page--notice" />}>
            <Route path="/notice" element={<NoticePage />} />
          </Route>

          <Route element={<AppLayout pageClassName="page--settings" />}>
            <Route path="/settings" element={<SettingsPage />} />
          </Route>

          <Route element={<AppLayout pageClassName="page--letter-store" />}>
            <Route path="/letter-store" element={<LetterStorePage />} />
          </Route>

          <Route element={<AppLayout pageClassName="page--pock-send" />}>
            <Route path="/pock-send" element={<PockSendPage />} />
          </Route>

          <Route element={<AppLayout pageClassName="page--pock-hint" />}>
            <Route path="/pock-hint/:id" element={<PockHintPage />} />
          </Route>

          <Route element={<AppLayout pageClassName="page--pock-detail" />}>
            <Route path="/pock-detail/:id" element={<PockDetailPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
