/**
 * navigation.js
 * 역할: 페이지 내비게이션 유틸리티
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Navigation = {
    getCurrentFile: function () {
      return PockApp.getPageName();
    },

    goTo: function (page) {
      var target = page.indexOf(".html") !== -1 ? page : page + ".html";
      global.location.href = target;
    },

    isActive: function (page) {
      var current = this.getCurrentFile();
      var target = page.replace(/\.html$/, "");
      return current === target;
    }
  };

  global.PockApp = PockApp;
})(window);
