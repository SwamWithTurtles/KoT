define([], function() {
  return function(playerDetails, scores) {
    var currentPlayer = playerDetails.currentPlayer();
    var currentPlayerInTokyo = (playerDetails.inTokyo().name === "Nobody") ? undefined : playerDetails.inTokyo();
    var isCurrentPlayerInTokyo = currentPlayer.isInTokyo();

    var numberOfPaws = scores.attackPower;

    if(numberOfPaws === 0) {
      //No attack power
      return {
        disputedTokyo: false
      };
    }

    if(currentPlayerInTokyo && !isCurrentPlayerInTokyo) {
        //There is someone in Tokyo, but it's not me.
        currentPlayerInTokyo.takeDamage(numberOfPaws);

        if(!currentPlayerInTokyo.alive()) {
        //You have killed the current Tokyo player
        currentPlayer.isInTokyo(true);
        currentPlayerInTokyo.isInTokyo(false);

        return {
          disputedTokyo: false
        }
        }

        return {
          disputedTokyo: scores.canYield
        };
    }

    if(isCurrentPlayerInTokyo) {
      //I am in Tokyo
      var allOtherPlayers = _.without(playerDetails.players, currentPlayer);
      _.forEach(allOtherPlayers, function(player) {
        player.takeDamage(numberOfPaws);
      })
      return {
        disputedTokyo: false
      };
    }

    if(!currentPlayerInTokyo) {
      //There is no current player in Tokyo
      currentPlayer.isInTokyo(true);
      currentPlayer.addPoints(1);
      return{
        disputedTokyo: false
      };
    }
  }
})
