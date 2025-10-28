const gameContainer = document.getElementById('gameContainer');
const bowl = document.getElementById('bowl');
const scoreDisplay = document.getElementById('score');
const continueBtn = document.getElementById('button-container');

let score = 0;

// Funktion til at lave kugler
function createGas() {
    const gas = document.createElement('div');
    gas.classList.add('gas');
    gas.style.left = Math.random() * (window.innerWidth - 20) + 'px';
    gas.style.top = '-20px';
    gas.dataset.speed = (3 + Math.random() * 3); // hurtigere kugler
    gameContainer.appendChild(gas);
    return gas;
}

// Opdater kugle bevægelse
function updateGas(gas) {
    let gasTop = parseFloat(gas.style.top);
    gasTop += parseFloat(gas.dataset.speed);
    gas.style.top = gasTop + 'px';

    const gasRect = gas.getBoundingClientRect();
    const bowlRect = bowl.getBoundingClientRect();

    // Fang kuglen
    if (
        gasRect.bottom >= bowlRect.top &&
        gasRect.left + gasRect.width > bowlRect.left &&
        gasRect.left < bowlRect.right
    ) {
        gas.remove();   // fjern kuglen
        score += 1;     // 1 point pr kugle
        scoreDisplay.textContent = score + ' / 10';

        if(score >= 10) {  // når man har 10 kugler
            continueBtn.style.display = 'block'; // vis knappen
        }
    }

    // Fjern kugler der falder ud af skærmen
    if(gasTop > window.innerHeight) {
        gas.remove();
    }
}

// Hoved-loop
function gameLoop() {
    if(score < 10 && Math.random() < 0.05) createGas();
    document.querySelectorAll('.gas').forEach(updateGas);
    requestAnimationFrame(gameLoop);
}

// Flyt skålen med musen
document.addEventListener('mousemove', e => {
    const bowlWidth = bowl.offsetWidth;
    let newLeft = e.clientX - bowlWidth / 2;
    newLeft = Math.max(0, Math.min(window.innerWidth - bowlWidth, newLeft));
    bowl.style.left = newLeft + 'px';
});



gameLoop();
