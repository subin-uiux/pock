import type { TermsArticle, TermsBlock } from "@/data/terms-data";

export type { TermsArticle, TermsBlock };

/** 개인정보처리방침 — 시안 카피 (가상 문서) */

export const PRIVACY_TITLE = "POCK 개인정보처리방침 (가상)";
export const PRIVACY_EFFECTIVE_DATE = "시행일자 : 2026년 00월 00일";

export const PRIVACY_NOTICE_LINES = [
  "본 문서는 POCK 서비스 기획에 맞춰 새롭게 작성된 가상의 이용약관 및 개인정보처리방침입니다.",
  "특정 웹사이트 또는 서비스의 정책 내용을 복사하지 않았으며, 프로젝트 시연을 위한 UX 설계 목적으로 제작되었습니다.",
] as const;

export const PRIVACY_INTRO =
  "POCK은 이용자의 개인정보를 중요하게 생각하며, 관련 법령에 따라 개인정보 보호를 위해 최선을 다합니다.";

export const privacyArticles: TermsArticle[] = [
  {
    id: "privacy-1",
    title: "1. 개인정보 수집 항목",
    blocks: [
      {
        type: "p",
        text: "POCK은 서비스 제공을 위해 다음 개인정보를 수집할 수 있습니다.",
      },
      { type: "subtitle", text: "회원 정보" },
      {
        type: "ul",
        items: [
          "카카오 계정 식별 정보",
          "닉네임",
          "프로필 이미지",
          "이메일 주소(선택)",
        ],
      },
      { type: "subtitle", text: "서비스 이용 정보" },
      {
        type: "ul",
        items: [
          "작성한 메시지 내용",
          "첨부한 사진",
          "설정한 공개 날짜 및 시간",
          "받은 POCK 및 보낸 POCK 기록",
          "Coin 이용 기록",
          "편지지 이용 기록",
        ],
      },
      { type: "subtitle", text: "자동 수집 정보" },
      {
        type: "p",
        text: "서비스 이용 과정에서 다음 정보가 자동 생성될 수 있습니다.",
      },
      {
        type: "ul",
        items: [
          "접속 기록",
          "서비스 이용 기록",
          "기기 정보",
          "브라우저 정보",
        ],
      },
    ],
  },
  {
    id: "privacy-2",
    title: "2. 개인정보 이용 목적",
    blocks: [
      {
        type: "p",
        text: "POCK은 수집한 개인정보를 다음 목적으로 이용합니다.",
      },
      {
        type: "p",
        text: "① 회원 관리 및 서비스 제공",
      },
      {
        type: "p",
        text: "② 메시지 작성 및 보관 기능 제공",
      },
      {
        type: "p",
        text: "③ 지정 시간 이후 POCK 공개",
      },
      {
        type: "p",
        text: "④ 서비스 이용 기록 관리",
      },
      {
        type: "p",
        text: "⑤ 서비스 개선 및 사용자 경험 분석",
      },
      {
        type: "p",
        text: "⑥ 부정 이용 방지 및 보안 관리",
      },
    ],
  },
  {
    id: "privacy-3",
    title: "3. 개인정보 보관 기간",
    blocks: [
      {
        type: "p",
        text: "① 회원 정보는 회원 탈퇴 시까지 보관합니다.",
      },
      {
        type: "p",
        text: "② 메시지 및 사진 콘텐츠는 이용자가 설정한 공개 기간 동안 서비스 제공 목적으로 보관합니다.",
      },
      {
        type: "p",
        text: "③ 관련 법령에 따라 보관이 필요한 정보는 해당 기간 동안 보관 후 삭제합니다.",
      },
    ],
  },
  {
    id: "privacy-4",
    title: "4. 개인정보 제공",
    blocks: [
      {
        type: "p",
        text: "POCK은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.",
      },
      {
        type: "p",
        text: "다만 다음의 경우 예외로 합니다.",
      },
      {
        type: "ul",
        items: [
          "이용자가 동의한 경우",
          "법령에 따른 요청이 있는 경우",
          "서비스 제공을 위해 필요한 경우",
        ],
      },
    ],
  },
  {
    id: "privacy-5",
    title: "5. 제3자 서비스 이용",
    blocks: [
      {
        type: "p",
        text: "POCK은 서비스 편의를 위해 다음 서비스를 이용할 수 있습니다.",
      },
      { type: "subtitle", text: "카카오 로그인" },
      { type: "subtitle", text: "제공 목적:" },
      {
        type: "ul",
        items: ["회원 인증", "계정 연결"],
      },
      { type: "subtitle", text: "제공 정보:" },
      {
        type: "ul",
        items: ["카카오 계정 식별 정보", "프로필 정보"],
      },
    ],
  },
  {
    id: "privacy-6",
    title: "6. 개인정보 보호 조치",
    blocks: [
      {
        type: "p",
        text: "POCK은 이용자의 개인정보 보호를 위해 다음 조치를 시행합니다.",
      },
      {
        type: "ul",
        items: [
          "개인정보 접근 권한 관리",
          "데이터 암호화 관리",
          "보안 시스템 운영",
          "개인정보 처리 직원 최소화",
        ],
      },
    ],
  },
  {
    id: "privacy-7",
    title: "7. 이용자의 권리",
    blocks: [
      {
        type: "p",
        text: "이용자는 언제든지 다음 권리를 행사할 수 있습니다.",
      },
      {
        type: "ul",
        items: [
          "개인정보 조회 요청",
          "개인정보 수정 요청",
          "개인정보 삭제 요청",
          "회원 탈퇴 요청",
        ],
      },
    ],
  },
  {
    id: "privacy-8",
    title: "8. 사진 및 메시지 콘텐츠 보호",
    blocks: [
      {
        type: "p",
        text: "① 이용자가 작성한 메시지와 사진은 서비스 제공 목적 외에는 이용하지 않습니다.",
      },
      {
        type: "p",
        text: "② POCK은 이용자의 콘텐츠를 광고 또는 홍보 목적으로 사용할 경우 별도의 동의를 받습니다.",
      },
      {
        type: "p",
        text: "③ 이용자는 본인이 업로드하는 콘텐츠에 대한 권리를 보유해야 합니다.",
      },
    ],
  },
  {
    id: "privacy-9",
    title: "9. 개인정보 보호 책임자",
    blocks: [
      { type: "p", text: "개인정보 보호 책임자" },
      { type: "p", text: "POCK 운영팀" },
      { type: "p", text: "이메일: pock@naver.com" },
    ],
  },
];
