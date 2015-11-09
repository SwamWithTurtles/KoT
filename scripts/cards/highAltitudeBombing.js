define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "High Altitude Bombing",
    cost: 4,
    keep: false,
    effect: "All players (including you) take 3 damage",
    bespokeEffect: function(currentPlayer, allPlayers) {
      _.forEach(allPlayers, function(player) {
          player.takeDamage(3);
      })
    }
  };

  return new Card(cardDetails);
})
