/**
 * pages/mypage.js
 * 역할: 마이페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.mypage = {
    init: function () {
      if (PockApp.getPageName() !== "mypage") return;

      var received = PockApp.Pock.getReceived();
      var sent = PockApp.Pock.getSent();
      var balance = PockApp.Coin.getBalance();

      document.body.setAttribute("data-received-count", received.length);
      document.body.setAttribute("data-sent-count", sent.length);
      document.body.setAttribute("data-coin-balance", balance);
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.mypage.init();
  });

  global.PockApp = PockApp;
})(window);
