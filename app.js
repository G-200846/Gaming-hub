new Vue({
    el: '#app',
    data: {
        games: [
            { name: 'Chess' },
            { name: 'Tic-Tac-Toe' },
            { name: 'Checkers' },
        ]
    },
    methods: {
        playGame(gameName) {
            alert(`Starting the game: ${gameName}`);
            // Logic to start the online game
        }
    }
});
