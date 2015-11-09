define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Acid Attack",
    cost: 6,
    keep: true,
    effect: "Deal 1 extra damage each turn (even when you don't otherwise attack).",
    shortEffect: "1 Damage Every Turn",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {
          return {
            points: 0,
            nonTokyoAttack: 1,
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
