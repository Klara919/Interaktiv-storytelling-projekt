// Elementer
const generateBtn = document.getElementById('generateBtn');
const navnDisplay = document.getElementById('navn');
const rightArrow = document.getElementById('rightArrow');
const transitionVideo = document.getElementById('transitionVideo');

// Liste af stjernenavne
const navne = [
  "Aldebaran","Betelgeuse","Sirius","Vega","Rigel","Polaris","Antares",
  "Capella","Procyon","Deneb","Altair","Spica","Arcturus","Fomalhaut",
  "Bellatrix","Regulus","Castor","Pollux","Alnitak","Alnilam","Mintaka",
  "Canopus","Mirach","Alhena","Saiph","Dubhe","Merak","Phecda","Megrez","Alioth"
];

// Funktion til at generere et tilfældigt navn
function generateName() {
    const randomIndex = Math.floor(Math.random() * navne.length);
    const randomName = navne[randomIndex];

    // Vis navnet i DOM
    navnDisplay.textContent = randomName;

    // Gem navnet i localStorage
    localStorage.setItem('stjerneNavn', randomName);
}

// Klik på “Generér”-knap
generateBtn.addEventListener('click', generateName);

// Klik på “Videre”-pil
rightArrow.addEventListener('click', (e) => {
    e.preventDefault();

    const navn = navnDisplay.textContent.trim();

    if (!navn || navn === '...') {
        alert("Generér først et navn, før du går videre!");
        return;
    }

    // Fade ind video
    transitionVideo.style.display = 'block';
    transitionVideo.style.transition = 'opacity 0.8s ease-in';
    transitionVideo.style.opacity = 1;
    transitionVideo.play();

    // Fade ud body inden redirect
    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease-out";
        document.body.style.opacity = 0;
    }, 2000);

    // Redirect til næste side
    setTimeout(() => {
        window.location.href = 'stjernetage.html';
    }, 3000);
});
