/**
 * pages/letter-store.js
 * 역할: 편지지 스토어 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.letterStore = {
    init: function () {
      if (PockApp.getPageName() !== "letter-store") return;

      var letters = PockApp.Store.getAll();
      var owned = PockApp.Store.getOwnedIds();
      var balance = PockApp.Coin.getBalance();

      document.body.setAttribute("data-letter-count", letters.length);
      document.body.setAttribute("data-owned-count", owned.length);
      document.body.setAttribute("data-coin-balance", balance);
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.letterStore.init();
  });

  global.PockApp = PockApp;
})(window);
