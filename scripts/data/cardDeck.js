define(["ko", "lodash",
"cards/completeDestruction", "cards/evenBigger", "cards/extraHead",
"cards/gasRefinery", "cards/giantBrain", "cards/apartmentBuilding"], function(ko, _, completeDestruction, evenBigger, extraHead, gasRefinery, giantBrain, apartmentBuilding) {

  var cardsInDeck = [completeDestruction, evenBigger, extraHead, gasRefinery, giantBrain, apartmentBuilding];
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
