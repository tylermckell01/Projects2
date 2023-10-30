// Final product

async function playRPS() {
  while (true) {
    let optionsArray = ["ROCK", "PAPER", "SCISSORS"];
    let randomNumber = Math.floor(Math.random() * 3);
    let userPrompt = prompt("Enter Rock, Paper, or Scissors... or Quit");

    if (userPrompt.toUpperCase() === "QUIT") {
      break;
    } else if (
      userPrompt.toUpperCase() === "ROCK" ||
      userPrompt.toUpperCase() === "PAPER" ||
      userPrompt.toUpperCase() === "SCISSORS"
    ) {
      let check = optionsArray[randomNumber];
      console.log("ROCK, PAPER, SCISSORS... SHOOT!");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (userPrompt.toUpperCase() === check.toUpperCase()) {
        console.log("its a tie...");
      } else if (
        (userPrompt.toUpperCase() === "ROCK" &&
          check.toUpperCase() === "SCISSORS") ||
        (userPrompt.toUpperCase() === "PAPER" &&
          check.toUpperCase() === "ROCK") ||
        (userPrompt.toUpperCase() === "SCISSORS" &&
          check.toUpperCase() === "PAPER")
      ) {
        console.log("dang, you won...");
      } else {
        console.log("YOU LOSE!! HAHA!");
      }
    } else {
      console.log("That is an incorrect input, please try again");
    }
  }
}

playRPS();

// First attempt

async function playRPS() {
  while (true) {
    let optionsArray = ["ROCK", "PAPER", "SCISSORS"];
    let randomNumber = Math.floor(Math.random() * 3);
    let initialPrompt = prompt("Enter Rock, Paper, or Scissors... or Quit");

    if (initialPrompt.toUpperCase() === "ROCK") {
      let check = optionsArray[randomNumber];
      console.log("ROCK, PAPER, SCISSORS... SHOOT!");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (check.toUpperCase() === "ROCK") {
        console.log("its a tie!");
      } else if (check.toUpperCase() === "PAPER") {
        console.log("I played Paper, YOU LOSE!");
      } else if (check.toUpperCase() === "SCISSORS") {
        console.log("I played Scissors, You WON!");
      }
    } else if (initialPrompt.toUpperCase() === "PAPER") {
      let check = optionsArray[randomNumber];
      console.log("ROCK, PAPER, SCISSORS... SHOOT!");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (check.toUpperCase() === "ROCK") {
        console.log("I played Rock, You WON!");
      } else if (check.toUpperCase() === "PAPER") {
        console.log("Its a tie...");
      } else if (check.toUpperCase() === "SCISSORS") {
        console.log("I played Scissors, YOU Lose!");
      }
    } else if (initialPrompt.toUpperCase() === "SCISSORS") {
      let check = optionsArray[randomNumber];
      console.log("ROCK, PAPER, SCISSORS... SHOOT!");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (check.toUpperCase() === "ROCK") {
        console.log("I played Rock, YOU LOSE!");
      } else if (check.toUpperCase() === "PAPER") {
        console.log("I played Paper, You Won!");
      } else if (check.toUpperCase() === "SCISSORS") {
        console.log("Its a tie...");
      }
    } else if (initialPrompt.toUpperCase() === "QUIT") {
      break;
    } else if (
      initialPrompt.toUpperCase() != "ROCK" ||
      "PAPER" ||
      "SCISSORS" ||
      "QUIT"
    ) {
      console.log("that is an incorrect input, try again!");
    }
  }
}

playRPS();
