/**
 * pages/home.js
 * 역할: 홈 대시보드 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.home = {
    init: function () {
      if (PockApp.getPageName() !== "home") return;

      var received = PockApp.Pock.getReceived();
      var sent = PockApp.Pock.getSent();
      var balance = PockApp.Coin.getBalance();

      document.body.setAttribute("data-received-count", received.length);
      document.body.setAttribute("data-sent-count", sent.length);
      document.body.setAttribute("data-coin-balance", balance);
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.home.init();
  });

  global.PockApp = PockApp;
})(window);
