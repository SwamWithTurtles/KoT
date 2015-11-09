define(["cards/cardInterface"], function(Card) {
  var cardDetails = {
    name: "Armor Plating",
    cost: 4,
    keep: true,
    shortEffect: "Ignore damage of 1",
    effect: "Ignore damage of 1",
    bespokeEffect: function(player) {
      player().armorPlating(true);
    }
  };

  return new Card(cardDetails);
})
