define(["ko", "lodash",
"cards/completeDestruction", "cards/evenBigger", "cards/extraHead",
"cards/gasRefinery", "cards/giantBrain", "cards/apartmentBuilding",
"cards/alienMetabolism", "cards/alphaMonster", "cards/acidAttack",
"cards/commuterTrain", "cards/cornerStore", "cards/energize",
"cards/herbivore", "cards/jetFighters", "cards/nationalGuard",
"cards/omnivore", "cards/poisonQuills", "cards/rapidHealing",
"cards/regeneration", "cards/skyscraper", "cards/spikedTail",
"cards/tanks", "cards/vastStorm", "cards/evacuationOrders",
"cards/energyHoarder", "cards/friendOfChildren", "cards/dedicatedNewsTeam",
"cards/fireBlast", "cards/armorPlating", "cards/gourmet",
"cards/highAltitudeBombing", "cards/heal", "cards/nuclearPowerPlant",
"cards/plotTwist", "cards/telepath", "cards/stretchy",
"cards/smokeCloud", "cards/dropFromHighAltitude", "cards/solarPowered",
"cards/rootingForTheUnderdog", "cards/urbavore", "cards/eaterOfTheDead",
"cards/shrinkRay"],
function(ko, _,
  completeDestruction, evenBigger, extraHead,
  gasRefinery, giantBrain, apartmentBuilding,
  alienMetabolism, alphaMonster, acidAttack,
  commuterTrain, cornerStore, energize,
  herbivore, jetFighters, nationalGuard,
  omnivore, poisonQuills, rapidHealing,
  regeneration, skyscraper, spikedTail,
  tanks, vastStorm, evacuationOrders,
  energyHoarder, friendOfChildren, dedicatedNewsTeam,
  fireBlast, armorPlating, gourmet,
  highAltitudeBombing, heal, nuclearPowerPlant,
  plotTwist, telepath, stretchy,
  smokeCloud, dropFromHighAltitude, solarPowered,
  rootingForTheUnderdog, urbavore, eaterOfTheDead,
  shrinkRay) {

  var cardsInDeck = [completeDestruction, evenBigger, extraHead, gasRefinery,
    giantBrain, apartmentBuilding, alienMetabolism, alphaMonster,
    acidAttack, commuterTrain, cornerStore, energize, herbivore,
    jetFighters, nationalGuard, omnivore, poisonQuills, rapidHealing,
    regeneration, skyscraper, spikedTail, tanks, vastStorm, evacuationOrders,
    energyHoarder, friendOfChildren, dedicatedNewsTeam, fireBlast, armorPlating,
    gourmet, highAltitudeBombing, heal, nuclearPowerPlant, plotTwist, telepath,
    stretchy, smokeCloud, dropFromHighAltitude, solarPowered, rootingForTheUnderdog,
    urbavore, eaterOfTheDead];
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
