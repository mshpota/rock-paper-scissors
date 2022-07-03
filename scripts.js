const message = document.createElement('p');
message.setAttribute('style', 'font-size: 3em; margin: 1em 0em; text-align: center');

const score = document.createElement('p');
let pWins = 0;
let cWins = 0;
score.textContent = `${pWins} : ${cWins}`;
score.setAttribute('style', 'font-size: 5em; text-align: center; margin: 0px');

const div = document.createElement('div');
div.setAttribute('style', 'display: flex; flex-direction: column');
div.appendChild(message);
div.appendChild(score);

const body = document.querySelector('body');
body.appendChild(div);

const buttons = document.querySelectorAll('button');

function addResetButton() {
    const resetButton = document.createElement('button');
    resetButton.classList.add('resetButton');
    resetButton.textContent = 'Play again?';
    message.appendChild(resetButton);
    resetButton.addEventListener('click', startGame);
}

function stopGame() {
    buttons.forEach((button) => button.removeEventListener('click', eventHandler));
}

function playRound(pSelection, cSelection) {
    let winMessage;

    if (pSelection === cSelection) {
        winMessage = "It's a tie. Play again.";
    } else if ( (pSelection === 'Rock' && cSelection === 'Scissors') ||
        (pSelection === 'Paper' && cSelection === 'Rock') ||
        (pSelection === 'Scissors' && cSelection === 'Paper') ) {
        winMessage = `You win! ${pSelection} ` + `beats ${cSelection}.`;
        pWins++;
    } else {
        winMessage = `You lose! ${cSelection} ` + `beats ${pSelection}.`;
        cWins++;
    }

    if (pWins === 5) {
        message.textContent = 'YOU WON!!!';
        message.style.color = 'red';
        stopGame();
        addResetButton();
    } else if (cWins === 5) {
        message.textContent = 'YOU LOST =(';
        message.style.color = 'brown';
        stopGame();
        addResetButton();
    } else
        message.textContent = winMessage;

    score.textContent = `${pWins} : ${cWins}`;
}

function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * 3); // 0, 1 or 2
    return options[rand];
}

const eventHandler = (e) => {
    let playerSelection = e.target.textContent;
    playRound(playerSelection, computerPlay());
};

function startGame() {
    message.textContent = 'Make your choice';
    message.style.color = 'black';
    buttons.forEach((button) => {
            button.addEventListener('click', eventHandler);
    });

    pWins = 0;
    cWins = 0;
    score.textContent = `${pWins} : ${cWins}`;
}

startGame();

