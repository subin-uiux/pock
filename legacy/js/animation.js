/**
 * animation.js
 * 역할: GSAP 기반 애니메이션 관리
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Animation = {
    isReady: false,
    smoother: null,

    init: function () {
      if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof ScrollSmoother !== "undefined") {
          gsap.registerPlugin(ScrollSmoother);
        }
        this.isReady = true;
      }
      this.initScrollSmoother();
    },

    initScrollSmoother: function () {
      if (!this.isReady) return null;
      var wrapper = document.getElementById("smooth-wrapper");
      var content = document.getElementById("smooth-content");
      if (!wrapper || !content) return null;

      // ScrollSmoother.create({
      //   wrapper: "#smooth-wrapper",
      //   content: "#smooth-content",
      //   smooth: 1.2,
      //   effects: true
      // });

      return null;
    },

    pageTransition: function (callback) {
      if (callback) callback();
    },

    pockCardReveal: function (element) {
      if (!this.isReady || !element) return;
      gsap.from(element, { opacity: 0, y: 20, duration: 0.5 });
    },

    lockAnimation: function (element) {
      if (!this.isReady || !element) return;
      gsap.to(element, { scale: 0.95, duration: 0.3 });
    },

    unlockAnimation: function (element, callback) {
      if (!this.isReady || !element) {
        if (callback) callback();
        return;
      }
      gsap.to(element, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        onComplete: callback
      });
    },

    modalOpen: function (modalEl) {
      if (!this.isReady || !modalEl) return;
      gsap.fromTo(
        modalEl,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    },

    modalClose: function (modalEl, callback) {
      if (!this.isReady || !modalEl) {
        if (callback) callback();
        return;
      }
      gsap.to(modalEl, {
        opacity: 0,
        duration: 0.2,
        onComplete: callback
      });
    },

    storeInteraction: function (element) {
      if (!this.isReady || !element) return;
      gsap.from(element, { scale: 0.9, opacity: 0, duration: 0.4 });
    }
  };

  PockApp.ready(function () {
    PockApp.Animation.init();
  });

  global.PockApp = PockApp;
})(window);
