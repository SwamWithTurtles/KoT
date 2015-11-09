define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Jet Fighters",
    cost: 5,
    keep: false,
    effect: "+5 points, and take 4 damage",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(5);
      currentPlayer().takeDamage(4);
    }
  };

  return new Card(cardDetails);
})
