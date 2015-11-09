define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Heal",
    cost: 3,
    keep: false,
    effect: "Heal 2 damage",
    bespokeEffect: function(player) {
      player().heal(2);
    }
  };

  return new Card(cardDetails);
})
