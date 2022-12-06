function getComputerChoice() {

    let randInt = Math.floor(Math.random() * 3);
    let choice = "";

    if (randInt === 0){
        choice = "Rock";
    }
    else if (randInt === 1){
        choice = "Paper";
    }
    else{
        choice = "Scissors";
    }

 return choice;
}

function playRound() {

}

function game() {

}

getComputerChoice();