function validateInput(input) {
    return (input === 'rock' || input === 'paper' || input === 'scissors');
}

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * 3); // 0, 1 or 2
    return options[rand];
}

// Return 0 if a tie, 1 if player wins, and 2 if computer wins.
function playRound(pSelection, cSelection) {
    if (pSelection === cSelection) {
        console.log("It's a tie. Play again.");
        return 0;
    } else if ( (pSelection === 'rock' && cSelection === 'scissors') ||
        (pSelection === 'paper' && cSelection === 'rock') ||
        (pSelection === 'scissors' && cSelection === 'paper') ) {
        console.log(`You win! ${capitalizeFirstLetter(pSelection)} ` +
            `beats ${capitalizeFirstLetter(cSelection)}.`);
        return 1;
    } else {
        console.log(`You lose! ${capitalizeFirstLetter(cSelection)} ` +
            `beats ${capitalizeFirstLetter(pSelection)}.`);
        return 2;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game(numOfRounds) {

    let pWins = 0;
    let cWins = 0;

    for (let i = 0; i < numOfRounds; i++) {
        let playerSelection = prompt('Make your choice: rock, paper, or scissors?');

        while (!validateInput(playerSelection)) {
            playerSelection = prompt('Invalid input. Type "rock", "paper" or "scissors".');
        }

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

game(5);




