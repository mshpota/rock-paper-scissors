function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * 3); // 0, 1 or 2
    return options[rand];
}

// Return 0 if a tie, 1 if player wins, and 2 if computer wins.
function playRound(pSelection, cSelection) {
    if (pSelection === cSelection) {
        console.log("It's a tie. Play again.");
        return 0;
    } else if ( (pSelection === 'Rock' && cSelection === 'Scissors') ||
        (pSelection === 'Paper' && cSelection === 'Rock') ||
        (pSelection === 'Scissors' && cSelection === 'Paper') ) {
        console.log(`You win! ${pSelection} ` + `beats ${cSelection}.`);
        return 1;
    } else {
        console.log(`You lose! ${cSelection} ` + `beats ${pSelection}.`);
        return 2;
    }
}

const buttons = document.querySelectorAll('button');


let playerSelection;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        game(1);
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

    if (pWins > cWins)
        console.log('YOU WON!');
    else if (pWins < cWins)
        console.log('YOU LOST!');
    else
        console.log('IT\'S A TIE');
}





