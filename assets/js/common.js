/**
 * common.js
 * 공통 초기화. 라이브러리: jQuery 3.7.1, Swiper 11.2.10, GSAP 3.12.5
 */
(function ($, window, document) {
  "use strict";

  var POCK = window.POCK = window.POCK || {};
  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  POCK.prefersReducedMotion = motionQuery.matches;

  POCK.breakpoint = function () {
    var width = window.innerWidth;

    if (width >= 1920) {
      return "desktop";
    }

    if (width >= 1024) {
      return "tablet";
    }

    return "mobile";
  };

  POCK.setBreakpoint = function () {
    document.documentElement.setAttribute("data-breakpoint", POCK.breakpoint());
  };

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  $(function () {
    POCK.setBreakpoint();
    $(window).on("resize.pock", POCK.setBreakpoint);
  });

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", function (event) {
      POCK.prefersReducedMotion = event.matches;
    });
  }
})(jQuery, window, document);
