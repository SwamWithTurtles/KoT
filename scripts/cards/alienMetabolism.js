define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Alien Metabolism",
    cost: 3,
    keep: true,
    shortEffect: "1 Energy Discount",
    effect: "Buying cards costs you 1 less [Energy].",
    bespokeEffect: function(player) {
      player().discount(player().discount() + 1);
    }
  };

  return new Card(cardDetails);
})
