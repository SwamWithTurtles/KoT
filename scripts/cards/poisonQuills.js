define(["cards/cardInterface", "util/diceCount", "util/min"], function(Card, diceCount, min) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Poison Quills",
    cost: 3,
    keep: true,
    effect: "When you score 2, 2, 2 you also deal 2 damage",
    shortEffect: "222 = 2 damage",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {
          var numOfTwos = diceCount.symbolCount(dice, "2");

          return {
            points: 0,
            attack: 0,
            energy: 0,
            heal: 0,
            nonTokyoAttack: Math.floor(numOfTwos / 3) * 2
          }
        }
      );
    }
  };

  return new Card(cardDetails);
})
