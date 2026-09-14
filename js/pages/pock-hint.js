/**
 * pages/pock-hint.js
 * 역할: POCK 힌트 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.pockHint = {
    init: function () {
      if (PockApp.getPageName() !== "pock-hint") return;

      var params = new URLSearchParams(global.location.search);
      var id = params.get("id");
      var pock = id ? PockApp.Pock.getById(id) : null;
      var balance = PockApp.Coin.getBalance();

      if (pock) {
        document.body.setAttribute("data-pock-id", pock.id);
        document.body.setAttribute("data-hint-cost", pock.hintCost || 0);
      }
      document.body.setAttribute("data-coin-balance", balance);
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.pockHint.init();
  });

  global.PockApp = PockApp;
})(window);
