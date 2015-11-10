requirejs.config({
    baseUrl: 'scripts',
    paths: {
        ko: '../bower_components/knockout/dist/knockout',
        lodash: '../bower_components/lodash/lodash'
    }
});

requirejs(["ko", "lodash", "phases/rolling", "phases/turnEnd", "data/die", "data/player", "data/playerRoster", "data/cardDeck"], function(ko, _, rolling, turnEnd, Die, Player, PlayerRoster, CardDeck) {


    var dave = new Player("Dave");
    var opponent = new Player("Alex");
    var opponent2 = new Player("Monster B");

    var playerRoster = new PlayerRoster([dave, opponent, opponent2]);

    var dice = ko.observable();

    var rerollingModel = rolling(dice);
    rerollingModel.resetRerolls(playerRoster.currentPlayer().rerolls(), playerRoster.currentPlayer().dice() - playerRoster.currentPlayer().shrinkTokens());

    var turnEndModel = turnEnd(dice, playerRoster, rerollingModel.resetRerolls);

    var viewModel = {
        playerDetails: playerRoster,
        dice: dice,
        cardDeck: new CardDeck(),

        rolling: rerollingModel,
        turnEnd: turnEndModel
    };



    ko.applyBindings(viewModel);
});
