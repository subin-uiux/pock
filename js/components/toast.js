/**
 * components/toast.js
 * 역할: 토스트 알림 표시
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Toast = {
    show: function (message, options) {
      options = options || {};
      var duration = options.duration || 3000;

      var toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "alert");

      var msg = document.createElement("p");
      msg.className = "toast__message";
      msg.textContent = message;
      toast.appendChild(msg);

      document.body.appendChild(toast);

      global.setTimeout(function () {
        toast.remove();
      }, duration);

      return toast;
    }
  };

  global.PockApp = PockApp;
})(window);
