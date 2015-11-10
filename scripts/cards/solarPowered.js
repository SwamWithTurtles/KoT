define(["cards/cardInterface"], function(Card) {

  var cardDetails = {
    name: "Solar Powered",
    cost: 3,
    keep: true,
    effect: "At the end of your turn gain 1 Energy if you have no Energy.",
    shortEffect: "6 energy = 1 point",
    bespokeEffect: function(player) {
      var generateEnergy = function(_player) {
        if(_player.energy() === 0) { _player.energy(1); }
      }

      player().endTurnHooks.push(generateEnergy);
    }
  };

  return new Card(cardDetails);
})
