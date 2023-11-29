//script for rules container
const rulesBtn = document.querySelector(".btn-rules");
const rulesContainer = document.querySelector(".rules");
const crossBtn = document.querySelector("#cross");

crossBtn.addEventListener("click", () => {
    rulesContainer.style.display = "none";
})
rulesBtn.addEventListener("click", () => {
    rulesContainer.style.display = "block";
})

//script for score updation
const clickedEl = document.querySelectorAll(".click");
const computerScore = document.querySelector("#computer-score");
const userScore = document.querySelector("#user-score");
let playerScore = 0;
let pcScore = 0;

clickedEl.forEach((element) => {
    element.addEventListener("click", () => {
        const computerChoice = computerPlay();
        const userChoice = element.id;
        localStorage.setItem('computerChoice',computerChoice);
        localStorage.setItem('userChoice',userChoice);
        const result = playRound(userChoice, computerChoice);
        displayResultImages(userChoice, computerChoice);
        redirectToResultPage(result);
        updateScores();

    });
   
});

function displayResultImages(userChoice, computerChoice) { }
   

function redirectToResultPage(result) {
    

    if (result === 'win') {
   
        window.location.href = `userWon.html`;
    } else if (result === 'lose') {
       
        window.location.href = `computerWon.html`;
    } else {
        window.location.href = `tie.html`;
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomchoice = Math.floor(Math.random() * choices.length);
    return choices[randomchoice];
}


function playRound(playerSelection, computerSelection) {
    let roundResult;

    if (playerSelection === computerSelection) {
        roundResult = "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        roundResult = "win";
    } else {
        pcScore++;
        roundResult = "lose";
    }

    return roundResult;
}

function updateScores() {
    try {
        localStorage.setItem('computerScore', pcScore);
        localStorage.setItem('playerScore', playerScore);
       
        
    } catch (error) {
        console.error('Error in localStorage interaction:', error);
        debugger; // This line will pause execution when the error occurs
    }
   
}

document.addEventListener('DOMContentLoaded', () => {
    try{
        pcScore = parseInt(localStorage.getItem('computerScore')) || 0;
    playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
     userScore.innerText = playerScore;
        computerScore.innerText = pcScore;
    updateScores();
    }catch(error){
        console.error('Error in localStorage interaction:',error);
        debugger;
    }
    
});


