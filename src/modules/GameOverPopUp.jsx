import React from 'react';

export function GameOverPopup(props) {
    const { causeOfDeath } = props;

    return (
        <div className="game-over-popup">
            <h1>GAME OVER</h1>
            <h3>Player: {props.player.name}</h3>
            <h3>Score: {props.player.score}</h3>
            <p>Died through {causeOfDeath}</p>
            <div className="buttons">
                <button>Start Over</button>
                <button>Quit</button>
            </div>
        </div>
    );
}

