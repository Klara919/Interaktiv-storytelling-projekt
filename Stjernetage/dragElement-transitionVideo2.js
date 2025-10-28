// Finder HTML-elementet med id "bowlmedhviskestykke" og gemmer det i variablen bowl
const bowl = document.getElementById('bowlmedhviskestykke');

// Lægger en "mousedown"-eventlistener på skålen, altså starter drag når musen trykkes ned
bowl.addEventListener('mousedown', onMouseDown);

// Funktionen der køres, når musen trykkes ned på skålen
function onMouseDown(event) {
    event.preventDefault(); // Forhindrer standard browser-adfærd, fx markering af tekst

    // Beregner forskellen mellem musens position og skålens top/venstre kant
    const shiftX = event.clientX - bowl.getBoundingClientRect().left;
    const shiftY = event.clientY - bowl.getBoundingClientRect().top;

    // Sørger for at skålen er absolut placeret, så vi kan flytte den frit
    bowl.style.position = 'absolute';
    bowl.style.zIndex = 1000; // Lægger den ovenpå alt andet, så den ikke går bag overlay

    // Flytter skålen til den aktuelle mus-position med korrekt offset
    moveAt(event.pageX, event.pageY);

    // Funktion der flytter skålen til en given position
    function moveAt(pageX, pageY) {
        bowl.style.left = pageX - shiftX + 'px'; // Venstre kant = musens X minus forskel
        bowl.style.top = pageY - shiftY + 'px';  // Top kant = musens Y minus forskel
    }

    // Eventlistener på hele dokumentet, så skålen følger musen
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    // Når musen slippes (mouseup), stopper drag
    bowl.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove); // Fjern mousemove listener
        bowl.onmouseup = null; // Fjern mouseup listener, så den ikke kører igen

        // Tjek om midten af skålen er i venstre 1/10 af skærmen
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
