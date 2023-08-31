console.log("Hello World");

function getComputerChoice(){
    var plays = ["rock","paper","scissors"];
    var ran = Math.floor(Math.random()*3);
    return plays[ran];
}

function playGame(){
    var computerChoice = getComputerChoice();
    var playerSelection;

    while(playerSelection!== "rock" && playerSelection!== "paper" && playerSelection !== "scissors"){
        playerSelection = prompt("Rock, paper, or scissors?")
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection!== "rock" && playerSelection!== "paper" && playerSelection !== "scissors"){
            console.log("Must enter rock, scissors, or paper!!!");
        }
    }


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
function game(){
    for(var i = 0; i < 5; i++){
        console.log(playGame());
    }
}
//var choice = document.getElementById("submit");
game();
