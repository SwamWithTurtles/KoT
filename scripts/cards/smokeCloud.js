define(["ko", "cards/cardInterface"], function(ko, Card) {

  var cardDetails = {
    name: "Smoke Cloud",
    cost: 4,
    keep: true,
    effect: "This card starts with 3 charges. Spend a charge for an extra reroll. Discard this card when all charges are spent.",
    shortEffect: "One More Reroll (3 Charges)",
    bespokeEffect: function(player, allPlayers, rolling, turnEnd) {
      var currentPlayer = player();
      var charges = ko.observable(3);
      var canActivate = ko.computed(function() {
        return !turnEnd.turnOver() && currentPlayer.currentPlayer() && charges() > 0;
      });

      var act = {
        effectName: ko.computed(function() { return "Reroll for 1 charge (" + charges() + " charges left)" }),
        canActivate: canActivate,
        effect: function() {
          if(canActivate()) {
            rolling.rerollsLeft(rolling.rerollsLeft() + 1);
            charges(charges() - 1);

            if(charges() === 0) {
              currentPlayer.cards.remove(function(x) {return x.name === "Smoke Cloud"})
              currentPlayer.activations.remove(function(x) {return x.effectName() === "Reroll for 1 charge (0 charges left)"})
            }
          }
        }
      };

      player().activations.push(act);
    }
  };

  return new Card(cardDetails);
})
