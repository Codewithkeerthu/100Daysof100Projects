const scoreElement = document.getElementById('score');
const resultText = document.getElementById('result-text');
const computerChoiceText = document.getElementById('computer-choice-text'); // New variable for computer choice display

let score = 0;

function getRandomChoice() {
  const choices = ['stone', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'stone' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'stone') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    score++;
    scoreElement.textContent = score;
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function playGame(playerChoice) {
  const computerChoice = getRandomChoice();
  const result = determineWinner(playerChoice, computerChoice);
  
  // Update the result and computer choice text
  resultText.textContent = result;
  computerChoiceText.textContent = `Opponent Choice: ${computerChoice}`; // Display computer choice
}

function resetGame() {
  resultText.textContent = "Make your move!";
  computerChoiceText.textContent = ""; // Clear computer choice on reset
}
