define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Fire Blast",
    cost: 3,
    keep: false,
    effect: "Deal 2 damage to all other monsters",
    bespokeEffect: function(currentPlayer, allPlayers) {
      _.forEach(allPlayers, function(player) {
        if(player.name !== currentPlayer().name) {
          player.takeDamage(2);
        }
      })
    }
  };

  return new Card(cardDetails);
})
