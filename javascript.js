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

function logic(pc,cc){
    if(pc === cc){
        let result = "Draw.";
        return result;
    }
    else{
        switch (pc) {
            case "rock":{
                let result = (cc==="scissors")?"Rock beats scissors.":"Paper beats Rock.";
                return result;
                
            }
            
            case "paper":{
                let result = (cc==="rock")?"Paper beats Rock.":"Scissors beats Paper.";
                return result;
                
            }
                
            case "scissors":{
                let result = (cc==="paper")?"Scissors beat Paper.":"Rock beats Scissors";
                return result;
                
            }
            default:
                break;
        }
    }    
}

function scoring(result){

    if(result === "Rock beats scissors." || result === "Paper beats Rock." || result ==="Scissors beat Paper." ){
        playerScore++;
        return("You Win.");
    }
    else if(result === "Draw."){
        return "No points.";
    }
    else{
        compScore++;
        return("Computer Wins.");
    }
}

function playGame(){

    compScore = 0;
    playerScore = 0;

    for(let i=1; i<6; i++){
            console.log("Round " + i);
            console.log("waiting for player");
            let pc = getPlayerChoice();
            let cc = getComputerChoice();

            let output = logic(pc,cc);
            console.log(output);
            let result = scoring(output);
            console.log(result);
            console.log("Player Score - "+ playerScore + " Computer Score - " + compScore);
        }
    
    if(compScore===playerScore){
        console.log("Game ends in a Draw.");
    }
    else if(playerScore>compScore){
        console.log("Congratulations! You won the game.");
    }
    else if(compScore>playerScore){
        console.log("Computer wins the game.");
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

