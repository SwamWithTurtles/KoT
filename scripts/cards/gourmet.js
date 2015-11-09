define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var cardDetails = {
    name: "Gourmet",
    cost: 4,
    keep: true,
    effect: "When you score 1, 1, 1 gain 2 extra points",
    shortEffect: "111 = 2 points",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {
          var numOfOnes = diceCount.symbolCount(dice, "1");

          return {
            points: Math.floor(numOfOnes / 3) * 2,
            attack: 0,
            energy: 0,
            heal: 0,
          }
        }
      );
    }
  };

  return new Card(cardDetails);
})
