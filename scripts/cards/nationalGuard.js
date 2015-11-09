define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "National Guard",
    cost: 3,
    keep: false,
    effect: "+2 points, and take 2 damage",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(2);
      currentPlayer().takeDamage(2);
    }
  };

  return new Card(cardDetails);
})
