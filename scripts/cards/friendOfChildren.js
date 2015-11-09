define(["cards/cardInterface", "util/diceCount", "util/min"], function(Card, diceCount, min) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Friend Of Children",
    cost: 3,
    keep: true,
    effect: "When you gain any energy, gain 1 extra energy.",
    shortEffect: "Gain 1 extra energy",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {

          return {
            points: 0,
            attack: 0,
            energy: existsAmongDice(dice, "Energy") ? 1 : 0,
            heal: 0
          }
        }
      );
    }
  };

  return new Card(cardDetails);
})
