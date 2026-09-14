/**
 * coin.js
 * 역할: 코인 잔액 및 출석 관리 (localStorage)
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};
  var STORAGE_KEY = "pock.coin";

  PockApp.Coin = {
    getState: function () {
      var saved = PockApp.storage.get(STORAGE_KEY);
      if (saved) return saved;
      return global.CoinData ? global.CoinData.state : { balance: 0 };
    },

    saveState: function (state) {
      return PockApp.storage.set(STORAGE_KEY, state);
    },

    getBalance: function () {
      return this.getState().balance || 0;
    },

    spend: function (amount, reason) {
      var state = this.getState();
      if (state.balance < amount) return false;

      state.balance -= amount;
      state.history = state.history || [];
      state.history.unshift({
        id: "hist-" + Date.now(),
        type: "spend",
        amount: amount,
        reason: reason || "",
        date: new Date().toISOString()
      });

      this.saveState(state);
      return true;
    },

    earn: function (amount, reason) {
      var state = this.getState();
      state.balance = (state.balance || 0) + amount;
      state.history = state.history || [];
      state.history.unshift({
        id: "hist-" + Date.now(),
        type: "earn",
        amount: amount,
        reason: reason || "",
        date: new Date().toISOString()
      });

      this.saveState(state);
      return true;
    }
  };

  global.PockApp = PockApp;
})(window);
