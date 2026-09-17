/**
 * pages/pock-detail.js
 * 역할: POCK 상세 페이지 초기화 및 상태 modifier 적용
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pages = PockApp.Pages || {};

  PockApp.Pages.pockDetail = {
    applyStatus: function (status) {
      var detail = document.querySelector(".pock-detail");
      if (!detail) return;

      detail.classList.remove(
        "pock-detail--locked",
        "pock-detail--opening",
        "pock-detail--opened"
      );

      var modifier = "pock-detail--" + status;
      detail.classList.add(modifier);
      detail.setAttribute("data-status", status);
    },

    init: function () {
      if (PockApp.getPageName() !== "pock-detail") return;

      var params = new URLSearchParams(global.location.search);
      var id = params.get("id");
      var pock = id ? PockApp.Pock.getById(id) : null;
      var status = pock ? pock.status : "locked";

      if (status === "received") status = "locked";
      if (status === "sent") status = "locked";

      this.applyStatus(status);

      if (pock) {
        document.body.setAttribute("data-pock-id", pock.id);
      }
    }
  };

  PockApp.ready(function () {
    PockApp.Pages.pockDetail.init();
  });

  global.PockApp = PockApp;
})(window);
