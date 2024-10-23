let flippedCards = [];
let matchedPairs = 0;

function startGame() {
    document.querySelector('.game').classList.add('hidden');
    document.getElementById('matching-game').classList.remove('hidden');
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('matched') && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.match === card2.dataset.match) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;

        if (matchedPairs === 2) {
            setTimeout(() => {
                goToNextGame('matching-game', 'counting-game');
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000);
    }
    flippedCards = [];
}

function checkStars() {
    const starCount = document.getElementById('star-count').value;
    if (starCount == 8) {
        goToNextGame('counting-game', 'balloon-game');
    } else {
        alert('Try again! Count carefully.');
    }
}

function popBalloon(element) {
    element.style.display = 'none';
    const remainingBalloons = document.querySelectorAll('.balloon:not([style*="display: none"])').length;
    if (remainingBalloons === 0) {
        goToNextGame('balloon-game', 'birthday-message');
    }
}

function goToNextGame(currentGame, nextGame) {
    document.getElementById(currentGame).classList.add('hidden');
    document.getElementById(nextGame).classList.remove('hidden');
}

function playMusic() {
    const audio = document.getElementById('bg-music');
    audio.play();
}
