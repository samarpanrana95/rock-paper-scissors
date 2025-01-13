// Selecting the dom choices to ensure round is played when clicked
let choicesDom = document.querySelectorAll(".choice");
for (let choiceDom of choicesDom) {
  choiceDom.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      playRound(e);
      if (checkGameOver()) {
        showModal(getGameWinner());
      }
    },
    { capture: true }
  );
}

let choices = ["rock", "paper", "scissors"],
  computerScore = 0,
  humanScore = 0;

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

function getHumanChoice(event) {
  let humanChoice;
  let targetClassList = event.target.classList;
  if (targetClassList.contains("choice-rock")) {
    humanChoice = "rock";
  } else if (targetClassList.contains("choice-paper")) {
    humanChoice = "paper";
  } else if (targetClassList.contains("choice-scissors")) {
    humanChoice = "scissors";
  }
  return humanChoice;
}

function playRound(event) {
  let humanChoice = getHumanChoice(event);
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
  updateDom();

  function updateDom() {
    let mainText = document.querySelector(".main-text");
    let subText = document.querySelector(".main-sub-text");
    let mainHumanImg = document.querySelector(".main-human-img");
    let mainComputerImg = document.querySelector(".main-computer-img");
    let mainHumanText = document.querySelector(".main-human-text");
    let mainComputerText = document.querySelector(".main-computer-text");

    if (humanWon) {
      mainText.textContent = "Human won the round.";
    } else if (computerWon) {
      mainText.textContent = "Computer won the round.";
    } else {
      mainText.textContent = "It's a tie!";
    }
    subText.textContent = `Human played ${humanChoice} and Computer played ${computerChoice}.`;

    switch (humanChoice) {
      case "rock":
        mainHumanImg.textContent = "✊";
        break;
      case "paper":
        mainHumanImg.textContent = "✋";
        break;
      case "scissors":
        mainHumanImg.textContent = "✌";
        break;
      default:
        alert("Something is wrong.");
    }
    switch (computerChoice) {
      case "rock":
        mainComputerImg.textContent = "✊";
        break;
      case "paper":
        mainComputerImg.textContent = "✋";
        break;
      case "scissors":
        mainComputerImg.textContent = "✌";
        break;
      default:
        alert("Something is wrong.");
    }

    mainHumanText.textContent = `Player: ${humanScore}`;
    mainComputerText.textContent = `Computer: ${computerScore}`;
  }
}

function checkGameOver(roundNumber) {
  if (humanScore >= 5 || computerScore >= 5) {
    return true;
  }
  return false;
}

function getGameWinner() {
  if (humanScore > computerScore) {
    return `Human`;
  } else if (computerScore > humanScore) {
    return `Computer`;
  }
}

function showModal(winner) {
  let overlay = document.querySelector(".overlay");
  let modalText = document.querySelector(".modal-text");
  let modalButton = document.querySelector(".modal-button");

  if (winner == "Human") {
    modalText.style.background = "#00ff1599";
  } else if (winner == "Computer") {
    modalText.style.background = "#ff000099";
  }

  modalText.textContent = `${winner} won !!`;

  if (overlay.style.visibility == "") {
    overlay.style.visibility = "visible";
  } else {
    overlay.style.visibility = "";
  }

  modalButton.addEventListener("click", (e)=> {
    showModal();
    resetAll();
  })
}

function resetAll () {
  computerScore = 0,
  humanScore = 0;
  let mainText = document.querySelector(".main-text");
  let subText = document.querySelector(".main-sub-text");
  let mainHumanImg = document.querySelector(".main-human-img");
  let mainComputerImg = document.querySelector(".main-computer-img");
  let mainHumanText = document.querySelector(".main-human-text");
  let mainComputerText = document.querySelector(".main-computer-text");

  mainText.textContent = "Choose a weapon !!";
  subText.textContent = "First to score 5 points wins the game.";
  mainHumanImg.textContent = "?";
  mainComputerImg.textContent = "?";
  mainHumanText.textContent = "Player: 0";
  mainComputerText.textContent = "Computer: 0";
}