import React from 'react'; // importerar react-library
import ReactDOM from 'react-dom'; // rendera vår React-app i HTML-dokumentet.
import './css/style.css';
import {GameOverPopup} from './modules/GameOverPopup';
import {Highscore} from "./modules/Highscore";
import {createRoot} from "react-dom/client";

function App() {

    const highscores = [
        {name: 'Bettina', score: 9999999}, {name: 'Jeremias', score: 500}
    ];


    return (
        <div className="App">
            {/* Användningen av GameOverPopup med props */}

            <GameOverPopup
                player={{ name: "Super Mario", score: 500 }} // Skapa ett objekt som representerar spelaren
                causeOfDeath="Fell into a pit"
            />


            {/* Använd Highscore-komponenten och skicka med highscores som props */}
            <Highscore highscores={highscores} />

        </div>
    );
}



const root = createRoot( document.querySelector('#root'));
root.render( <App/> );

// createRoot används för att skapa en rotnod
// render används för att rendera appen.