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

  POCK.initFriendScroll = function () {
    $(".pock-window--friend .pock-window__pane").each(function () {
      var pane = this;
      var $pane = $(pane);
      var $list = $pane.children(".pock-window__list");
      var $track = $pane.children(".pock-window__scroll");
      var $thumb = $track.children(".pock-window__scroll-thumb");
      var list = $list.get(0);
      var track = $track.get(0);
      var thumb = $thumb.get(0);

      if (!list || !track || !thumb) {
        return;
      }

      function update() {
        var styles = window.getComputedStyle(list);
        var padTop = parseFloat(styles.paddingTop) || 0;
        var padBottom = parseFloat(styles.paddingBottom) || 0;

        track.style.top = padTop + "px";
        track.style.bottom = padBottom + "px";
        track.style.left = "";
        thumb.style.height = "58px";
        thumb.style.top = "0px";
      }

      pane._friendScroll = { update: update };
      update();
    });
  };

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  $(function () {
    POCK.setBreakpoint();
    POCK.initFriendScroll();
    $(window).on("load.pock resize.pock", function () {
      POCK.setBreakpoint();
      POCK.initFriendScroll();
    });
  });

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", function (event) {
      POCK.prefersReducedMotion = event.matches;
    });
  }
})(jQuery, window, document);
