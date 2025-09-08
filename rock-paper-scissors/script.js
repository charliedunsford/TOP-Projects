let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let random = Math.ceil(Math.random() * 3);
	return random == 3 ? "ROCK" : (random == 2 ? "PAPER" : "SCISSORS");
}

function getHumanChoice() {
	return prompt("Rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice) {
	console.log("Human: " + humanChoice);
	console.log("Computer: " + computerChoice);
}
	
