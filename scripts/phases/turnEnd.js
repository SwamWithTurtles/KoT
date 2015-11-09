define(["ko", "phases/scoring", "data/die", "phases/fighting"], function(ko, scoring, Die, fighting) {
  return function(dice, playerDetails, resetRerolls) {

    var turnOver = ko.observable(false);
    var resolved = ko.observable(false);
    var turnResult = ko.observable({});
    var pointsTallied = ko.observable(false);
    var isTokyoInDispute = ko.observable(false);

    var nextTurn = function() {
      turnOver(false);
      pointsTallied(false);
      var currentPlayer = playerDetails.advancePlayerTurn();
      resetRerolls(currentPlayer.rerolls(), currentPlayer.dice());
    }

    var claim = function() {
      turnOver(true);
    }

    var tallyPoints = function() {
      var scores = scoring(dice, playerDetails.currentPlayer());

      playerDetails.currentPlayer().resolve(scores);
      isTokyoInDispute(fighting(playerDetails, scores).disputedTokyo);

      turnResult(scores);
      pointsTallied(true);
    }

    return {
      turnOver: turnOver,
      canBuy: ko.computed(function() {return pointsTallied() && turnOver() && !isTokyoInDispute()}),
      turnResult: turnResult,
      claim: claim,
      pointsTallied: pointsTallied,
      tallyPoints: tallyPoints,
      nextTurn: nextTurn,
      isTokyoInDispute: isTokyoInDispute,
      fleeTokyo: function() {
        playerDetails.moveIntoTokyo(playerDetails.currentPlayer());
        isTokyoInDispute(false);
      },
      stayInTokyo: function() {
        isTokyoInDispute(false);
      }
    };
  };
})
