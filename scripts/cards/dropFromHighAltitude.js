define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Drop from High Altitude",
    cost: 5,
    keep: false,
    effect: "+ 2 Points and take control of Tokyo if you don't already control it.",
    bespokeEffect: function(currentPlayer, allPlayers) {
      currentPlayer().addPoints(2);
      currentPlayer().isInTokyo(true);

      _.forEach(allPlayers, function(player) {
        if(player.name !== currentPlayer().name) {
          player.isInTokyo(false);
        }
      })
    }
  };

  return new Card(cardDetails);
})
