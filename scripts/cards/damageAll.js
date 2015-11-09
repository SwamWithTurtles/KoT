define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Gas Refinery",
    cost: 1,
    keep: false,
    effect: "2 Points, and deal 3 damage to all other monsters",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(2);
      _.forEach(allPlayers, function(player) {
        if(player.name !== currentPlayer().name) {
          player.takeDamage(3);
        }
      })
    }
  };

  return new Card(cardDetails);
})
