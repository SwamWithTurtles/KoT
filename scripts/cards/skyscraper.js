define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Skyscraper",
    cost: 6,
    keep: false,
    effect: "+4 Points",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(4);
    }
  };

  return new Card(cardDetails);
})
