define(["ko", "lodash", "data/die"], function(ko, _, Die) {
  return function(dice) {
    var rerollsLeft = ko.observable(2);
    var isChangingRoll = ko.observable(false);

    var KnowingDie = function() {
      var die = new Die();
      die.faceShowing.subscribe(function() {
        isChangingRoll(false);
      });
      return die;
    }

    var reroll = function() {
      var newDice = _.map(dice(), function(die) {
        return die.kept() ? die : new KnowingDie();
      });

      rerollsLeft(rerollsLeft() - 1);
      dice(newDice);
    }

    return {
      changingRoll: isChangingRoll,
      rerollsLeft: rerollsLeft,
      reroll: reroll,
      resetRerolls: function(rolls, numOfDice) {
        rerollsLeft(rolls);
        dice(_.map(_.fill(Array(numOfDice), "1"), function() {return new KnowingDie();}));
      }
    }
  }
})
