define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Nuclear Power Plant",
    cost: 6,
    keep: false,
    effect: "+2 points and heal 3 damage",
    bespokeEffect: function(player) {
      player().addPoints(2);
      player().heal(3);
    }
  };

  return new Card(cardDetails);
})
