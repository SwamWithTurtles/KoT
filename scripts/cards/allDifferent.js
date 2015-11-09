define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var isUniqueAmongstDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) === 1};

  var cardDetails = {
    name: "All Different Bonus",
    cost: 2,
    keep: true,
    effect: "If you roll all different symbols (1, 2, 3, Heart, Skull and Energy) you get 9 victory points",
    shortEffect: "123456 = 9 points",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {
          var allDifferent = isUniqueAmongstDice(dice, "1") &&
          isUniqueAmongstDice(dice, "2") &&
          isUniqueAmongstDice(dice, "3") &&
          isUniqueAmongstDice(dice, "Energy") &&
          isUniqueAmongstDice(dice, "Paw") &&
          isUniqueAmongstDice(dice, "Heart")

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
