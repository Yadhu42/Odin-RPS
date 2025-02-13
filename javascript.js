// 0 is Rock, 1 is Paper, 2 is scissors

let compScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    
    if(compChoice === 0){
        console.log("The computer plays Rock");
        return "rock";
    }
    else if(compChoice === 1){
        console.log("The computer plays Paper");
        return "paper";
    }
    else if(compChoice === 2){
        console.log("The computer plays Scissors");
        return "scissors";
    }
}

function getPlayerChoice(){

    let playerChoice = prompt("YOUR TURN. (ROCK, PAPER or SCISSORS)");
    let pc = playerChoice.toLowerCase();

    if(pc==="rock"){
        console.log("You played Rock");
        return "rock";
    }
    else if(pc==="paper"){
        console.log("You played Paper");
        return "paper";
    }
    else if(pc==="scissors" || pc==="scissor"){
        console.log("You played Scissors");
        return "scissors";
    }
    else{
        console.log("invalid entry. Refresh the page to try again");
    }

    
}

function playGame(){

    compScore = 0;
    playerScore = 0;

    for(let i=1; i<6; i++){
            console.log("waiting for player");
            let pc = getPlayerChoice();
            let cc = getComputerChoice();

            if(pc === cc){
                console.log("Draw.");
            }
            else if(pc ==="rock" && cc==="paper"){
                compScore++;
                console.log("Paper beats Rock. Computer Wins.");
            }
            else if(pc ==="rock" && cc==="scissors"){
                playerScore++;
                console.log("Rock beats scissors. You Win.");
            }
            else if(pc ==="paper" && cc==="rock"){
                playerScore++;
                console.log("Paper beats Rock. You Win.");
            }
            else if(pc ==="paper" && cc==="scissors"){
                compScore++;
                console.log("Scissors beats Paper. Computer Wins.");
            }
            else if(pc ==="scissors" && cc==="rock"){
                compScore++;
                console.log("Rock beats Scissors. Computer Wins.");
            }
            else if(pc ==="scissors" && cc==="paper"){
                playerScore++;
                console.log("Scissors beats Paper. You Win.");
            }
            console.log('End of Round ' + i + '\n'+'Score: Player - '+ playerScore+' Computer - '+ compScore);
    }

            if(compScore===playerScore){
                console.log("Draw.");
            }
            else if(compScore>playerScore){
                console.log("Computer Wins.");
            }
            else if(playerScore>compScore){
                console.log("Congratulations! You won.");
            }
    
 
}

function start(){
    let entry = prompt("ROCK PAPER SCISSORS. TYPE START TO BEGIN.");
    entry = entry.toLowerCase();

    if(entry === "start"){
        playGame();
    }
    else{
        prompt("INVALID ENTRY. REFRESH PAGE TO TRY AGAIN.");
    }
}

start();

