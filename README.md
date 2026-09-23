# POCK

미래의 나에게 보내는 디지털 타임캡슐 웹앱.

**스택:** Vite + React 19 + TypeScript + React Router  
**스타일:** 기존 BEM CSS (CSS Modules / Tailwind 사용 안 함)  
**부가 라이브러리:** Swiper · GSAP (필요 시 `ref` / `useEffect`로만)  
**경로 별칭:** `@/` → `src/` (`vite.config.ts`)  
**디자인 레퍼런스:** React [`/guide`](http://localhost:5173/guide) (`src/pages/GuidePage.tsx`)

---

## 시작

Node.js 18+ 권장.

```bash
npm install
npm run dev
```

| 화면 | URL |
|------|-----|
| 랜딩 | [http://localhost:5173/](http://localhost:5173/) |
| 컴포넌트 가이드 | [http://localhost:5173/guide](http://localhost:5173/guide) |

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 타입체크 + 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |

배포(Netlify): SPA 리다이렉트는 `public/_redirects` · `netlify.toml` (`/* → /index.html` 200).

---

## 폴더 구조

```
pock/
├── index.html                 # Vite SPA 진입점 (유일하게 루트에서 서빙되는 HTML)
├── public/assets/             # ✅ 정적 자원 수정 위치 → URL /assets/...
│   ├── images/                # svg / webp 이미지 (여기만)
│   ├── icons/
│   ├── fonts/
│   └── videos/
├── src/
│   ├── main.tsx               # styles/index.css 진입
│   ├── App.tsx                # 라우트
│   ├── components/            # 가이드 export 이름과 동일 (Friend_list, Letter_write …)
│   ├── layouts/               # AppLayout (헤더 + main + 내비)
│   ├── pages/
│   │   ├── GuidePage.tsx
│   │   └── guide/             # GuideMarkup + 가이드 전용 인터랙티브 샘플
│   ├── hooks/
│   ├── data/                  # 목 데이터 (letter / friend / pock / coin / notice / terms …)
│   ├── lib/                   # storage · coin · store · pock · profile-setup · notice …
│   ├── types/
│   └── styles/                # ✅ CSS 수정 위치
│       ├── index.css          # 모든 CSS import (guide.css 포함)
│       ├── reset.css · fonts.css · common.css · variables.css
│       ├── components/
│       └── pages/
└── _tools/                    # 이미지 변환 등 보조 도구
```

루트에 `assets/` · `css/` · `js/` · `data/` · `pages/` · `legacy/` 를 다시 두지 않는다. 앱 소스는 `src/`, 정적은 `public/assets/`의 images·icons·fonts·videos만.

### 수정 위치 (두 곳만)

| 무엇을 | 어디 |
|--------|------|
| **CSS** | **`src/styles/`** 만 (`main.tsx` → `index.css`) |
| **이미지·아이콘·폰트·영상** | **`public/assets/`** 만 (URL은 `/assets/...`) |
| **svg / webp** | **`public/assets/images/`** 만 |

새 CSS 파일은 반드시 [`src/styles/index.css`](src/styles/index.css)에 `@import`를 추가한다.  
가이드 페이지 깨짐 방지: `pages/guide.css` import가 빠져 있지 않은지 확인한다.

### 라우트 · 인증

| 구분 | 경로 |
|------|------|
| 비로그인 가능 | `/`, `/guide`, `/login`, `/privacy`, `/terms` |
| 검수용 (로그인 없이 확인) | `/pock-received`, `/pock-sent`, `/coin`, `/mypage`, `/Friend_list`, `/pock-mailbox-friends` |
| 로그인 필요 (`RequireAuth`) | `/home`, `/alerts`, `/notice`, `/inquiry`, `/settings`, `/letter-store`, `/pock-send`, `/pock-detail/:id`, `/pock-hint/:id`, `/profile/nickname` · `character` · `outfit` · `background` · `complete` |

비로그인으로 보호 라우트 접근 시 `/login`으로 이동한다. (카카오는 **목업만**, 실연동 금지)

---

## 개발 규칙

### 1. 기술 스택

- **React(Vite) SPA** + TypeScript + React Router만 사용한다.
- import는 **`@/`** 별칭을 쓴다 (`@/components/Button` 등 → `src/`).
- **jQuery 금지.** Swiper·GSAP은 필요 시 `ref` / `useEffect`로만 연동한다.
- 빌드·번들링은 Vite를 쓴다. 레거시 정적 마크업 방식으로 되돌리지 않는다.
- 디자인 시스템 가이드는 **`/guide`** (`GuidePage` + `src/styles`).

### 2. 시안·카피 · 가이드

- 시안(`/guide`, `GuideMarkup`)에 없는 UI·카피·색을 **임의로 만들지 않는다.**
- 미확정 값은 코드/CSS 주석에 `임시값`이라고 적는다.
- UI 마크업·클래스의 원본은 **가이드 샘플**이다. 페이지를 새로 꾸밀 때도 guide BEM을 우선한다.
- **가이드에 적힌 컴포넌트 이름 = React export 이름.**  
  예: `Card`, `Friend_list`, `Letter_write`, `Button`, `SearchInput`, `PockSendCategory`, `SelectionBox` — 임의 개명 금지.
- **가이드 섹션 레이아웃:** 새 블록 class는 `*-system`, 직속 자식은 `*-system__title` + `*-system__board`만 둔다.  
  상세: [`.cursor/rules/guide-section.mdc`](.cursor/rules/guide-section.mdc)
- 인터랙티브·분리 가이드 샘플은 `src/pages/guide/`에 두고 `GuideMarkup`에서 import한다.  
  예: `GuideOnboardDemo`, `GuideNavigationDemo`, `GuideFriendListSample`, `GuideLetterWriteMoResize` / `TbResize`, `GuideSendCategorySection`, `GuideSendTabsSection`, `GuideSignUpStepGaugeSection`, `GuideSelectionBoxSection`, `GuideFriendCheckboxSection`
- 가이드 마크업은 [`src/pages/guide/GuideMarkup.tsx`](src/pages/guide/GuideMarkup.tsx)를 직접 수정한다.  
  섹션 레이아웃·export 이름 규칙을 맞춘다.

### 3. 스타일 (CSS)

- **BEM** (`block__element--modifier`). JSX에는 기존 `className`을 그대로 쓴다.
- **CSS Modules / Tailwind / styled-components로 재설계하지 않는다.**
- 클래스만 스타일한다. ID·태그 셀렉터로 화면 스타일을 주지 않는다.
- 길이는 **rem** (`1rem = 16px`). `html` font-size는 `100%` 유지. `62.5%` 트릭 금지.
- px 예외: `1px` 헤어라인, 미디어쿼리 경계값만.
- 색·간격·타이포는 [`src/styles/variables.css`](src/styles/variables.css) 토큰을 우선한다.
- **모바일 퍼스트.** 기본 = 모바일(360~768). 확장은 `min-width`만 사용한다.
  - 모바일: `~768`
  - 태블릿·데스크톱: `min-width: 769px` (콘텐츠 max 1024 가운데 정렬)
  - 데스크톱(1025~)은 태블릿과 **동일 레이아웃** — 양옆 배경·여백만 늘어난다. 데스크톱 전용 UI를 만들지 않는다.
- 뷰포트를 캔버스 너비로 고정하지 않고, 구간 안에서는 유동 폭으로 맞춘다.
- 일부 페이지 헤더 상단 여백만 Mo20 / Tb26 / Pc40처럼 시안 값으로 분기할 수 있다 (`min-width: 1025px`).
- `:focus-visible` 윤곽을 지우지 않는다.
- `prefers-reduced-motion: reduce`에서는 애니메이션·전환을 거의 끈다.

```css
/* ❌ BAD */
.card { width: 320px; }
@media (max-width: 767px) { .card { width: 100%; } }

/* ✅ GOOD */
.card { width: 100%; }
@media (min-width: 769px) { .card { width: 20rem; } }
```

### 4. 파일 배치

| 종류 | 위치 |
|------|------|
| 페이지 | `src/pages/` |
| 공통 UI | `src/components/` |
| 레이아웃 | `src/layouts/` |
| 훅 | `src/hooks/` |
| 데이터·상태 유틸 | `src/data/`, `src/lib/` |
| 공통 CSS | `src/styles/` |
| 컴포넌트 CSS | `src/styles/components/` |
| 페이지 CSS | `src/styles/pages/` (+ `index.css`에 import) |
| 가이드 전용 데모 | `src/pages/guide/` |
| 정적 파일 (이미지·아이콘·폰트·영상) | `public/assets/...` |
| svg / webp | `public/assets/images/...` |

공개 URL 경로는 **`/assets/...`** 를 쓴다. 루트 `assets/` 폴더는 두지 않는다.

### 5. React / 접근성

- 일반 앱 페이지는 `AppLayout`(헤더 + `main#main` + 하단 내비)을 재사용한다.
- `/guide`는 가이드 전용 레이아웃(`GuidePage`)을 쓴다. `AppLayout`에 넣지 않는다.
- 클릭 가능한 UI는 `button` / `Link` / `NavLink`를 쓴다. `div`+`onClick`만으로 만들지 않는다.
- 장식 이미지: `alt=""`. 정보 이미지: 의미 있는 대체 텍스트.
- 제목은 `h1`부터 건너뛰지 않는다.
- 인라인 스타일은 시안 대응·동적 배경 등 불가피할 때만 최소한으로 쓴다.

### 6. 데이터·상태

- 서버 API 없이 **localStorage + 목 데이터**로 동작한다 (`src/lib/storage.ts`).
- 목 데이터: `src/data/` (`letter-data`, `friend-data`, `pock-data`, `coin-data`, `notice-data`, `terms-data`, `privacy-data`, `alert-data`, `letter-paper`, `home-onboard` 등)
- 코인: `src/lib/coin.ts` / `useCoin` — 초기 데모 잔액 **1000** (`coin-data`). 상점 구매 시 `earn`으로 잔액 증가
- 편지지 스토어: `src/lib/store.ts` / `useLetterStore` · 보유·언락 `letter-owned`
- POCK 목록·전송: `src/lib/pock.ts` (샘플 + 사용자가 보낸 항목)
- 프로필 설정: `src/lib/profile-setup.ts` (닉네임·캐릭터·옷·배경)
- 공지 읽음: `src/lib/notice.ts` · 초성 힌트: `src/lib/hint.ts`
- 로그인: `useAuth` (카카오 **목업만**)
- 기타 훅: `useBreakpoint`, `useDesignScrollbar`, `useCountdownHms` (카드 타이머 `HH:MM:SS`)
- 공유 타입: `src/types` (`PockItem`, `LetterItem`, `LetterCardVariant`, `PopupVariant`, `LetterWritePayload` 등)

주요 키 예: `pock.auth`, `pock.coin`, `pock.ownedLetters`, `pock.userSent`, `pock.unlockedHints`, `pock.profileSetup`

### 7. 반응형 · 주요 컴포넌트 · 페이지

- `useBreakpoint()` → `"mo" | "tb" | "pc"` — 실제 분기는 **769px** (`mo` / `tb`). `pc`는 호환용이며 UI는 태블릿과 동일.
- Letter_write·Friend_list·Navigation 등은 브레이크포인트에 맞는 modifier 클래스를 붙인다 (`letter-write--mo`, `navigation--pad` 등).
- `/guide` Letter_write 구간은 점선 박스를 가상 뷰포트로 두고 너비를 드래그해 미리본다.
  - **Mo** (`GuideLetterWriteMoResize`): 360~768 · ~540까지 좌우 inset **20** · **541~** 부터 Tb 레이아웃·크기
  - **Tb** (`GuideLetterWriteTbResize`): 769~1024 · 좌우 inset **64** (안쪽 폭에 Tb가 맞춤)

| 컴포넌트 / 페이지 | 메모 |
|------|------|
| `Letter` | Mo `320×500` · Tb/Pc `400×575`. normal 7색 · special(Rainbow/Heart/Star/Stripe/Clover). 하단 오른쪽 날짜 = **받은 날짜** |
| `Letter_write` | 하단 날짜 = **작성일**. 기본 보낸이 `아빵이` · 기본 편지지 cream · paper stroke `#E65322`. Mo/Tb 유동 폭은 위 가이드 리사이즈 데모 기준 |
| `Card` | variant `progress` / `timer` / `unopened` / `open`. timer는 `LetterCardTimerText` + `useCountdownHms` |
| `Friend_list` | 컴포넌트(홈 등) · 관리 페이지 `/Friend_list`. 헤더·초대·목록. 팝업 폭 Mo 360 유지 |
| `FriendCheckbox` | Mo `20×20` · Tb/Pc `30×30` |
| `SelectionBox` | 선택 시 `#C7DDFF` + Navigation blue 3px stroke + `check-blue` |
| `PockSendCategory` | 배열 / 검색 / 친구 (`array` · `search` · `friends`) |
| `PockSendTabs` | 잠김 / 열림 (`locked` · `open`) |
| `SignUpStepGauge` | 기본 4단계. Mo용·Tb/Pc용 에셋 분리 (`public/assets/images/signup/`) |
| `Navigation` | 홈·보관함·보내기·전송함·설정. 디바이스 `mo` / `pad` (`GuideNavigationDemo`) |
| `Popup` | `info` · `warning` · `share` (+ dimmed). 온보딩 가이드는 `GuideOnboardDemo` |
| `SearchInput` | 기본 placeholder `검색어를 입력하세요.` · **포커스 시 숨김**, blur 시 복구 |
| `DimmedOverlay` | 팝업·모달 뒤 딤 |
| `SettingsPage` (`/settings`) | 코인·출석·프로필·친구목록·공지·약관·문의하기·로그아웃 등. 코인 잔액은 `useCoin` 연동 |
| `CoinPage` (`/coin`) | COIN SHOP 구매 시 팩 수량만큼 잔액 추가 (`50+5`→55, `100+10`→110) |
| `InquiryPage` (`/inquiry`) | 문의 폼 · 미작성 시 Rainbow/red/base 안내·stroke · 전송 후 입력 초기화 |
| `NoticePage` · `TermsPage` · `PrivacyPage` | 설정 하위. 헤더/문서 상단 여백 Mo20 / Tb26 / Pc40 |

### 8. 하지 말 것

- 루트 또는 `public/`에 **`guide.html`을 다시 두지 않는다.**  
  Vite가 `/guide`로 HTML을 우선 서빙하면 리다이렉트 스텁과 겹쳐 **무한 새로고침**이 난다. 가이드는 React 라우트 `/guide`만 사용한다.
- 루트 레거시 HTML·`legacy/` 폴더를 다시 두지 않기
- 루트 `assets/` · `css/` · `js/` · `data/` · `pages/` 또는 `public/assets/css`·`js`에 파일을 다시 두고 CSS·JS를 이중 관리하기
- Kakao 실연동·백엔드 API를 시안 작업과 한꺼번에 넣기
- ScrollSmoother 등 라이선스 플러그인을 임의 추가

---

## 참고

- 컴포넌트·컬러·타이포 시안: 개발 서버 **[/guide](http://localhost:5173/guide)**
- Cursor 규칙: [`.cursor/rules/project.mdc`](.cursor/rules/project.mdc) · [guide-section](.cursor/rules/guide-section.mdc) · [css](.cursor/rules/css.mdc)
