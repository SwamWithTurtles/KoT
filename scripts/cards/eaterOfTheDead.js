define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Eater of the Dead",
    cost: 4,
    keep: true,
    effect: "Gain 3 points every time a monster's health goes to 0.",
    shortEffect: "Monster dies = 3 points",
    bespokeEffect: function(player) {
      var currentPlayer = player();
      currentPlayer.deathTrigger = function() {
        currentPlayer.addPoints(3);
      };
    }
  };

  return new Card(cardDetails);
})
