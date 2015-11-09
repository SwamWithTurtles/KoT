define(["ko", "cards/cardInterface"], function(ko, Card) {

  var cardDetails = {
    name: "Plot Twist",
    cost: 3,
    keep: true,
    effect: "Change one die to any result. Discard when used.",
    shortEffect: "Change a die (1-use)",
    bespokeEffect: function(player, allPlayers, rolling, turnEnd) {
      var currentPlayer = player();
      var canActivate = ko.computed(function() {
        return !turnEnd.pointsTallied();
      });

      var act = {
        effectName: "Change a Die",
        canActivate: canActivate,
        effect: function() {
          if(canActivate()) {
            rolling.changingRoll(true);
            currentPlayer.cards.remove(function(x) {return x.name === "Plot Twist"})
            currentPlayer.activations.remove(function(x) {return x.effectName === "Change a Die"})
          }
        }
      };

      player().activations.push(act);
    }
  };

  return new Card(cardDetails);
})
