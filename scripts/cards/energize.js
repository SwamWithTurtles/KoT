define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Energize",
    cost: 8,
    keep: false,
    effect: "+9 Energy",
    bespokeEffect: function(currentPlayer) {
      currentPlayer().energy(currentPlayer().energy() + 9);
    }
  };

  return new Card(cardDetails);
})
