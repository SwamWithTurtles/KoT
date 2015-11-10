define(["ko", "phases/scoring", "data/die", "phases/fighting"], function(ko, scoring, Die, fighting) {
  return function(dice, playerDetails, resetRerolls) {

    var turnOver = ko.observable(false);
    var resolved = ko.observable(false);
    var turnResult = ko.observable({});
    var pointsTallied = ko.observable(false);
    var isTokyoInDispute = ko.observable(false);
    var shrinkTokenRemoval = ko.observable(0);

    var extraTurn = ko.observable(false);

    var nextTurn = function() {
      turnOver(false);
      shrinkTokenRemoval(0);
      pointsTallied(false);
      _.forEach(playerDetails.currentPlayer().endTurnHooks(), function(hook) {hook(playerDetails.currentPlayer());})
      _.forEach(playerDetails.players, function(player) {player.preventDamageThisTurn(false)});
      var currentPlayer;
      if(extraTurn()) {
        currentPlayer = extraTurn();
        extraTurn(false);
      } else {
         currentPlayer = playerDetails.advancePlayerTurn();
      }
      resetRerolls(currentPlayer.rerolls(), currentPlayer.dice() - currentPlayer.shrinkTokens());
      if (currentPlayer.isInTokyo()) {
        currentPlayer.addPoints(currentPlayer.tokyoBonus());
      }
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
      },
      extraTurn: extraTurn
    };
  };
})
