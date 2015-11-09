define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Vast Storm",
    cost: 6,
    keep: false,
    effect: "+2 Points. All other monsters lose 1 Energy for every 2 Energy they have.",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(2);
      _.forEach(allPlayers, function(player) {
        if(player.name !== currentPlayer().name) {
          player.energy(Math.ceil(player.energy()/2));
        }
      })
    }
  };

  return new Card(cardDetails);
})
