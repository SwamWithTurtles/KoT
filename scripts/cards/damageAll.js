define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Damage All Players",
    cost: 2,
    keep: false,
    effect: "Deal two damage to all players",
    bespokeEffect: function(player, allPlayers) {
      _.forEach(allPlayers, function(player) {
        player.takeDamage(2);
      })
    }
  };

  return new Card(cardDetails);
})
