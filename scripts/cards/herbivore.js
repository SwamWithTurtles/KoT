define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Herbivore",
    cost: 5,
    keep: true,
    effect: "Gain 1 point on your turn if you don't hurt anyone",
    shortEffect: "No Damage = 1 point",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {
          return {
            points: existsAmongDice(dice, "Paw") ? 0 : 1,
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
