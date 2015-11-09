define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Evacuation Orders",
    cost: 7,
    keep: false,
    effect: "All other monsters lose 5 points",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(2);
      _.forEach(allPlayers, function(player) {
        if(player.name !== currentPlayer().name) {
          player.points(player.points() < 5 ? 0 : player.points() - 5);
        }
      })
    }
  };

  return new Card(cardDetails);
})
