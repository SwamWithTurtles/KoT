define(["ko", "lodash", "data/die"], function(ko, _, Die) {
  return function(dice) {
    var rerollsLeft = ko.observable(2);

    var reroll = function() {
      var newDice = _.map(dice(), function(die) {
        return die.kept() ? die : new Die();
      });

      rerollsLeft(rerollsLeft() - 1);
      dice(newDice);
    }

    return {
      rerollsLeft: rerollsLeft,
      reroll: reroll,
      resetRerolls: function(rolls, numOfDice) {
        rerollsLeft(rolls);
        dice(_.map(_.fill(Array(numOfDice), "1"), function() {return new Die()}));
      }
    }
  }
})
