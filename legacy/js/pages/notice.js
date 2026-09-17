/**
 * pages/notice.js
 * 역할: 공지사항 페이지 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.notice = {
    init: function () {
      if (PockApp.getPageName() !== "notice") return;

      var items = (global.NoticeData && global.NoticeData.items) || [];
      document.body.setAttribute("data-notice-count", items.length);
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.notice.init();
  });

  global.PockApp = PockApp;
})(window);
