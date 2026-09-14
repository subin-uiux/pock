/**
 * pages/pock-send.js
 * 역할: POCK 보내기 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.pockSend = {
    init: function () {
      if (PockApp.getPageName() !== "pock-send") return;

      var letters = PockApp.Store.getAll();
      document.body.setAttribute("data-letter-count", letters.length);
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.pockSend.init();
  });

  global.PockApp = PockApp;
})(window);
