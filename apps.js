//This function randomly selects the computer's choice of rock, paper, or scissors.

function getComputerSelection() {
    let randomNumber = (Math.floor(Math.random() * 3));
    
    if (randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


//This function prompts the user for a choice of rock, paper, or scissors.

function getUserSelection() {
    let userSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    if (userSelection == "rock" || userSelection == "paper" || userSelection == "scissors") {
        return userSelection;
    }
    else {
        alert("Nice try - the only valid weapons here are rock, paper, or scissors");
        return;
    }
}

//This function plays a single round of rock, paper, scissors using the user and computer choices.

function playRound() {
    
    let userSelection = getUserSelection();
    let computerSelection = getComputerSelection();
    console.log("userSelection = " + userSelection);
    console.log("computerSelection = " + computerSelection);
    
        
    if (userSelection == computerSelection) {
        return "It's a tie!";
    }
    else if (userSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock!";
    }
    else if (userSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors!";
    }
    else if (userSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper!";
    }
    else if (userSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock!";
    }
    else if (userSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper!";
    }
    else if (userSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors!";
    }
    else {
        return "What the heck just happened? Oopsie!";
    }
}




function playGame() {
    
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
   


}

console.log(playGame())