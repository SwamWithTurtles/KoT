define(["ko", "phases/scoring", "data/die", "phases/fighting"], function(ko, scoring, Die, fighting) {
  return function(dice, playerDetails, resetRerolls) {

    var turnOver = ko.observable(false);
    var turnResult = ko.observable({});
    var isTokyoInDispute = ko.observable(false);

    var nextTurn = function() {
      turnOver(false);
      dice([new Die(), new Die(), new Die(), new Die(), new Die(), new Die()]);
      var currentPlayer = playerDetails.advancePlayerTurn();
      console.log(currentPlayer.rerolls());
      resetRerolls(currentPlayer.rerolls());
    }

    var claim = function() {
      var scores = scoring(dice, playerDetails.currentPlayer());

      playerDetails.currentPlayer().resolve(scores);
      isTokyoInDispute(fighting(playerDetails, scores).disputedTokyo);

      turnResult(scores);
      turnOver(true);
    }

    return {
      turnOver: turnOver,
      turnResult: turnResult,
      claim: claim,
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
