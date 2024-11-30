// LOGIC FOR COMPUTER CHOICE
// Create variable for computer choice and assign it an empty string
// Create variable to hold a random number. Assign it the random number formula
// If/Else statements:
// if the random number is 0, assign computer choice variable rock
// if the random number is 1, assign computer choice paper
// if the random number is 2, assign computer choice paper
// make appear in console

let computerChoice = "";
let randomNumber = Math.floor(Math.random() * 3);

function getComputerChoice() {
  if (randomNumber === 0) {
    computerChoice = "rock";
    return `${computerChoice}`;
  } else if (randomNumber === 1) {
    computerChoice = "paper";
    return `${computerChoice}`;
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
    return `${computerChoice}`;
  }
}

console.log(getComputerChoice());

// LOGIC FOR HUMAN CHOICE
// Create a variable to store human choice
// Create a function with parameter choice to store in humanChoice
// IF/Else Statement
// If human choices rock, display rock
// If human choices paper, display paper
// If human choices scissors, display scissors

let humanChoice = prompt(
  "Lets play Rock, Paper, Scissors. What is your choice?"
);

function getHumanChoice() {
  if (humanChoice === "rock") {
    return `${humanChoice}`;
  } else if (humanChoice === "paper") {
    return `${humanChoice}`;
  } else if (humanChoice === "scissors") {
    return `${humanChoice}`;
  } else {
    return "Wrong input: Please pick Rock, Paper, or Scissors";
  }
}

console.log(getHumanChoice());

// LOGIC FOR SCORES
// Create variables for both human score & computer score
// Set both to 0
let computerScore = 0;
let humanScore = 0;
let round = 0;

// LOGIC FOR PLAYING A SINGLE ROUND
// Create function that compares human & computer choices
// That function takes the choices as arguments
// If/Else statements:
// If human choice is rock & computer choice is paper, statement that computer wins, etc
// ' ' All of the win, lose, and tie statements
// Make human choice case-insensitive

function playRound(humanChoice, computerChoice) {
  // const lowerHumanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "paper" && round <= 5) {
    computerScore++;
    round++;
    return "You lose!";
  } else if (
    humanChoice === "rock" &&
    computerChoice === "scissors" &&
    round <= 5
  ) {
    humanScore++;
    round++;
    return "You win!";
  } else if (
    humanChoice === "paper" &&
    computerChoice === "rock" &&
    round <= 5
  ) {
    humanScore++;
    round++;
    return "You win!";
  } else if (
    humanChoice === "paper" &&
    computerChoice === "scissors" &&
    round <= 5
  ) {
    computerScore++;
    round++;
    return "You lose!";
  } else if (
    humanChoice === "scissors" &&
    computerChoice === "rock" &&
    round <= 5
  ) {
    computerScore++;
    round++;
    return "You lose!";
  } else if (
    humanChoice === "scissors" &&
    computerChoice === "paper" &&
    round <= 5
  ) {
    humanScore++;
    round++;
    return "You win!";
  } else if (humanChoice === computerChoice && round <= 5) {
    return "Tie";
  } else {
    return "Game over";
  }
}

// LOGIC FOR ENTIRE GAME
// I have to get playRound to go through 5 times
// create a function playGame
// get playRound to play 5 times

function playGame() {
  while (round <= 4) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Computer score: " + computerScore);
    console.log("Your score: " + humanScore);
    console.log("Round: " + round);
  }
}

playGame();

// while (humanScore < 5 && computerScore < 5) {
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
//   console.log(playRound(humanSelection, computerSelection));
// }

// function playGame(humanScore, computerScore) {
//   if (computerScore > humanScore) {
//     return "you loseeeee";
//   } else {
//     return "you winnnnnn";
//   }
// }
