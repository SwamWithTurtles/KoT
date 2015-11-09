define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount, min) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Spiked Tail",
    cost: 5,
    keep: true,
    effect: "When you attack deal 1 extra damage.",
    shortEffect: "+1 damage to attacks",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {

          return {
            points: 0,
            attack: existsAmongDice(dice, "Paw") ? 1 : 0,
            energy: 0,
            heal: 0
          }
        }
      );
    }
  };

  return new Card(cardDetails);
})
