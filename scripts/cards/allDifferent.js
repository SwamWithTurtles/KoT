define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Complete Destruction",
    cost: 3,
    keep: true,
    effect: "If you roll 1, 2, 3, Heart, Paw, Energy gain 9 points in addition to the regular results",
    shortEffect: "123HPE = 9 points",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {
          var allDifferent = existsAmongDice(dice, "1") &&
          existsAmongDice(dice, "2") &&
          existsAmongDice(dice, "3") &&
          existsAmongDice(dice, "Energy") &&
          existsAmongDice(dice, "Paw") &&
          existsAmongDice(dice, "Heart")

          return {
            points: allDifferent ? 9 : 0,
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
