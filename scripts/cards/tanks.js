define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Tanks",
    cost: 4,
    keep: false,
    effect: "+4 points, and take 3 damage",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(4);
      currentPlayer().takeDamage(3);
    }
  };

  return new Card(cardDetails);
})
