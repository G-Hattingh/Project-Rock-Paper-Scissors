function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    
    if (x === 0) {
        return "rock";}

    else if (x === 1) {
        return "paper";}

    else{
        return "scissors";}
};

const button = document.querySelectorAll(".rps-btn"); 
button.forEach(button =>
    button.addEventListener("click", makeSelection)
); 

function makeSelection(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();

    console.log("Player: ", playerChoice);
    console.log("Computer: ", computerChoice);

    playRound(playerChoice, computerChoice);
}

function playRound(player, computer) {
    if (player === computer) {
        console.log("Tie!");
    }
    else if(player === "rock" && computer === "scissors" ||
            player === "paper" && computer === "rock" ||
            player === "scissors" && computer === "paper"
     ) {
        console.log("You Win!");
     }
     else {
        console.log("You Lose!");
     }
};





// function playGame() {
//     let computerScore = 0;
//     let humanScore = 0;

//         function playRound(computerChoice, humanChoice) {
//                 computerChoice = getComputerChoice();
//                 // humanChoice is now case-insensitive 
//                 humanChoice = humanChoice.toLowerCase();

//                 if (humanChoice === computerChoice) {
//                     console.log("No Points Awarded"); }

//                  else if (humanChoice === "rock" && computerChoice ===      "scissors"                                        ||
//                      humanChoice === "paper" && computerChoice === "rock"                                        ||
//                      humanChoice === "scissors" && computerChoice === "paper" ) {
//                     humanScore++;
//                     console.log("You: " + humanScore + " / Computer: " + computerScore);}

//                 else {
//                     computerScore++;
//                     console.log("You: " + humanScore + " / Computer: " + computerScore);}}


//     // for (let i = 0; i < 5; i++) {
//     //      const humanSelection = getHumanChoice();
//     //     const computerSelection = getComputerChoice();
//     //     playRound(humanSelection, computerSelection);
//     //         }

//     // if(humanScore === computerScore) {

//     //      console.log("You Tied: Play Again"); 
//     //     }
//     // else if (humanScore > computerScore) {

//     //      console.log("You Won: Congratulations");
//     //      }
//     //  else {

//     //      console.log("You lose: Try Again");
//     //     }

//  console.log("Final Score:  You: " + humanScore + " / Computer: " + computerScore); 

// };
// playGame();