define(["ko", "cards/cardInterface"], function(ko, Card) {

  var cardDetails = {
    name: "Stretchy",
    cost: 3,
    keep: true,
    effect: "You can spend 2 Energy to change one of your dice to any result.",
    shortEffect: "Change your die (2 Energy)",
    bespokeEffect: function(player, allPlayers, rolling, turnEnd) {
      var currentPlayer = player();
      var canActivate = ko.computed(function() {
        return currentPlayer.energy() >= 2 && !turnEnd.pointsTallied() && currentPlayer.currentPlayer();
      });

      var act = {
        effectName: "Change your Die (2 Energy)",
        canActivate: canActivate,
        effect: function() {
          if(canActivate()) {
            rolling.changingRoll(true);
            currentPlayer.energy(currentPlayer.energy() - 2);
          }
        }
      };

      player().activations.push(act);
    }
  };

  return new Card(cardDetails);
})
