function getComputerChoice () {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return "Computer chose Rock";
    } else if  (x ===1) {
        return "Computer chose Paper";
    } else {
        return "Computer chose Scissors";
    }
}