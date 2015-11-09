define(["ko", "lodash",
"cards/completeDestruction", "cards/evenBigger", "cards/extraHead",
"cards/gasRefinery", "cards/giantBrain", "cards/apartmentBuilding",
"cards/alienMetabolism", "cards/alphaMonster", "cards/acidAttack",
"cards/commuterTrain", "cards/cornerStore", "cards/energize",
"cards/herbivore"],
function(ko, _,
  completeDestruction, evenBigger, extraHead,
  gasRefinery, giantBrain, apartmentBuilding,
  alienMetabolism, alphaMonster, acidAttack,
  commuterTrain, cornerStore, energize,
  herbivore) {

  var cardsInDeck = [completeDestruction, evenBigger, extraHead, gasRefinery,
    giantBrain, apartmentBuilding, alienMetabolism, alphaMonster,
    acidAttack, commuterTrain, cornerStore, energize, herbivore];
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
