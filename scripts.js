function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * 3); // 0, 1 or 2
    return options[rand];
}


// Return 0 if a tie, 1 if player wins, and 2 if computer wins.
function playRound(pSelection, cSelection) {
    let winMessage;

    if (pWins >= 5 || cWins >= 5) {
        pWins = 0;
        cWins = 0;
    }
    
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

    if (pWins === 5)
        message.textContent = 'YOU WON!!!';
    else if (cWins === 5)
        message.textContent = 'YOU LOST! =(';
    else
        message.textContent = winMessage;

    score.textContent = `${pWins} : ${cWins}`;
}

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);

const score = document.createElement('p');
const message = document.createElement('p');
div.appendChild(message);
div.appendChild(score);

let playerSelection;
let pWins = 0;
let cWins = 0;
score.textContent = `${pWins} : ${cWins}`;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        playRound(playerSelection, computerPlay());
    });
});

function game(numOfRounds) {

    let pWins = 0;
    let cWins = 0;

    for (let i = 0; i < numOfRounds; i++) {
        let computerSelection = computerPlay();
        let response = playRound(playerSelection, computerSelection);

        if (response === 1)
            pWins++;
        else if (response === 2)
            cWins++;
    }

    // if (pWins > cWins)
    //     p.textContent = 'YOU WON!';
    // else if (pWins < cWins)
    //     p.textContent = 'YOU LOST!';
    // else
    //     p.textContent = 'IT\'S A TIE';
}





