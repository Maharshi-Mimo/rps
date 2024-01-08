// use strict; 
let userScore= 0;
let compScore =0;
console.log("Rock Paper Scissor");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// console.log(msg);
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#computer-score");
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});
const showWinner = (userWin, choice_rps, computerChoice ) =>{
    if(userWin){
        console.log("You Win!");
        msg.innerText = `You win! Your ${choice_rps} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreP.innerText = userScore;

    }
    else{
        console.log("You Lose!");
        msg.innerText = `You Lose! ${computerChoice} beats ${choice_rps}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreP.innerText = compScore;
    }
};
const draw = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "black";
  
   
};
const playGame = (choice_rps) => {
    console.log("User's Choice:", choice_rps);
    const computerChoice = genComputerChoice();
    console.log("Computer's Choice:", computerChoice);
    //Starting the winning conditions
    //First dealing with draw condition.
    if (choice_rps === computerChoice){
     draw();
    }
    else {
            let userWin = true;
            if(choice_rps === "rock"){ //checking for rock for user
                // in here computer can have paper or scissors
                userWin = computerChoice === "paper" ? false : true;  
            } 
            else if(choice_rps === "scissors"){//checking for scissors for user
                // in here computer can have paper or rock
                userWin = computerChoice === "rock" ? false : true;
            }
            else{//checking for paper for user
                userWin = computerChoice === "scissors" ? false : true;
            }
            showWinner(userWin, choice_rps, computerChoice);
    }
};
  
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
};