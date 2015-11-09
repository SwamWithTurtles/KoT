define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Dedicated News Team",
    cost: 3,
    keep: true,
    shortEffect: "Buy a card = 1 point",
    effect: "Gain 1 point whenever you buy a card",
    bespokeEffect: function(player) {
      player().cardBuyReward(player().cardBuyReward() + 1);
    }
  };

  return new Card(cardDetails);
})
