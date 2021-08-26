//This function randomly selects the computer's choice of rock, paper, or scissor

function computerPlay() {
    const randomNumber = (Math.floor(Math.random() * 3));
    
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


//This function prompts the user for a choice of rock, paper, or scissors, and then call the computerPlay function to play one round against the users selection.

function userPlay() {
    let userSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    if (userSelection == "rock" || userSelection == "paper" || userSelection == "scissors") {
        return userSelection;
    }
    else {
        return "Valid response required - please enter rock, paper, or scissors";
    }
}

//This function plays a single round of rock, paper, scissors against the computer.

function playRound() {
    
    let user_play = userPlay();
    let computer_play = computerPlay();
    console.log("user_play = " + user_play);
    console.log("computer_play = " + computer_play);

    let user_score = 0;
    let computer_score = 0;

    
    if (user_play == computer_play) {
        return "It's a tie!";
    }
    else if (user_play == "rock" && computer_play == "paper") {
        computer_score += 1;
        return "You lose! Paper beats rock!";
    }
    else if (user_play == "rock" && computer_play == "scissors") {
        return "You win! Rock beats scissors!";
    }
    else if (user_play == "paper" && computer_play == "scissors") {
        return "You lose! Scissors beats papers!";
    }
    else if (user_play == "paper" && computer_play == "rock") {
        return "You win! Paper beats rock!";
    }
    else if (user_play == "scissors" && computer_play == "paper") {
        return "You win! Scissors beats paper!";
    }
    else if (user_play == "scissors" && computer_play == "rock") {
        return "You lose! Rock beats scissors!";
    }
    else {
        return "What the heck just happened? I don't know!";
    }
}

console.log(playRound())

function game() {

    playRound()

}