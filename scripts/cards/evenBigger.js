define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Even Bigger",
    cost: 4,
    keep: true,
    effect: "Your maximum health is increased by 2. Gain 2 health when you get this card.",
    shortEffect: "Max Life +2",
    bespokeEffect: function(player) {
      player().health(player().health() + 2);
      player().maxHealth(player().maxHealth() + 2);
    }
  };

  return new Card(cardDetails);
})
