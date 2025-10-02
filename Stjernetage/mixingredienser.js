// Vi laver et "map"  mellem billede-id og deres tilhørende section-id.
// Så vi kan slå op: hvis man smider salt i skålen → så ved vi, at salt-section også skal fjernes.
const sectionMap = {
    salt: "salt-section",
    jern: "jern-section",
    brint: "brint-section",
    kulstof: "kulstof-section",
    helium: "helium-section"
};

// Finder alle de billeder, der kan trækkes (draggables)
const draggableImages = document.querySelectorAll('#salt, #jern, #brint, #kulstof, #helium');

// Finder skålen (bowl), som er drop-target
const bowl = document.getElementById('bowl');


// Tilføjer en "mousedown"-event til hvert billede
// Når man klikker på billedet, starter vi funktionen onMouseDown
draggableImages.forEach(image => {
    image.addEventListener('mousedown', onMouseDown); 
});

// Funktion, der kører når man klikker ned på et billede
function onMouseDown(event) {
    const image = event.target; // Hvilket billede vi klikker på

// Beregner forskellen mellem musens klikpunkt og billedets øverste venstre hjørne.
// Det gør, at billedet følger musen rigtigt, uden at "hoppe".
    let shiftX = event.clientX - image.getBoundingClientRect().left;
    let shiftY = event.clientY - image.getBoundingClientRect().top;

    // Flytter billedet til musens position (justeret med shiftX/Y)
    function moveAt(pageX, pageY) {
        image.style.left = pageX - shiftX + 'px';
        image.style.top = pageY - shiftY + 'px';
    }

 // Når vi bevæger musen, flytter vi billedet
// og tjekker om det rammer skålen
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        checkCollision(image); // tjekker overlap med skålen
    }

// Lytter efter musens bevægelse mens knappen holdes nede
    document.addEventListener('mousemove', onMouseMove);

// Når vi slipper billedet, stopper den med at lytte
    image.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        image.onmouseup = null;
    };
}

// Funktion der tjekker, om billedet rører skålen
function checkCollision(image) {
    const bowlRect = bowl.getBoundingClientRect();  // skålens position og størrelse
    const imageRect = image.getBoundingClientRect(); // billedets position og størrelse

// Tjekker om billedet og skålen overlapper
    if (
        imageRect.left < bowlRect.right &&
        imageRect.right > bowlRect.left &&
        imageRect.top < bowlRect.bottom &&
        imageRect.bottom > bowlRect.top
    ) {
    
// Hvis der er overlap (billedet rammer skålen):

    // 1. Fjern billedet
        image.style.display = 'none';

    // 2. Find tilhørende section (via sectionMap) og fjern den også
        const sectionId = sectionMap[image.id];
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'none';
            }
        }
    }
}


const rightArrow = document.getElementById('rightArrow');
const transitionVideo = document.getElementById('transitionVideo');

rightArrow.addEventListener('click', (e) => {
    e.preventDefault();
  
    // Fade ind video
    transitionVideo.style.display = 'block';
    transitionVideo.style.opacity = 0;
    transitionVideo.style.transition = 'opacity 0.8s ease-in';
    transitionVideo.play();
  
    setTimeout(() => {
      transitionVideo.style.opacity = 1;
    }, 10);
  
    // Fade ud body inden redirect
    setTimeout(() => {
      document.body.style.transition = "opacity 1s ease-out";
      document.body.style.opacity = 0;
    }, 2000); // 2 sekunder efter klik
  
    // Redirect når alt er faded
    setTimeout(() => {
      window.location.href = 'fanggas.html';
    }, 3000);
  });
