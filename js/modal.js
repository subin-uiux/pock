/**
 * modal.js
 * 역할: 모달 열기/닫기 상태 관리
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Modal = {
    open: function (modalEl) {
      if (!modalEl) return;
      modalEl.classList.add("modal--open");
      modalEl.setAttribute("aria-hidden", "false");
      document.body.classList.add("page--modal-open");
    },

    close: function (modalEl) {
      if (!modalEl) return;
      modalEl.classList.remove("modal--open");
      modalEl.setAttribute("aria-hidden", "true");
      document.body.classList.remove("page--modal-open");
    },

    toggle: function (modalEl) {
      if (!modalEl) return;
      if (modalEl.classList.contains("modal--open")) {
        this.close(modalEl);
      } else {
        this.open(modalEl);
      }
    }
  };

  global.PockApp = PockApp;
})(window);
