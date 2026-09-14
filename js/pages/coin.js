/**
 * pages/coin.js
 * 역할: 코인 관리 / 출석 체크 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.coin = {
    init: function () {
      if (PockApp.getPageName() !== "coin") return;

      var state = PockApp.Coin.getState();
      document.body.setAttribute("data-coin-balance", state.balance || 0);
      document.body.setAttribute("data-attendance-days", state.attendanceDays || 0);
      document.body.setAttribute("data-attendance-done", state.attendance ? "true" : "false");
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.coin.init();
  });

  global.PockApp = PockApp;
})(window);
