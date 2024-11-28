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
    computerChoice = "Rock";
    return `Computer: ${computerChoice}`;
  } else if (randomNumber === 1) {
    computerChoice = "Paper";
    return `Computer: ${computerChoice}`;
  } else if (randomNumber === 2) {
    computerChoice = "Scissors";
    return `Computer: ${computerChoice}`;
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

let humanChoice = "";

function getHumanChoice(choice) {
  if (choice === "Rock" || choice === "rock") {
    humanChoice = choice;
    return `Your choice: ${humanChoice}`;
  } else if (choice === "Paper" || choice === "paper") {
    humanChoice = choice;
    return `Your choice: ${humanChoice}`;
  } else if (choice === "Scissors" || choice === "scissors") {
    humanChoice = choice;
    return `Your choice: ${humanChoice}`;
  } else {
    return "Wrong input: Please pick Rock, Paper, or Scissors";
  }
}

console.log(getHumanChoice("hi"));
