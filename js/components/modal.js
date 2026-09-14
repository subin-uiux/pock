/**
 * components/modal.js
 * 역할: data-modal-open / data-modal-close 바인딩
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.ModalUI = {
    init: function () {
      document.addEventListener("click", function (e) {
        var openTrigger = e.target.closest("[data-modal-open]");
        if (openTrigger) {
          var targetId = openTrigger.getAttribute("data-modal-open");
          var modal = document.getElementById(targetId);
          if (modal) PockApp.Modal.open(modal);
          return;
        }

        var closeTrigger = e.target.closest("[data-modal-close]");
        if (closeTrigger) {
          var modalEl = closeTrigger.closest(".modal");
          if (modalEl) PockApp.Modal.close(modalEl);
        }
      });
    }
  };

  PockApp.ready(function () {
    PockApp.ModalUI.init();
  });

  global.PockApp = PockApp;
})(window);
