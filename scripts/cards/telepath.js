define(["ko", "cards/cardInterface"], function(ko, Card) {

  var cardDetails = {
    name: "Telepath",
    cost: 4,
    keep: true,
    effect: "Spend one energy to get one extra reroll",
    shortEffect: "Reroll for 1 Energy",
    bespokeEffect: function(player, allPlayers, rolling, turnEnd) {
      var currentPlayer = player();
      var canActivate = ko.computed(function() {
        return !turnEnd.turnOver() && currentPlayer.energy() >= 1;
      });

      var act = {
        effectName: "Reroll for 1 energy",
        canActivate: canActivate,
        effect: function() {
          if(canActivate()) {
            rolling.rerollsLeft(rolling.rerollsLeft() + 1);
            currentPlayer.energy(currentPlayer.energy() - 1);
          }
        }
      };

      player().activations.push(act);
    }
  };

  return new Card(cardDetails);
})
