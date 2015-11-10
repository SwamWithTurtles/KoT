define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Frenzy",
    cost: 6,
    keep: false,
    effect: "When you purchase this card take another turn immediately after this one.",
    bespokeEffect: function(currentPlayer, allPlayers, rolling, turnEnd) {
        turnEnd.extraTurn(currentPlayer());
    }
  };

  return new Card(cardDetails);
})
