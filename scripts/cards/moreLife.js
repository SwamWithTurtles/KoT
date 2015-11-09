define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "More Life",
    cost: 2,
    effect: "Your maximum life is increased by two",
    shortEffect: "Max Life +2",
    bespokeEffect: function(player) {
      player().maxHealth(player().maxHealth() + 2);
    }
  };

  return new Card(cardDetails);
})
