import { Game } from './engine.js';
import { Background } from './Background.js';
const element = document.getElementById('game');

try {
        console.log('HELP ME MAKE PONG2 AND SUFFER WITH ME!');
        const game = new Game(element, 900, 700);
        game.start(Background);
} catch (e) {
        element.innerHTML = `<div id="error"><h1>Game Error</h1><p>${e}</p></div>`;
}
