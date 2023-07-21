function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
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
function game(playerChoice){
    let computerChoice = getComputerChoice()
    let outcome = playRound(playerChoice,computerChoice)
    console.log(computerScore);
    if (outcome > 0){
        playerScore.textContent = parseInt(playerScore.innerHTML)+1;
        result.textContent = "You win, " + playerChoice + " beats " + computerChoice;
    }else if (outcome < 0){
        computerScore.textContent = parseInt(computerScore.innerHTML)+1;
        result.textContent = "You lose, " + computerChoice + " beats " + playerChoice;
    }else result.textContent = "It's a draw, " + playerChoice + " and " + computerChoice ;

    if(parseInt(playerScore.innerHTML)== 5) result.textContent = "You win! (First to five)"
    else if (parseInt(computerScore.innerHTML)== 5) result.textContent = "You Lose!!!! (First to five)"
}

function getPlayerChoice(e){
    game(e.srcElement.id);
    
}
const result = document.querySelector(".result");
const playerScore = document.querySelector(".left");
const computerScore = document.querySelector(".right");
const buttons = document.querySelectorAll(".option");
buttons.forEach(button => button.addEventListener("click", getPlayerChoice))


