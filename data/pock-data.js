/**
 * data/pock-data.js
 * 역할: POCK mock data
 *
 * status 예시:
 *   locked   — 아직 공개 전
 *   opening  — 공개 시점 도달, 열기 가능
 *   opened   — 열람 완료
 *   received — 타입/맥락용 (type 과 함께 사용)
 *   sent     — 타입/맥락용 (type 과 함께 사용)
 *
 * 확장 가능한 필드 구조 — Backend 없음
 */

window.PockData = {
  items: [
    {
      id: "pock-001",
      type: "received",
      sender: {
        id: "user-002",
        name: "지우",
        profileImage: "assets/images/profile/profile-jiwoo.webp",
      },
      receiver: {
        id: "user-001",
        name: "나",
        profileImage: "assets/images/profile/profile-me.webp",
      },
      message: "미래의 나에게. 오늘도 수고했어.",
      image: "assets/images/pock/pock-photo-001.webp",
      letter: "letter-blue",
      status: "locked",
      createdAt: "2026-03-01T10:00:00+09:00",
      openDate: "2026-12-25",
      openTime: "09:00",
      hint: "크리스마스에 열어보세요",
      hintCost: 10,
    },
    {
      id: "pock-002",
      type: "received",
      sender: {
        id: "user-003",
        name: "민수",
        profileImage: "assets/images/profile/profile-minsu.webp",
      },
      receiver: {
        id: "user-001",
        name: "나",
        profileImage: "assets/images/profile/profile-me.webp",
      },
      message: "약속한 날이야. 잘 지내?",
      image: "assets/images/pock/pock-photo-002.webp",
      letter: "letter-pink",
      status: "opening",
      createdAt: "2026-01-15T14:30:00+09:00",
      openDate: "2026-09-14",
      openTime: "12:00",
      hint: "오늘이 그날",
      hintCost: 5,
    },
    {
      id: "pock-003",
      type: "received",
      sender: {
        id: "user-002",
        name: "지우",
        profileImage: "assets/images/profile/profile-jiwoo.webp",
      },
      receiver: {
        id: "user-001",
        name: "나",
        profileImage: "assets/images/profile/profile-me.webp",
      },
      message: "이미 열어본 메시지입니다.",
      image: "assets/images/pock/pock-photo-003.webp",
      letter: "letter-cream",
      status: "opened",
      createdAt: "2025-06-01T09:00:00+09:00",
      openDate: "2026-01-01",
      openTime: "00:00",
      hint: null,
      hintCost: 0,
    },
    {
      id: "pock-004",
      type: "sent",
      sender: {
        id: "user-001",
        name: "나",
        profileImage: "assets/images/profile/profile-me.webp",
      },
      receiver: {
        id: "user-004",
        name: "하나",
        profileImage: "assets/images/profile/profile-hana.webp",
      },
      message: "생일 축하해! 미리 적어둔 편지야.",
      image: "assets/images/pock/pock-photo-004.webp",
      letter: "letter-blue",
      status: "locked",
      createdAt: "2026-02-10T20:00:00+09:00",
      openDate: "2026-11-03",
      openTime: "08:00",
      hint: "생일 아침에",
      hintCost: 10,
    },
    {
      id: "pock-005",
      type: "sent",
      sender: {
        id: "user-001",
        name: "나",
        profileImage: "assets/images/profile/profile-me.webp",
      },
      receiver: {
        id: "user-003",
        name: "민수",
        profileImage: "assets/images/profile/profile-minsu.webp",
      },
      message: "보낸 POCK — 이미 상대가 열어봄",
      image: "assets/images/pock/pock-photo-005.webp",
      letter: "letter-pink",
      status: "opened",
      createdAt: "2025-11-01T11:00:00+09:00",
      openDate: "2026-03-01",
      openTime: "10:00",
      hint: null,
      hintCost: 0,
    },
  ],
};
