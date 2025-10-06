const button = document.getElementById('openButton');
const transitionVideo = document.getElementById('transitionVideo');

button.addEventListener('click', function(event) {
    event.preventDefault();

    // Vis og fade-in videoen
    transitionVideo.style.display = 'block';
    setTimeout(() => {
        transitionVideo.style.opacity = 1;
    }, 10); // lille delay for at trigger CSS transition

    transitionVideo.play();

    // Når videoen er færdig
    transitionVideo.addEventListener('ended', () => {
        window.location.href = 'stjernehob.html'; // Ret til din ønskede side
    });
});