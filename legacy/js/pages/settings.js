/**
 * pages/settings.js
 * 역할: 설정 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.settings = {
    init: function () {
      if (PockApp.getPageName() !== "settings") return;
      document.body.setAttribute("data-page-ready", "true");
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.settings.init();
  });

  global.PockApp = PockApp;
})(window);
