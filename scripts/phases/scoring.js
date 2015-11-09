define(["ko", "lodash", "util/min", "util/diceCount"], function(ko, _, min, diceCount) {
  return function(dice, currentPlayer) {

    var numberOfDiceWithSymbol = function(sym) { return diceCount.symbolCount(dice(), sym) };

    var pointsWonFor = function(num) {
      var relevantDiceCount = numberOfDiceWithSymbol(num.toString());
      return (relevantDiceCount >= 3 ? num + (relevantDiceCount - 3) : 0);
    }

    var pointsWon = pointsWonFor(1) + pointsWonFor(2) + pointsWonFor(3);
    var energyGained = numberOfDiceWithSymbol("Energy");
    var attackPower = numberOfDiceWithSymbol("Paw");
    var healedFor = numberOfDiceWithSymbol("Heart");

    _.forEach(currentPlayer.additionalScoring(), function(scoreMechanism) {
      var additionalPoints = scoreMechanism(dice());

      pointsWon += additionalPoints.points;
      attackPower += additionalPoints.attack;
      energyGained += additionalPoints.energy;
      healedFor += additionalPoints.heal;
    });

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
