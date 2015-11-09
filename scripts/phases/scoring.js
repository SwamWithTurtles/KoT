define(["ko", "lodash", "util/min"], function(ko, _, min) {
  return function(dice, currentPlayer) {
    var numberOfDiceWithSymbol = function(symbol) {
      var relevantDice = _.filter(dice(), function(die) {
        return die.faceShowing === symbol;
      });
      return relevantDice.length;
    }

    var pointsWonFor = function(num) {
      var relevantDiceCount = numberOfDiceWithSymbol(num.toString());
      return (relevantDiceCount >= 3 ? num + (relevantDiceCount - 3) : 0);
    }

    var pointsWon = pointsWonFor(1) + pointsWonFor(2) + pointsWonFor(3);
    var energyGained = numberOfDiceWithSymbol("Energy");
    var attackPower = numberOfDiceWithSymbol("Paw");
    var healedFor = numberOfDiceWithSymbol("Heart");

    var scores = {
      pointsWon: pointsWon,
      attackPower: attackPower,
      energyGained: energyGained,
      healedFor: healedFor,
      healedStatus: (function() {
        if(currentPlayer.isInTokyo()) { return "Cannot Heal in Tokyo"}

        var maxHealingValue = 10 - currentPlayer.health();
        return min(maxHealingValue, healedFor);

      })()
    };

    return scores;
  }
})
