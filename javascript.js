let choices = ["rock", "paper", "scissors"],
  computerScore = 0,
  humanScore = 0,
  totalRounds = 3;

for (let roundNumber = 1; roundNumber <= totalRounds; roundNumber++) {
  console.log('\n\n');
  playRound();
  if (checkGameOver(roundNumber)) {
    console.log(`${getGameWinner()} won the game !!`);
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100);
  let computerChoice =
    randomNumber <= 33
      ? choices[0]
      : randomNumber <= 66
      ? choices[1]
      : choices[2];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice;
  let isInvalid = true;
  do {
    humanChoice = prompt("Pick one: rock or paper or scissors");
    if (humanChoice == null || humanChoice.length <= 0) {
      alert("Cannot be empty");
    } else {
      humanChoice = humanChoice.toLowerCase();
      switch (humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
          isInvalid = false;
          break;
        default:
          isInvalid = true;
          break;
      }
      if (isInvalid) {
        alert("Please input correct option");
      }
    }
  } while (
    humanChoice == "" ||
    humanChoice === null ||
    humanChoice === undefined ||
    isInvalid
  );
  return humanChoice;
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  let humanWon = false,
    computerWon = false;

  switch (humanChoice) {
    case "rock":
      if (computerChoice == "paper") {
        computerWon = true;
        computerScore++;
      } else if (computerChoice == "scissors") {
        humanWon = true;
        humanScore++;
      } else {
      }
      break;
    case "paper":
      if (computerChoice == "scissors") {
        computerWon = true;
        computerScore++;
      } else if (computerChoice == "rock") {
        humanWon = true;
        humanScore++;
      } else {
      }
      break;
    case "scissors":
      if (computerChoice == "rock") {
        computerWon = true;
        computerScore++;
      } else if (computerChoice == "paper") {
        humanWon = true;
        humanScore++;
      } else {
      }
      break;
    default: {
      alert("That's unusual. Something went wrong");
    }
  }

  console.log(
    `Human played ${humanChoice} and Computer played ${computerChoice}.`
  );
  if (humanWon) {
    console.log("Human won the round.");
  } else if (computerWon) {
    console.log("Computer won the round.");
  } else {
    console.log("It's a tie!");
  }
  console.log(
    `Human Score: ${humanScore} \t Computer Score: ${computerScore}`
  );
}

function checkGameOver (roundNumber) {
    if (roundNumber >= totalRounds) {
        return true;
    } 
    return false;
}

function getGameWinner () {
    if (humanScore > computerScore) {
        return `Human`;
    }
    else if (computerScore > humanScore) {
        return `Computer`;
    }
    else {
        return `Both human and computer have`;
    }
}