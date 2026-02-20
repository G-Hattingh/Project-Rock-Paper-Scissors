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
};

function playGame() {
    const computerScore = 0;
    const humanScore = 0;

        function playRound(computerChoice, humanChoice) {
                computerChoice = getComputerChoice();
                // humanChoice is now case-insensitive 
                humanChoice = humanChoice.toLowerCase();

                if (humanChoice === computerChoice) {
                    console.log("No Points Awarded"); }

                 else if (humanChoice === "rock" && computerChoice ===      "scissors"                                        ||
                     humanChoice === "paper" && computerChoice === "rock"                                        ||
                     humanChoice === "scissors" && computerChoice === "paper" ) {
                    humanScore++;
                    console.log("You: " + humanScore + " / Computer: " + computerScore);}

                else {
                    computerScore++;
                    console.log("You: " + humanScore + " / Computer: " + computerScore);}}


    for (let i = 0; i < 5; i++) {
         const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
            }

    if(humanScore === computerScore) {

         console.log("You Tied: Play Again"); 
        }
    else if (humanScore > computerScore) {

         console.log("You Won: Congratulations");
         }
     else {

         console.log("You lose: Try Again");
        }

 return "Final Score:  You: " + humanScore + " / Computer: " + computerScore;

};