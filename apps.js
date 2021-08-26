//This function randomly selects the computer's choice of rock, paper, or scissors.

function computerPlay() {
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

function userPlayComp() {
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
    
    let userPlay = userPlayComp();
    let computer_play = computerPlay();
    console.log("userPlay = " + userPlay);
    console.log("computer_play = " + computer_play);
    
        
    if (userPlay == computer_play) {
        return "It's a tie!";
    }
    else if (userPlay == "rock" && computer_play == "paper") {
        return "You lose! Paper beats rock!";
    }
    else if (userPlay == "rock" && computer_play == "scissors") {
        return "You win! Rock beats scissors!";
    }
    else if (userPlay == "paper" && computer_play == "scissors") {
        return "You lose! Scissors beats paper!";
    }
    else if (userPlay == "paper" && computer_play == "rock") {
        return "You win! Paper beats rock!";
    }
    else if (userPlay == "scissors" && computer_play == "paper") {
        return "You win! Scissors beats paper!";
    }
    else if (userPlay == "scissors" && computer_play == "rock") {
        return "You lose! Rock beats scissors!";
    }
    else {
        return "What the heck just happened? Oopsie!";
    }
}




function game() {
    
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
   console.log(playRound())
   


}

console.log(game())