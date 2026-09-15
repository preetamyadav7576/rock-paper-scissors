let userScore = 0 ;
let compScore = 0 ;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranidx = Math.floor(Math.random() *3);
    return options[ranidx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw.Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");   
        msg.innerText = ` You Win. ${userChoice} beats ${compChoice}`;   
        msg.style.backgroundColor = "green";  
    }
    else {
        console.log("You loose");
        msg.innerText =`You loose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);

    const compChoice = genCompchoice() ;
    console.log("Comp choice", compChoice);

    if (compChoice === userChoice){
        drawGame();
        return;
    }
    let userWin = true ;
    if (userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true ;
    }
    else if (userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true ;
    }
    else {
        userWin = compChoice === "rock" ? false : true ;
    }
    showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener(("click"), () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});