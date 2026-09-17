/**
 * components/header.js
 * 역할: 공통 헤더 UI 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Header = {
    init: function () {
      var header = document.querySelector(".header");
      if (!header) return;
      header.setAttribute("data-initialized", "true");
    }
  };

  PockApp.ready(function () {
    PockApp.Header.init();
  });

  global.PockApp = PockApp;
})(window);
