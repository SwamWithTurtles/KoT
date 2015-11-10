define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Urbavore",
    cost: 4,
    keep: true,
    effect: "Gain 1 extra point when beginning the turn in Tokyo. Deal 1 extra damage when dealing any damage from Tokyo.",
    shortEffect: "Tokyo = +1 Point, +1 Damage each turn",
    bespokeEffect: function(player) {
      player().tokyoBonus(player().tokyoBonus()+ 1);

      player().additionalScoring.push(
        function(dice) {
          return {
            points: 0,
            attack: player().isInTokyo() && existsAmongDice(dice, "Paw") ? 1 : 0,
            energy: 0,
            heal: 0
          }
        }
      );
    }
  };

  return new Card(cardDetails);
})
