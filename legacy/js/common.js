/**
 * common.js
 * 역할: PockApp 전역 유틸리티 및 초기화
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.ready = function (callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  };

  PockApp.getPageName = function () {
    var path = global.location.pathname;
    var file = path.substring(path.lastIndexOf("/") + 1);
    if (!file || file === "") {
      return "index";
    }
    return file.replace(/\.html$/, "");
  };

  PockApp.storage = {
    get: function (key) {
      try {
        var raw = global.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },
    set: function (key, value) {
      try {
        global.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    },
    remove: function (key) {
      try {
        global.localStorage.removeItem(key);
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  PockApp.ready(function () {
    document.documentElement.classList.add("js-ready");
  });

  global.PockApp = PockApp;
})(window);
