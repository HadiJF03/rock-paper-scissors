function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
}
function getPlayerChoice(){
    return prompt("Choose rock, paper, scissors.").toLowerCase()
}
function playRound(playerChoice,computerChoice){
    if(playerChoice == "rock" && computerChoice == "paper"){

        return -1

    }else if (playerChoice == "paper" && computerChoice == "scissors"){

        return -1

    }else if (playerChoice == "scissors" && computerChoice == "rock"){

        return -1

    }else if(computerChoice == "rock" && playerChoice == "paper"){

        return 1

    }else if (computerChoice == "paper" && playerChoice == "scissors"){

        return 1

    }else if (computerChoice == "scissors" && playerChoice == "rock"){

        return 1
    }else return 0;
}
function game(){
    let i = 0;
    let playerScore = 0, computerScore = 0;
    while (i<5){
        i++
        
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") playerChoice = getPlayerChoice();

        let outcome = playRound(playerChoice,computerChoice)

        let win = "You win, " + playerChoice + " beats " + computerChoice
        let lose = "You lose, " + computerChoice + " beats " + playerChoice
        let draw = "It's a draw, " + playerChoice + " and " + computerChoice 
        
        if (outcome > 0){
            playerScore++
            console.log(win + " | Score = " + playerScore + " : " + computerScore)
        }else if (outcome < 0){
            computerScore++
            console.log(lose + " | Score = " + playerScore + " : " + computerScore)
        }else console.log(draw + " | Score = " + playerScore + " : " + computerScore);
    }

    if (playerScore>computerScore) return "You win | Score = "  + playerScore + " : " + computerScore;
    else if (playerScore<computerScore) "You lose | Score = "  + playerScore + " : " + computerScore;
    else return "it's a draw | Score = "  + playerScore + " : " + computerScore;
}

console.log(game())
