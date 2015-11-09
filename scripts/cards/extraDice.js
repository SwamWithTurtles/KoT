define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Extra Head",
    cost: 7,
    keep: true,
    shortEffect: "+1 die",
    effect: "You get 1 extra die",
    bespokeEffect: function(player) {
      player().dice(player().dice() + 1);
    }
  };

  return new Card(cardDetails);
})
