const bowl = document.getElementById('bowlmedhviskestykke');

bowl.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {
    event.preventDefault();

    const shiftX = event.clientX - bowl.getBoundingClientRect().left;
    const shiftY = event.clientY - bowl.getBoundingClientRect().top;

    bowl.style.position = 'absolute';
    bowl.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        bowl.style.left = pageX - shiftX + 'px';
        bowl.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    bowl.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        bowl.onmouseup = null;

        // Tjek om midten af skålen er i venstre 1/10
        checkBowlPosition();
    };
}

// Forhindrer default browser-drag
bowl.ondragstart = function() {
    return false;
};

// Tjekker om skålen er i venstre 1/10 af skærmen
function checkBowlPosition() {
    const bowlRect = bowl.getBoundingClientRect();
    const screenWidth = window.innerWidth;

    // Brug midten af skålen
    const bowlCenterX = bowlRect.left + bowlRect.width / 2;

    if (bowlCenterX < screenWidth / 6) {
        // Start fade-out transition
        document.body.style.transition = "opacity 2.5s ease";
        document.body.style.opacity = 0;

        setTimeout(() => {
            window.location.href = "one eternity later.html"; // Ret til din ønskede side
        }, 2500);
    }
}
