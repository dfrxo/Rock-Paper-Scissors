console.log("Hello World");

function getComputerChoice(){
    var plays = ["Rock","Paper","Scissors"];
    var ran = Math.floor(Math.random()*3);
    console.log(plays[ran]);
    return plays[ran];
}


getComputerChoice();
console.log(Math.floor(Math.random()*3));