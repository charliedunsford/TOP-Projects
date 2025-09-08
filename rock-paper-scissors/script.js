function getComputerChoice() {
	let random = Math.ceil(Math.random() * 3);
	return random == 3 ? "rock" : (random == 2 ? "paper" : "scissors");
}
