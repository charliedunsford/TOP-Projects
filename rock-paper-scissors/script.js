let humanScore = 0;
let computerScore = 0;
let gameInProgress = false;

function getComputerChoice() {
	let random = Math.ceil(Math.random() * 3);
	return random == 3 ? "ROCK" : (random == 2 ? "PAPER" : "SCISSORS");
}

const buttons = document.querySelectorAll(".button__player");
buttons.forEach(button => {
	button.addEventListener("click", (event) => {
		if (gameInProgress == true) return;
		gameInProgress = true;
		const humanChoice = event.target.id;
		const computerChoice = getComputerChoice();
		const computerID = document.querySelector(`#${computerChoice}--comp`);
		const humanID = document.querySelector(`#${humanChoice}`);
		console.log(computerID.classList);
		setTimeout(() => {
			computerID.classList.toggle("raised");
			humanID.classList.toggle("raised");
			gameInProgress = false;
		}, 2000);
		playRound(humanChoice, computerChoice);
		computerID.classList.toggle("raised");
		humanID.classList.toggle("raised");
	});
});

const score = document.querySelector("#score__text");
function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		score.textContent = "Tie!";
		return;
	}
	if (humanChoice == "ROCK" && computerChoice == "SCISSORS" || humanChoice == "PAPER" && computerChoice == "ROCK" || humanChoice == "SCISSORS" && computerChoice == "PAPER") {
		humanScore++;
		score.textContent = "You win!";
	} else {
		computerScore++;
		score.textContent = "You lost!";
	}

	if (humanScore == 5 || computerScore == 5) {
		if (humanScore == 5) score.textContent = "You've won the game!";
		else score.textContent = "You lost the game :(";
		humanScore = 0;
		computerScore = 0;
	}

	document.querySelector("#score__player").textContent = humanScore;
	document.querySelector("#score__computer").textContent = computerScore;
}

