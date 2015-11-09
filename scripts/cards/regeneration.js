define(["cards/cardInterface", "util/diceCount", "util/min"], function(Card, diceCount, min) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Regeneration",
    cost: 4,
    keep: true,
    effect: "When you heal, heal one extra damage.",
    shortEffect: "Heal 1 extra damage",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {

          return {
            points: 0,
            attack: 0,
            energy: 0,
            heal: existsAmongDice(dice, "Heart") ? 1 : 0
          }
        }
      );
    }
  };

  return new Card(cardDetails);
})
