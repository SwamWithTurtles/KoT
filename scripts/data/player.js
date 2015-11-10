define(["ko", "util/min"], function(ko, min) {
  return function(name) {
    var maxHealth = ko.observable(5);
    var armorPlating = ko.observable(false);
    var preventDamageThisTurn = ko.observable(false);
    var singleTurnDiceChange = ko.observable(0);

    var stats = {
      name: name,
      maxHealth: maxHealth,
      health: ko.observable(maxHealth()),
      points: ko.observable(0),
      energy: ko.observable(100),
      currentPlayer: ko.observable(false),
      isInTokyo: ko.observable(false),
      cards: ko.observableArray(),
      rerolls: ko.observable(2),
      dice: ko.observable(6),
      discount: ko.observable(0),
      cardBuyReward: ko.observable(0),
      tokyoBonus: ko.observable(2),
      shrinkTokens: ko.observable(0),
      activations: ko.observableArray(),
      armorPlating: armorPlating,
      additionalScoring: ko.observableArray(),
      endTurnHooks: ko.observableArray(),
      deathTrigger: function() {},

      //temoporary
      preventDamageThisTurn: preventDamageThisTurn,
      singleTurnDiceChange: singleTurnDiceChange,

      reset: function() {
        preventDamageThisTurn(false);
        singleTurnDiceChange(0);
      }

    }

    stats.numOfDice = ko.computed(function() {
      return stats.dice() - stats.shrinkTokens() + stats.singleTurnDiceChange()
    })

    stats.resolve = function(scores) {
      if (stats.alive()) {
        stats.points(stats.points() + scores.pointsWon);
        stats.energy(stats.energy() + scores.energyGained);
        stats.shrinkTokens(stats.shrinkTokens() - scores.shrinkTokenRemoval);

        if (!stats.isInTokyo()) {
            stats.heal(scores.healedFor);
        }
      }
    }

    stats.heal = function(heal) {
      stats.health(min(stats.health() + heal, maxHealth()));
    }

    stats.addPoints = function(points) {
      if (stats.alive()) {
        stats.points(stats.points() + points)
      }
    }

    stats.takeDamage = function(damage, shrinkTokens) {
      if (stats.alive()) {
        if(armorPlating() && damage === 1) {return;}
        if(preventDamageThisTurn()) {return;}
        if(shrinkTokens) {stats.shrinkTokens(stats.shrinkTokens() + shrinkTokens)}
        stats.health(stats.health() - damage);
      }
    }

    stats.alive = ko.computed(function() {
      return stats.health() > 0;
    })

    return stats;
  }
})
