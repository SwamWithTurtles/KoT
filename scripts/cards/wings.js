define(["ko", "cards/cardInterface"], function(ko, Card) {

  var cardDetails = {
    name: "Wings",
    cost: 6,
    keep: true,
    effect: "Spend 2[Energy] to negate damage to you for a turn.",
    shortEffect: "Negate Damage for 2 Energy",
    bespokeEffect: function(player, allPlayers, rolling, turnEnd) {
      var currentPlayer = player();
      var canActivate = ko.computed(function() {
        return !currentPlayer.preventDamageThisTurn() && currentPlayer.energy() >= 2;
      });

      var act = {
        effectName: "Negate Damage for 2 energy",
        canActivate: canActivate,
        effect: function() {
          if(canActivate()) {
            currentPlayer.preventDamageThisTurn(true);
            currentPlayer.energy(currentPlayer.energy() - 2);
          }
        }
      };

      player().activations.push(act);
    }
  };

  return new Card(cardDetails);
})
