/**
 * pages/pock-received.js
 * 역할: 받은 POCK 목록 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.pockReceived = {
    init: function () {
      if (PockApp.getPageName() !== "pock-received") return;

      var items = PockApp.Pock.getReceived();
      document.body.setAttribute("data-pock-count", items.length);
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.pockReceived.init();
  });

  global.PockApp = PockApp;
})(window);
