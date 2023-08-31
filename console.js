console.log("Hello World");

function getComputerChoice(){
    var plays = ["rock","paper","scissors"];
    var ran = Math.floor(Math.random()*3);
    return plays[ran];
}

function playGame(playerSelection){
    var computerChoice = getComputerChoice();
    console.log(playerSelection);
    console.log(computerChoice);
    if(playerSelection === "rock"){
        if(computerChoice === "scissors"){
            return "You win! Rock beats scissors";
        }
        else if(computerChoice === "paper"){
            return "You lose! Paper beats rock";
        }
        else{
            return "Tie!"
        }
    }
    if(playerSelection === "scissors"){
        if(computerChoice === "paper"){
            return "You win! Scissors beats rock";
        }
        else if(computerChoice === "rock"){
            return "You lose! Rock beats scissors";
        }
        else{
            return "Tie!"
        }
    }
    if(playerSelection === "paper"){
        if(computerChoice === "rock"){
            return "You win! Paper beats rock";
        }
        else if(computerChoice === "scissors"){
            return "You lose! Scissor beats paper";
        }
        else{
            return "Tie!"
        }
    }   
}

var str = playGame("paper");
console.log(str);