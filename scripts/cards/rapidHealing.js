define(["ko", "cards/cardInterface", "util/min"], function(ko, Card, min) {

  var cardDetails = {
    name: "Rapid Healing",
    cost: 3,
    keep: true,
    effect: "Spend 2 energy at any time to heal 1 damage",
    shortEffect: "2 energy -> 1 health",
    bespokeEffect: function(player) {
      var currentPlayer = player();
      var canActivate = ko.computed(function() {
        return currentPlayer.energy() > 2 && currentPlayer.health() < currentPlayer.maxHealth();
      });

      player().activations.push(
        {
          effectName: "Heal for 2 energy (Rapid Healing)",
          canActivate: canActivate,
          effect: function() {
            if(canActivate()) {
            currentPlayer.energy(currentPlayer.energy() - 2);
            currentPlayer.health(min(currentPlayer.health() + 1, currentPlayer.maxHealth()));
          }
        }}
      );
    }
  };

  return new Card(cardDetails);
})
