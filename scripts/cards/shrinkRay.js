define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};

  var cardDetails = {
    name: "Shrink Ray",
    cost: 6,
    keep: true,
    effect: "When you deal damage to monsters give them a shrink counter. A monster rolls one less die for each shrink counter. You can get rid of a shrink counter with a [Heart] (that [Heart] doesn't heal a damage also).",
    shortEffect: "Dealing Damage gives Shrink Tokens",
    bespokeEffect: function(player) {
      player().additionalScoring.push(
        function(dice) {
          return {
            points: 0,
            attack: 0,
            energy: 0,
            heal: 0,
            shrinkTokens: existsAmongDice(dice, "Paw") ? 1 : 0
          }
        }
      );
    }
  };

  return new Card(cardDetails);
})
