define(["ko", "lodash",
"cards/moreLife", "cards/allDifferent", "cards/damageAll",
"cards/additionalReroll", "cards/extraDice"], function(ko, _, moreLife, allDifferent, damageAll, additionalReroll, extraDice) {

  var cardsInDeck = [moreLife, allDifferent, damageAll, additionalReroll, extraDice];
  var cardsToSell = ko.observableArray([]);

  var addCardToSell = function() {
      if(cardsInDeck.length === 0) { return; }

      var ix = _.random(0, cardsInDeck.length - 1);
      cardsToSell.push(cardsInDeck[ix]);
      cardsInDeck.splice(ix, 1);
  }

  //Start With Three Cards to Sell
  _.times(3, addCardToSell);

  return function() { return {
    cardsToSell: cardsToSell,
    remove: function(card) {
      cardsToSell.remove(card);
      addCardToSell();
    }
  }};

})
