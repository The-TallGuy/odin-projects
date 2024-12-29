let computerChoice;
let playerChoice;
let options = ["rock", "paper", "scissors"];
let rounds = 1;
let computerScore = 0;
let playerScore = 0;

function playRound()
{
    computerChoice = Math.floor(Math.random() * 3) + 1;
    playerChoice = prompt("Cast your choice", "Rock").toLowerCase();
    if (playerChoice == null) console.log("That's not a valid choice. Try again!");
    else if(options.includes(playerChoice))
    {
        if(playerChoice == "rock")
        {
            switch(computerChoice)
            {
                case 1:
                    console.log("Draw");
                    rounds += 1; break;
                case 2:
                    console.log("Computer wins!"); computerScore += 1;
                    rounds += 1; break;
                case 3:
                    console.log("Player wins!"); playerScore += 1;
                    rounds += 1; break;
            }
        }
        else if(playerChoice == "paper")
        {
            switch(computerChoice)
            {
                case 1:
                    console.log("Player wins!"); playerScore += 1;
                    rounds += 1; break;
                case 2:
                    console.log("Draw");
                    rounds += 1; break;
                case 3:
                    console.log("Computer wins!"); computerScore += 1;
                    rounds += 1; break;
            }
        }
        else
        {
            switch(computerChoice)
            {
                case 1:
                    console.log("Computer wins!"); computerScore += 1;
                    rounds += 1; break;
                case 2:
                    console.log("Player wins!"); playerScore += 1;
                    rounds += 1; break;
                case 3:
                    console.log("Draw");
                    rounds += 1; break;
            }
        }
    }
    else console.log("That's not a valid choice. Try again!");
}

function playGame()
{
    for(let i = 0; i < 5; i++) playRound();
    if(playerScore > computerScore) console.log("You won the game!");
    else if(playerScore < computerScore) console.log("You lost the game!");
    else console.log("You cannot pass the Turring test.")
}

playGame();