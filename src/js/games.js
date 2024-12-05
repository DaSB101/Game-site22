// Placeholder for games functionality
document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('games-container');
    const itchContainer = document.getElementById('itch-container');

    // Example local games
    const localGames = [
        { name: 'Game 1', description: 'A fun game', link: '#' },
        { name: 'Game 2', description: 'Another fun game', link: '#' }
    ];

    // Render local games
    localGames.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.innerHTML = `<h3>${game.name}</h3><p>${game.description}</p><a href="${game.link}" target="_blank">Play</a>`;
        gamesContainer.appendChild(gameDiv);
    });

    // Example Itch.io integration
    itchContainer.innerHTML = '<p>Itch.io games integration coming soon...</p>';
});
