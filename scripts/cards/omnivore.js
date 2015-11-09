define(["cards/cardInterface", "util/diceCount", "util/min"], function(Card, diceCount, min) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Omnivore",
    cost: 4,
    keep: true,
    effect: "Once each turn you can score 1, 2 and 3 for 2 points. You can use these dice in other combinations.",
    shortEffect: "123 = 2 points",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {
          var numOfOnes = diceCount.symbolCount(dice, "1");
          var numOfTwos = diceCount.symbolCount(dice, "2");
          var numOfThrees = diceCount.symbolCount(dice, "3");

          var totalSets = min(min(numOfOnes, numOfThrees), numOfTwos)

          return {
            points: totalSets * 2,
            attack: 0,
            energy: 0,
            heal: 0
          }
        }
      );
    }
  };

  return new Card(cardDetails);
})
