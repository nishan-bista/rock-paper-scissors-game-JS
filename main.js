let playGame = confirm("You wanna Play rock, paper or scissors?");

if (playGame) {
  let playerchoice = prompt("Enter rock, paper or scissors");
  if (playerchoice) {
    let playerone = playerchoice.trim().toLowerCase();
    if (
      playerone === "rock" ||
      playerone === "paper" ||
      playerone === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);

      let computer =
        computerChoice === "1"
          ? "rock"
          : computerChoice === "2"
          ? "paper"
          : "scissors";

      let result =
        playerone === computer
          ? alert("Tie Game")
          : playerone === "rock" && computer === "paper"
          ? alert(`${playerone} You lost! Computer won!! ${computer}`)
          : playerone === "paper" && computer === "scissors"
          ? alert(`${playerone} You lost! Computer won!! ${computer}`)
          : playerone === "scissors" && computer === "rock"
          ? alert(`${playerone} You lost! Computer won!! ${computer}`)
          : alert(`${playerone} You won ! Congratulations, Computer lost ${computer}`);
    } else {
      alert("You didn't entered rock, paper or scissors properly!.");
    }
  } else {
    alert("I guessed you changed your mind maybe next time.");
  }
} else {
  alert("Okay, Maybe next time.");
}
