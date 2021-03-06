define(["ko"], function(ko) {

  return function(playerList) {
    var legacyNumAlive = playerList.length; //This is used to trigger correctly when multiple die at the same time.

    var setActivePlayer = function() {
      _.forEach(playerList, function(player, ix) {
        setAsActivePlayer(player, playerIndex() === ix);
      })
    };

    var setAsActivePlayer = function(player, bool) {
      player.currentPlayer(bool);
    };

    var playerList = playerList;

    var playerIndex = ko.observable(0);
    var currentPlayer = ko.computed(function() {
      return playerList[playerIndex()]
    });

    playerIndex.subscribe(setActivePlayer)
    setActivePlayer();

    var alivePlayers = ko.computed(function() {return _.filter(playerList, function(player) {
      return player.alive();
    }
  )});

    var gameOver = ko.computed(function() {
      return alivePlayers().length <= 1 || _.any(playerList, function(player) {
        return player.points() >= 20;
      });
    });

    gameOver.subscribe(function(val) {
      if(val) {
        alert("The Game Has Been Won!");
      }
    })

    var roster = {
      numberAlive: ko.computed(function() {
        return alivePlayers().length;
      }),
      players: playerList,
      gameOver: gameOver,
      winner: ko.computed(function() {
        if(alivePlayers().length === 1) {
          return alivePlayers()[0].name;
        }
        var winningPlayers = _.filter(alivePlayers(), function(player) {
          return player.points() >= 20
        });

        if(winningPlayers.length >= 1) {
          return _.map(winningPlayers, function(player) {return player.name}).join(", ");
        }

        return "Nobody";
      }),
      inTokyo: ko.computed(function() {
        var monster = _.find(playerList, function(player) {
          return player.isInTokyo()
        });
        return monster ? monster : {
          name: "Nobody"
        }
      }),
      advancePlayerTurn: function() {
        playerIndex((playerIndex() + 1) % playerList.length);
        while(!currentPlayer().alive()) {
          playerIndex((playerIndex() + 1) % playerList.length);
        }        
        return currentPlayer();
      },
      currentPlayer: currentPlayer,
      moveIntoTokyo: function(player) {
        player.isInTokyo(true);
        var otherPlayers = _.without(playerList, player);
        _.forEach(otherPlayers, function(otherPlayer) {
          otherPlayer.isInTokyo(false);
        });
      }
    }

    var deathTriggers = function() {
      console.log("sad");
      _.forEach(alivePlayers(), function(player) {
        player.deathTrigger();
      });
    }

    roster.numberAlive.subscribe(function(newVal, oldVal) {
      if(newVal > 1) {
        _.times(legacyNumAlive - newVal, deathTriggers)
      }
    });

    return roster;
  }
});
