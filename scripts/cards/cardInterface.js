define([], function() {
  var Card = function(cardDetails, bespokeEffect) {return {
    name: cardDetails.name,
    cost: cardDetails.cost,
    effect: cardDetails.effect,
    shortEffect: cardDetails.shortEffect,
    buy: function(player, cardDeck) {
      player().cards.push(this);
      player().energy(player().energy() - cardDetails.cost)
      cardDeck.remove(this);

      cardDetails.bespokeEffect(player);
    }
  }};

  return Card;
})
