
function handelCostKeyDown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('#js-total');
    let cost = Number(inputElement.value);

    if (cost < 40) {
        cost += 10;
    }

    document.querySelector('#total-cost').innerHTML = `Total cost: ${cost}`;
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

showScore();

function showScore() {
    const scoreElement = document.querySelector('.js-score');
    scoreElement.textContent = `Wins: ${score['wins']}, Losses: ${score['losses']}, Ties: ${score['ties']}`;
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    showScore();
}

function getComMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        comMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        comMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        comMove = 'scissors';
    }
    return comMove;
}

let isAutoPlay = false; 
let intervalId;
const autoPlayButton = document.querySelectorAll('.auto-play');
function autoPlay() {
    if (!isAutoPlay) {
        intervalId = setInterval(function () {
            const playerMove = getComMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlay = true;
        autoPlayButton[0].innerHTML = 'Stop Play';
    }else{
        clearInterval(intervalId);
        isAutoPlay = false;
        autoPlayButton[0].innerHTML = 'Auto Play';
    }
}

function playGame(playerMove) {
    const comMove = getComMove();
    let result = '';
    if (playerMove === 'rock') {
        if (comMove === 'rock') {
            result = 'Tai.'
        } else if (comMove === 'paper') {
            result = 'You are lose.'
        } else if (comMove === 'scissors') {
            result = 'You are win.'
        }
    } else if (playerMove === 'paper') {
        if (comMove === 'rock') {
            result = 'You are win.'
        } else if (comMove === 'paper') {
            result = 'Tai.'
        } else if (comMove === 'scissors') {
            result = 'You are lose.'
        }
    } else if (playerMove === 'scissors') {
        if (comMove === 'rock') {
            result = 'You are lose.'
        } else if (comMove === 'paper') {
            result = 'You are win.'
        } else if (comMove === 'scissors') {
            result = 'Tai.'
        }
    }

    if (result === 'You are win.') {
        score.wins += 1;
    } else if (result === 'You are lose.') {
        score.losses += 1;
    } else if (result === 'Tai.') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    const resultElement = document.querySelector('.js-result');
    const moveElement = document.querySelector('.js-move');
    resultElement.innerHTML = result;
    moveElement.innerHTML = `You: ${playerMove}, Com: ${comMove}`;
    showScore();
}
