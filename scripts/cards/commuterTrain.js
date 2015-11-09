define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Commuter Train",
    cost: 4,
    keep: false,
    effect: "+2 Points",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(2);
    }
  };

  return new Card(cardDetails);
})
