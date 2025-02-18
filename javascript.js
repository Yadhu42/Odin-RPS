// 0 is Rock, 1 is Paper, 2 is scissors

let compScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    
    if(compChoice === 0){
        return "rock";
    }
    else if(compChoice === 1){
        return "paper";
    }
    else if(compChoice === 2){
        return "scissors";
    }
}

function logic(pc,cc){
    if(pc === cc){
        let result = "Draw";
        return result;
    }
    else{
        switch (pc) {
            case "rock":{
                let result = (cc==="scissors")?"Rock beats scissors":"Paper wins over Rock";
                return result;
                
            }
            
            case "paper":{
                let result = (cc==="rock")?"Paper beats Rock":"Scissors wins over Paper";
                return result;
                
            }
                
            case "scissors":{
                let result = (cc==="paper")?"Scissors beat Paper":"Rock wins over Scissors";
                return result;
                
            }
            default:
                break;
        }
    }    
}

function scoring(result){

        if(result === "Draw"){
            return "No points";
        }
        if(result === "Rock beats scissors" || result === "Paper beats Rock" || result ==="Scissors beat Paper" ){
            playerScore++;
            return("You Win");
        }
        else if(result === "Paper wins over Rock"|| result === "Scissors wins over Paper" || result === "Rock wins over Scissors"){
            compScore++;
            return("Computer Wins");
        }
    }


function playGame(entry){

    let pc = entry;
    let cc = getComputerChoice();
    compDisplay.textContent = `The computer played ${cc}`;

    let output = logic(pc,cc);
    inst.textContent=output;
    let answer = scoring(output);
    result.textContent = answer;
    score.textContent = `Player - ${playerScore} ✤ Comp - ${compScore}`;
    
    if(playerScore===5){
        score.textContent = ("Congratulations! You won the game");
        alert("Congratulations! You won the game");
        location.reload();
    }
    else if(compScore===5){
        score.textContent = ("Computer wins the game");
        alert("You lost the game. Try again");
        location.reload();
    }
        
};      


const body = document.querySelector("body");
const container = document.querySelector(".container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const scoreboard = document.createElement("div");
const playerDisplay = document.createElement("p");
const compDisplay = document.createElement("p");
const inst = document.createElement("p");
inst.textContent = "WAITING FOR PLAYER"
const result = document.createElement("p");
const score = document.createElement("p");

scoreboard.appendChild(playerDisplay);
scoreboard.appendChild(compDisplay);
scoreboard.appendChild(inst);
scoreboard.appendChild(result);
scoreboard.appendChild(score);

body.appendChild(scoreboard);
scoreboard.setAttribute("style","width: 400px; background-color: rgb(239, 162, 135); padding: 10px 15px; border-radius: 5px; font-size: 24px; text-align: center;");
playerDisplay.setAttribute("style","margin-bottom: 0;");
compDisplay.setAttribute("style","margin: 0;");
inst.setAttribute("style","margin: 0;");
result.setAttribute("style","margin-top: 24px; margin-bottom: 0");
score.setAttribute("style","margin-top: 0;");


rock.addEventListener("click", (e) =>{
    playerDisplay.textContent = "You played Rock";
    playGame(e.target.id);
});

paper.addEventListener("click", (e) =>{
    playerDisplay.textContent = "You played Paper";
    playGame(e.target.id);
});

scissors.addEventListener("click", (e) =>{
    playerDisplay.textContent = "You played Scissors";
    playGame(e.target.id);
});



