function getComputerChoice() {


    let randInt = Math.floor(Math.random() * 3);
    let choice = "";

    if (randInt === 0){
        choice = "rock";
    }
    else if (randInt === 1){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }

 return choice;
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    return choice
}

function playRound(player, computer) {
    const tie = "You Tied!";
    const win = "You Won!";
    const loss = "You Lost!";
    
   console.log("Computer picked " + computer);


    if (player === computer){
        return tie;
    }

    switch (player) {
        case "rock":
            switch (computer){
                case "paper":
                    return loss;
                case "scissors":
                    return win;
            }

        case "paper":
            switch (computer){
                case "rock":
                    return win;
                case "scissors":
                    return loss;
            }
        case "scissors":
            switch (computer){
                case "rock":
                    return loss;
                case "paper":
                    return win;
            }
    }
   

}


