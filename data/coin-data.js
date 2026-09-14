/**
 * coin-data.js
 * 역할: 코인 시스템 기본 상태 데이터
 */
window.CoinData = {
  state: {
    balance: 120,
    attendance: false,
    attendanceDays: 3,
    reward: 10,
    history: [
      {
        id: "hist-001",
        type: "earn",
        amount: 10,
        reason: "출석 체크",
        date: "2026-09-13T09:00:00+09:00"
      },
      {
        id: "hist-002",
        type: "spend",
        amount: 30,
        reason: "크림 편지지 구매",
        date: "2026-09-12T15:30:00+09:00"
      },
      {
        id: "hist-003",
        type: "earn",
        amount: 50,
        reason: "웰컴 보너스",
        date: "2026-09-01T00:00:00+09:00"
      }
    ],
    attendanceRewards: [
      { day: 1, amount: 5 },
      { day: 2, amount: 5 },
      { day: 3, amount: 10 },
      { day: 4, amount: 10 },
      { day: 5, amount: 15 },
      { day: 6, amount: 15 },
      { day: 7, amount: 30 }
    ]
  }
};
