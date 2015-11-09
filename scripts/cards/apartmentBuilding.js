define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Apartment Building",
    cost: 5,
    keep: false,
    effect: "+3 Points",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(3);
    }
  };

  return new Card(cardDetails);
})
