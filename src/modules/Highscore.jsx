import React from 'react'

export function Highscore(props) {
    const { highscores } = props; // Hämta highscores från props

    return (
        <div className="highscore">
            <h1>Highscore</h1>
            {/* Loopa igenom highscores och generera playerScore components */}
            {highscores.map((player, index) => (
                <div key={index} className="player-score">
                    <h3>Player: {player.name}</h3>
                    <h3>Score: {player.score}</h3>
                </div>
            ))}
        </div>
    );
}

