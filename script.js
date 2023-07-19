function getComputerChoice(){
    let choice = ["Rock", "Paper", "Scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
}
function getPlayerChoice(){
    return prompt("Choose rock, paper, scissors.").toLowerCase
}
function runGame(playerChoice,computerChoice){
    let win = console.log(`You win, ${playerChoice} beats ${computerChoice}`)
    let lose = console.log(`You lose, ${computerChoice} beats ${playerChoice}`)

    if(playerChoice == "rock" && computerChoice == "paper"){

        console.log(lose)

    }else if (playerChoice == "paper" && computerChoice == "scissors"){

        console.log(lose)

    }else if (playerChoice == "scissors" && computerChoice == "rock"){

        console.log(lose)

    }else if(computerChoice == "rock" && playerChoice == "paper"){

        console.log(win)

    }else if (computerChoice == "paper" && playerChoice == "scissors"){

        console.log(win)

    }else if (computerChoice == "scissors" && playerChoice == "rock"){

        console.log(win)
    }
}