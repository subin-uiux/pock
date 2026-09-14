/**
 * components/navigation.js
 * 역할: 내비게이션 UI 초기화 및 활성 상태
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.NavigationUI = {
    init: function () {
      var nav = document.querySelector(".navigation");
      if (!nav) return;

      var links = nav.querySelectorAll(".navigation__link[data-page]");
      links.forEach(function (link) {
        var page = link.getAttribute("data-page");
        if (PockApp.Navigation.isActive(page)) {
          link.classList.add("navigation__link--active");
          link.setAttribute("aria-current", "page");
        }
      });

      nav.setAttribute("data-initialized", "true");
    }
  };

  PockApp.ready(function () {
    PockApp.NavigationUI.init();
  });

  global.PockApp = PockApp;
})(window);
