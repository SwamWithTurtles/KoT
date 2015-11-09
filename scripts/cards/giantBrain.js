define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Giant Brain",
    cost: 5,
    keep: true,
    shortEffect: "+1 reroll",
    effect: "You have one extra reroll each turn.",
    bespokeEffect: function(player) {
      player().rerolls(player().rerolls() + 1);
    }
  };

  return new Card(cardDetails);
})
