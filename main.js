const choices = document.querySelectorAll(".choice");
const restart = document.getElementById("restart");
//click
function click(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  //showWinner(winner, computerChoice);
  console.log(playerChoice, computerChoice, winner);
}

//computer choice
function getComputerChoice() {
  const ran = Math.random();
  console.log(ran);

  if (ran < 0.34) {
    return "rock";
  } else if (ran < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

//get game winner
function getWinner(p, c) {
  if (p == c) {
    return "draw";
  } else if (p == "rock") {
    if (c == "paper") return "computer";
    else return "player";
  } else if (p == "paper") {
    if (c == "scissors") return "computer";
    else return "player";
  } else if (p == "scissors") {
    if (c == "rock") return "computer";
    else return "player";
  }
  //   if (p == c) {
  //     return "draw";
  //   } else if (p == "rock" && c == "paper") {
  //     return "computer wins";
  //   } else if (p == "rock" && c == "scissors") {
  //     return "player wins";
  //   } else if (p == "paper" && c == "scissors") {
  //     return "computer wins";
  //   } else if (p == "paper" && c == "rock") {
  //     return "player wins";
  //   }
}

choices.forEach(choice => choice.addEventListener("click", click));
