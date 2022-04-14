//Setup//
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultsDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll ('button')
let userChoice
let computerChoice
let randomNumber
let result


//player data
let playerScore = "1"
let computerScore = "1"

//userChoice
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateRandomNumber()
    generateResult()
}))


//computerChoice

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

if (randomNumber == 1){
    computerChoice = "rock"
}
if (randomNumber == 2){
    computerChoice = "paper"
}
if (randomNumber == 3){
    computerChoice = "scissors"
}
computerChoiceDisplay.innerHTML = computerChoice
}

//Comparing console.log//
//Computer WinS
function generateResult() {
if (computerChoice == "rock" && userChoice == "scissors"){
    result = "Computer Wins"
    computerPoint()
}
if (computerChoice == "paper" && userChoice == "rock"){
    result = "Computer Wins"
    computerPoint()
}

if (computerChoice == "scissors" && userChoice == "paper"){
    result = "Computer Wins"
    computerPoint()
}
//User Wins
if (userChoice == "rock" && computerChoice == "scissors"){
    result = "You Win"
    playerPoint();
}
if (userChoice == "paper" && computerChoice == "rock"){
    result = "You Win"
    playerPoint();
}
if (userChoice == "scissors" && computerChoice == "paper"){
    result = "You Win"
    playerPoint();
}
//Tie Game
if (computerChoice === userChoice) {
    result = "Draw"
    
}

resultsDisplay.innerHTML = result
}


// Scoring

function computerPoint() {
        console.log("Computer Score" + (computerScore++ ))
}if (computerScore == "5"){
    console.log ("You have Lost :( Please Refresh to Play Again");
}

function playerPoint(){
    console.log("Player Score:" + (playerScore++ ))
}if (playerScore == "5"){
    console.log ("You have Won!! Please Refresh to Play Again");
}