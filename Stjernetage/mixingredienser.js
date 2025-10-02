// Map mellem billede-id og deres tilhørende section-id
const sectionMap = {
    salt: "salt-section",
    jern: "jern-section",
    brint: "brint-section",
    kulstof: "kulstof-section",
    helium: "helium-section"
};

// Finder alle de draggable billeder
const draggableImages = document.querySelectorAll('#salt, #jern, #brint, #kulstof, #helium');

// Finder skålen (bowl)
const bowl = document.getElementById('bowl');

// Finder transition-videoen
const transitionVideo = document.getElementById('transitionVideo');

// Tilføjer mousedown-event til hvert billede
draggableImages.forEach(image => {
    image.addEventListener('mousedown', onMouseDown);
});

function onMouseDown(event) {
    const image = event.target;

    // Beregn forskellen mellem musens klikpunkt og billedets øverste venstre hjørne
    let shiftX = event.clientX - image.getBoundingClientRect().left;
    let shiftY = event.clientY - image.getBoundingClientRect().top;

    // Sørg for at billedet kommer foran alt andet
    image.style.zIndex = 1000;

    // Flytter billedet til musens position
    function moveAt(pageX, pageY) {
        image.style.left = pageX - shiftX + 'px';
        image.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        checkCollision(image);
    }

    document.addEventListener('mousemove', onMouseMove);

    image.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        image.onmouseup = null;
    };
}

// Funktion der tjekker, om billedet rører skålen
function checkCollision(image) {
    const bowlRect = bowl.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    if (
        imageRect.left < bowlRect.right &&
        imageRect.right > bowlRect.left &&
        imageRect.top < bowlRect.bottom &&
        imageRect.bottom > bowlRect.top
    ) {
        // Fjern billedet
        image.style.display = 'none';

        // Fjern tilhørende section
        const sectionId = sectionMap[image.id];
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) section.style.display = 'none';
        }

        // Tjek om alle elementer er smidt i skålen
        const allDraggables = Object.keys(sectionMap);
        const allGone = allDraggables.every(id => {
            const el = document.getElementById(id);
            return !el || el.style.display === 'none';
        });

        if (allGone) {
            startTransitionVideo();
        }
    }
}

// Starter transition-videoen automatisk
function startTransitionVideo() {
    transitionVideo.style.display = 'block';
    transitionVideo.style.opacity = 0;
    transitionVideo.style.transition = 'opacity 0.8s ease-in';
    transitionVideo.play();

    setTimeout(() => {
        transitionVideo.style.opacity = 1;
    }, 10);

    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease-out";
        document.body.style.opacity = 0;
    }, 2000);

    setTimeout(() => {
        window.location.href = '../Stjernetage/fanggas.html';
    }, 3000);
}
