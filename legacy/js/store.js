/**
 * store.js
 * 역할: 편지지 스토어 구매 관리
 */
(function (global) {
  "use strict";

  var PockApp = global.PockApp || {};
  var OWNED_KEY = "pock.ownedLetters";

  PockApp.Store = {
    getAll: function () {
      return (global.LetterData && global.LetterData.items) || [];
    },

    getById: function (id) {
      return this.getAll().find(function (item) {
        return item.id === id;
      }) || null;
    },

    getOwnedIds: function () {
      var saved = PockApp.storage.get(OWNED_KEY);
      if (saved) return saved;

      var freeIds = this.getAll()
        .filter(function (item) { return item.isFree; })
        .map(function (item) { return item.id; });

      PockApp.storage.set(OWNED_KEY, freeIds);
      return freeIds;
    },

    isOwned: function (letterId) {
      return this.getOwnedIds().indexOf(letterId) !== -1;
    },

    purchase: function (letterId) {
      var letter = this.getById(letterId);
      if (!letter) return { success: false, reason: "not_found" };
      if (this.isOwned(letterId)) return { success: false, reason: "already_owned" };
      if (letter.isFree) return { success: false, reason: "is_free" };

      var spent = PockApp.Coin.spend(letter.price, letter.name + " 구매");
      if (!spent) return { success: false, reason: "insufficient_balance" };

      var owned = this.getOwnedIds();
      owned.push(letterId);
      PockApp.storage.set(OWNED_KEY, owned);

      return { success: true, letter: letter };
    }
  };

  global.PockApp = PockApp;
})(window);
