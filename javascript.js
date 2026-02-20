function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    
    if (x === 0) {
        return "rock";}

    else if (x === 1) {
        return "paper";}

    else{
        return "scissors";}
};

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper, or Scissors");
    return choice;
}

const computerScore = 0;
const humanScore = 0;

function playRound(computerChoice, humanChoice) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice().toLowerCase();
}