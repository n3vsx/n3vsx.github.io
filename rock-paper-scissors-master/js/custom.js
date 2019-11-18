let userScore = 0;
let computerScore = 0;
let game_sentence = document.getElementById('game_sentence');
const paper_img = document.getElementById('paper');
const scissor_img = document.getElementById('scissor');
const rock_img = document.getElementById('rock');
const score_div = document.getElementById('score_div');
const userScore_h4 = document.getElementById('userScore_h4');
const computerScore_h4 = document.getElementById('computerScore_h4');

function getComputerChoice() {
    const choices = ['Paper', 'Scissor', 'Rock'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_h4.innerHTML = "You: " + userScore;
    game_sentence.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_h4.innerHTML = "AI: " + computerScore;
    game_sentence.innerHTML = userChoice + " loses from " + computerChoice + ". You lost!";
}

function draw(userChoice, computerChoice) {
    game_sentence.innerHTML = userChoice + " draws against " + computerChoice + ". It's a draw!";
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "PaperRock":
        case "RockScissor":
        case "ScissorPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "ScissorRock":
        case "PaperScissor":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    paper_img.addEventListener('click', function()  {
        game('Paper');
    })
    
    scissor_img.addEventListener('click', function() {
        game('Scissor');
    })
    
    rock_img.addEventListener('click', function()  {
        game('Rock');
    })
}

main();


