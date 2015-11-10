define(["cards/cardInterface", "lodash"], function(Card, _) {

  var cardDetails = {
    name: "Rooting for the Underdog",
    cost: 3,
    keep: true,
    effect: "At the end of a turn when you have the fewest points, gain 1 points.",
    shortEffect: "Lowest points = 1 point each turn",
    bespokeEffect: function(player, allPlayers) {
      var currentPlayer = player();
      var isLowest = function() {
        var allPoints = _.map(allPlayers, function(x) {return x.points()});
        return currentPlayer.points() === _.min(allPoints)
        return true;
      }

      var addPoints = function(_player, allPlayers) {
        if(isLowest()) {
          currentPlayer.addPoints(1);
        }
      }

      currentPlayer.endTurnHooks.push(addPoints);
    }
  };

  return new Card(cardDetails);
})
