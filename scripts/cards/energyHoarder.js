define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var cardDetails = {
    name: "Energy Hoarder",
    cost: 3,
    keep: true,
    effect: "You gain 1 point for every 6 energy you have at the end of your turn.",
    shortEffect: "6 energy = 1 point",
    bespokeEffect: function(player) {
      var currentPlayer = player();

      player().additionalScoring.push(
        function(dice) {

          return {
            points: Math.floor((currentPlayer.energy() + diceCount.symbolCount(dice, "Energy")) / 6),
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
