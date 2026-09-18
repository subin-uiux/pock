# POCK

미래의 나에게 보내는 디지털 타임캡슐 웹앱.

**스택:** Vite + React + TypeScript + React Router  
**스타일:** 기존 BEM CSS (CSS Modules / Tailwind 사용 안 함)  
**디자인 레퍼런스:** React [`/guide`](http://localhost:5173/guide) (`src/pages/GuidePage.tsx`)  
**정적 원본:** `legacy/pages/guide.html` (실행·서빙하지 않음)

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
│   ├── layouts/
│   ├── pages/
│   │   ├── GuidePage.tsx
│   │   └── guide/             # GuideMarkup + 가이드 전용 인터랙티브 샘플
│   ├── hooks/
│   ├── data/
│   ├── lib/
│   ├── types/
│   └── styles/                # ✅ CSS 수정 위치
│       ├── index.css          # 모든 CSS import (guide.css 포함)
│       ├── variables.css
│       ├── components/
│       └── pages/
├── _tools/
│   └── convert-guide.mjs      # legacy guide.html → GuideMarkup 재생성
└── legacy/                    # 전환 전 HTML/css/js/data (실행·배포 금지)
    └── pages/guide.html
```

### 수정 위치 (두 곳만)

| 무엇을 | 어디 |
|--------|------|
| **CSS** | **`src/styles/`** 만 (`main.tsx` → `index.css`) |
| **이미지·아이콘·폰트·영상** | **`public/assets/`** 만 (URL은 `/assets/...`) |
| **svg / webp** | **`public/assets/images/`** 만 |

`legacy/`는 참고용 스냅샷이다. 앱 CSS·에셋을 여기서 고치지 않는다.

새 CSS 파일은 반드시 [`src/styles/index.css`](src/styles/index.css)에 `@import`를 추가한다.  
가이드 페이지 깨짐 방지: `pages/guide.css` import가 빠져 있지 않은지 확인한다.

### 라우트 · 인증

| 구분 | 경로 |
|------|------|
| 비로그인 가능 | `/`, `/guide`, `/login`, `/privacy`, `/terms` |
| 로그인 필요 (`RequireAuth`) | `/home`, `/notice`, `/settings`, `/mypage`, `/coin`, `/letter-store`, `/pock-received`, `/pock-sent`, `/pock-send`, `/pock-detail/:id`, `/pock-hint/:id` |

비로그인으로 보호 라우트 접근 시 `/login`으로 이동한다. (카카오는 **목업만**, 실연동 금지)

---

## 개발 규칙

### 1. 기술 스택

- **React(Vite) SPA** + TypeScript + React Router만 사용한다.
- **jQuery 금지.** Swiper·GSAP은 필요 시 `ref` / `useEffect`로만 연동한다.
- 빌드·번들링은 Vite를 쓴다. 레거시 정적 마크업 방식으로 되돌리지 않는다.
- 디자인 시스템 가이드는 **`/guide`** (`GuidePage` + `src/styles`).

### 2. 시안·카피 · 가이드

- 시안(`/guide`, `GuideMarkup`)에 없는 UI·카피·색을 **임의로 만들지 않는다.**
- 미확정 값은 코드/CSS 주석에 `임시값`이라고 적는다.
- UI 마크업·클래스의 원본은 **가이드 샘플**이다. 페이지를 새로 꾸밀 때도 guide BEM을 우선한다.
- **가이드에 적힌 컴포넌트 이름 = React export 이름.**  
  예: `Card`, `Friend_list`, `Letter_write`, `Button`, `SearchInput` — 임의 개명 금지.
- **가이드 섹션 레이아웃:** 새 블록 class는 `*-system`, 직속 자식은 `*-system__title` + `*-system__board`만 둔다.  
  상세: [`.cursor/rules/guide-section.mdc`](.cursor/rules/guide-section.mdc)
- 인터랙티브 가이드 샘플(온보딩·Friend_list 스크롤 등)은 `src/pages/guide/`에 두고 `GuideMarkup`에서 import한다.
- 가이드 마크업 대량 갱신: `_tools/convert-guide.mjs`로 `legacy/pages/guide.html` → `src/pages/guide/GuideMarkup.tsx` 재생성 후 검수한다.  
  변환 후에도 위 섹션 레이아웃·export 이름 규칙을 맞춘다.

### 3. 스타일 (CSS)

- **BEM** (`block__element--modifier`). JSX에는 기존 `className`을 그대로 쓴다.
- **CSS Modules / Tailwind / styled-components로 재설계하지 않는다.**
- 클래스만 스타일한다. ID·태그 셀렉터로 화면 스타일을 주지 않는다.
- 길이는 **rem** (`1rem = 16px`). `html` font-size는 `100%` 유지. `62.5%` 트릭 금지.
- px 예외: `1px` 헤어라인, 미디어쿼리 경계값만.
- 색·간격·타이포는 [`src/styles/variables.css`](src/styles/variables.css) 토큰을 우선한다.
- **모바일 퍼스트.** 기본 = 390 캔버스. 확장은 `min-width`만 사용한다.
  - 태블릿: `1024px`
  - 데스크톱: `1920px`
- 390 / 1024 / 1920은 **디자인 캔버스**다. 뷰포트를 그 너비로 고정하지 않고, 구간 안에서는 유동 폭으로 맞춘다.
- `:focus-visible` 윤곽을 지우지 않는다.
- `prefers-reduced-motion: reduce`에서는 애니메이션·전환을 거의 끈다.

```css
/* ❌ BAD */
.card { width: 320px; }
@media (max-width: 767px) { .card { width: 100%; } }

/* ✅ GOOD */
.card { width: 100%; }
@media (min-width: 1024px) { .card { width: 20rem; } }
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
- 코인: `src/lib/coin.ts` / `useCoin`
- 편지지 스토어: `src/lib/store.ts` / `useLetterStore`
- POCK 목록·전송: `src/lib/pock.ts` (샘플 + 사용자가 보낸 항목)
- 로그인: `useAuth` (카카오 **목업만**)

주요 키 예: `pock.auth`, `pock.coin`, `pock.ownedLetters`, `pock.userSent`, `pock.unlockedHints`

### 7. 반응형 · 주요 컴포넌트

- `useBreakpoint()` → `"mo" | "tb" | "pc"` (1024 / 1920 기준).
- Letter_write·Friend_list·Navigation 등은 브레이크포인트에 맞는 modifier 클래스를 붙인다 (`letter-write--mo`, `navigation--pad` 등).

| 컴포넌트 | 메모 |
|----------|------|
| `Letter` | 편지지 하단 오른쪽 날짜 = **받은 날짜** (`aria-label="받은 날짜"`) |
| `Letter_write` | 하단 날짜 = **작성일** (읽기 전용 `time`) |
| `Friend_list` | 헤더·「친구 관리」고정. 연한 파란 pane 안 목록만 세로 스크롤. 디자인 스크롤바(색·두께·배치) 유지 + thumb 연동 (`PockWindowScrollbar` / `useDesignScrollbar`) |
| `SearchInput` | 기본 placeholder `검색어를 입력하세요.` · **포커스 시 숨김**, blur 시 복구 |
| Onboarding Guide Popup | `/guide` 데모 `GuideOnboardDemo` — 점 8개, 마지막 단계에서 버튼 문구 **완료** |

### 8. 하지 말 것

- 루트 또는 `public/`에 **`guide.html`을 다시 두지 않는다.**  
  Vite가 `/guide`로 HTML을 우선 서빙하면 리다이렉트 스텁과 겹쳐 **무한 새로고침**이 난다. 가이드는 React 라우트 `/guide`만 사용한다.
- 루트 레거시 HTML을 다시 앱 진입점으로 쓰기
- `legacy/`를 실행·배포 대상으로 삼기
- 루트 `assets/` 또는 `public/assets/css`·`js`를 다시 만들고 CSS를 이중 관리하기
- Kakao 실연동·백엔드 API를 시안 작업과 한꺼번에 넣기
- ScrollSmoother 등 라이선스 플러그인을 임의 추가

---

## 참고

- 컴포넌트·컬러·타이포 시안: 개발 서버 **[/guide](http://localhost:5173/guide)**
- Cursor 에이전트용 요약 규칙: [`.cursor/rules/project.mdc`](.cursor/rules/project.mdc)
- 가이드 섹션 레이아웃: [`.cursor/rules/guide-section.mdc`](.cursor/rules/guide-section.mdc)
- 전환 전 스냅샷: [`legacy/README.md`](legacy/README.md)
