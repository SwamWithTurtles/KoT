define(["lodash"], function(_) {
  var numberOfDiceWithSymbol = function(dice, symbol) {
    var relevantDice = _.filter(dice, function(die) {
      return die.faceShowing() === symbol;
    });
    return relevantDice.length;
  }

  return {
    symbolCount: numberOfDiceWithSymbol
  }
})
