define(["ko", "phases/scoring", "data/die", "phases/fighting"], function(ko, scoring, Die, fighting) {
  return function(dice, playerDetails, resetRerolls) {

    var turnOver = ko.observable(false);
    var resolved = ko.observable(false);
    var turnResult = ko.observable({});
    var pointsTallied = ko.observable(false);
    var isTokyoInDispute = ko.observable(false);
    var shrinkTokenRemoval = ko.observable(0);

    var nextTurn = function() {
      turnOver(false);
      shrinkTokenRemoval(0);
      pointsTallied(false);
      _.forEach(playerDetails.currentPlayer().endTurnHooks(), function(hook) {hook(playerDetails.currentPlayer());})
      var currentPlayer = playerDetails.advancePlayerTurn();
      resetRerolls(currentPlayer.rerolls(), currentPlayer.dice() - currentPlayer.shrinkTokens());
    }

    var claim = function() {
      turnOver(true);
    }

    var tallyPoints = function() {
      var scores = scoring(dice, playerDetails.currentPlayer(), shrinkTokenRemoval);

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
      shrinkTokenRemoval: shrinkTokenRemoval,
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
