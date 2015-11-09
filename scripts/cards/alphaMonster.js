define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Alpha Monster",
    cost: 5,
    keep: true,
    effect: "Gain 1 point when you attack",
    shortEffect: "Attacking = 1 point",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {

          return {
            points: existsAmongDice(dice, "Paw") ? 1 : 0,
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
