define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Corner Store",
    cost: 3,
    keep: false,
    effect: "+1 Points",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(1);
    }
  };

  return new Card(cardDetails);
})
