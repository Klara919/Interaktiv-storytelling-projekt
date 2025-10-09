// Hent knappen og video-elementet fra HTML
const button = document.getElementById('openButton');      // Knappen, der starter videoen
const transitionVideo = document.getElementById('transitionVideo'); // Videoen, der skal afspilles

// Lyt efter klik på knappen
button.addEventListener('click', function(event) {
    event.preventDefault(); // Forhindrer standard handling (fx hvis det er en <a> link)

    // Vis videoen og start fade-in effekt
    transitionVideo.style.display = 'block'; // Gør videoen synlig, hvis den tidligere var skjult
    setTimeout(() => {
        transitionVideo.style.opacity = 1;   // Ændrer opacitet til 1, så CSS-transitionen kan ske
    }, 10); // Lille delay for at sikre, at browseren registrerer ændringen

    transitionVideo.play(); // Afspil videoen

    // Når videoen er færdig med at spille
    transitionVideo.addEventListener('ended', () => {
        window.location.href = 'stjernehob.html'; // Redirect til den ønskede side
    });
});
