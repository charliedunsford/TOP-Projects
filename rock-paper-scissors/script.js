function getComputerChoice() {
	let random = Math.ceil(Math.random() * 3);
	return random == 3 ? "ROCK" : (random == 2 ? "PAPER" : "SCISSORS");
}

function getHumanChoice() {
	return prompt("Rock, paper, or scissors?");
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	
	while (humanScore < 5 && computerScore < 5) {
		const humanChoice = getHumanChoice().toUpperCase();
		const computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice);
	}

	function playRound(humanChoice, computerChoice) {
		console.log("Human: " + humanChoice);
		console.log("Computer: " + computerChoice);
		if (humanChoice == "ROCK" && computerChoice == "SCISSORS" || humanChoice == "PAPER" && computerChoice == "ROCK" || humanChoice == "SCISSORS" && computerChoice == "PAPER") {
			console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
			humanScore++;
		} else {
			console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
			computerScore++;
		}
	}

	console.log((humanScore == 5 ? "Human" : "Computer") + " has won!");
}
