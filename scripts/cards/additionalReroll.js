define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Additional Reroll",
    cost: 2,
    keep: true,
    shortEffect: "+1 reroll",
    effect: "You have an additional reroll each turn",
    bespokeEffect: function(player) {
      player().rerolls(player().rerolls() + 1);
    }
  };

  return new Card(cardDetails);
})
