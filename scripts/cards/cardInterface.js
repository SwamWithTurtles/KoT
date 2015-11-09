define([], function() {
  var Card = function(cardDetails, bespokeEffect) {return {
    name: cardDetails.name,
    cost: cardDetails.cost,
    effect: cardDetails.effect,
    keep: cardDetails.keep,
    shortEffect: cardDetails.shortEffect,
    buy: function(cardDeck, player, allPlayers, rolling, turnEnd) {
      if(cardDetails.keep) { player().cards.push(this) };

      player().energy(player().energy() - cardDetails.cost + player().discount())
      player().addPoints(player().cardBuyReward());
      cardDeck.remove(this);

      cardDetails.bespokeEffect(player, allPlayers, rolling, turnEnd);
    }
  }};

  return Card;
})
