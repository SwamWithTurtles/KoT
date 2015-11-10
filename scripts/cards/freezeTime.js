define(["cards/cardInterface", "util/diceCount"], function(Card, diceCount, min) {

  var existsAmongDice = function(dice, sym) {return diceCount.symbolCount(dice, sym) >= 1};


  var cardDetails = {
    name: "Freeze Time",
    cost: 5,
    keep: true,
    effect: "On a turn where you score [1][1][1], you can take another turn with one less die.",
    shortEffect: "111 = Extra Turn with One Less Die",
    bespokeEffect: function(player, allPlayers, rolling, turnEnd) {
      var currentPlayer = player();

      player().additionalScoring.push(
        function(dice) {
          if(diceCount.symbolCount(dice, "1") >= 3) {
            turnEnd.extraTurn(currentPlayer);
            currentPlayer.singleTurnDiceChange(dice.length - currentPlayer.dice() - 1);
          }

          return {
            points: 0,
            attack: 0,
            energy: 0,
            heal: 0
          }
        }
      );

    }
  };

  return new Card(cardDetails);
})
