/**
 * pages/pock-sent.js
 * 역할: 보낸 POCK 목록 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.pockSent = {
    init: function () {
      if (PockApp.getPageName() !== "pock-sent") return;

      var items = PockApp.Pock.getSent();
      document.body.setAttribute("data-pock-count", items.length);
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.pockSent.init();
  });

  global.PockApp = PockApp;
})(window);
