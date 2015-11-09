define(["ko", "util/min"], function(ko, min) {
  return function(name) {
    var maxHealth = ko.observable(10);

    var stats = {
      name: name,
      maxHealth: maxHealth,
      health: ko.observable(maxHealth()),
      points: ko.observable(0),
      energy: ko.observable(0),
      currentPlayer: ko.observable(false),
      isInTokyo: ko.observable(false),
      cards: ko.observableArray(),
      rerolls: ko.observable(2),
      dice: ko.observable(6),
      additionalScoring: ko.observableArray()
    }

    stats.resolve = function(scores) {
      if (stats.alive()) {
        stats.points(stats.points() + scores.pointsWon);
        stats.energy(stats.energy() + scores.energyGained);

        if (!stats.isInTokyo()) {
          stats.health(min(stats.health() + scores.healedFor, maxHealth()));
        }
      }
    }

    stats.addPoints = function(points) {
      if (stats.alive()) {
        stats.points(stats.points() + points)
      }
    }

    stats.takeDamage = function(damage) {
      if (stats.alive()) {
        stats.health(stats.health() - damage);
      }
    }

    stats.alive = ko.computed(function() {
      return stats.health() > 0;
    })

    return stats;
  }
})
