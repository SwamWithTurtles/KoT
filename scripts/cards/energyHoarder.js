define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var cardDetails = {
    name: "Energy Hoarder",
    cost: 3,
    keep: true,
    effect: "You gain 1 point for every 6 energy you have at the end of your turn.",
    shortEffect: "6 energy = 1 point",
    bespokeEffect: function(player) {
      var addPoints = function(_player) {
        _player.addPoints(Math.floor(_player.energy() / 6));
      }      

      player().endTurnHooks.push(addPoints);
    }
  };

  return new Card(cardDetails);
})
