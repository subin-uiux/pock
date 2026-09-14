/**
 * pock.js
 * 역할: POCK 데이터 접근 및 상태 관리
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};

  PockApp.Pock = {
    STATUS: {
      LOCKED: "locked",
      OPENING: "opening",
      OPENED: "opened",
      RECEIVED: "received",
      SENT: "sent"
    },

    getAll: function () {
      return (global.PockData && global.PockData.items) || [];
    },

    getById: function (id) {
      return this.getAll().find(function (item) {
        return item.id === id;
      }) || null;
    },

    filterByStatus: function (status) {
      return this.getAll().filter(function (item) {
        return item.status === status;
      });
    },

    getReceived: function () {
      return this.getAll().filter(function (item) {
        return item.type === "received";
      });
    },

    getSent: function () {
      return this.getAll().filter(function (item) {
        return item.type === "sent";
      });
    },

    canOpen: function (pock) {
      if (!pock) return false;
      return pock.status === this.STATUS.OPENING || pock.status === this.STATUS.OPENED;
    }
  };

  global.PockApp = PockApp;
})(window);
