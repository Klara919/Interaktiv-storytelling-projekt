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
      window.location.href = 'stjernetage.html';
    }, 3000);
  });

const navne = [
"Aldebaran",
"Betelgeuse",
"Sirius",
"Vega",
"Rigel",
"Polaris",
"Antares",
"Capella",
"Procyon",
"Deneb",
"Altair",
"Spica",
"Arcturus",
"Fomalhaut",
"Bellatrix",
"Regulus",
"Castor",
"Pollux",
"Alnitak",
"Alnilam",
"Mintaka",
"Canopus",
"Mirach",
"Alhena",
"Saiph",
"Dubhe",
"Merak",
"Phecda",
"Megrez",
"Alioth"

];

function generateName() {
    const randomIndex = Math.floor(Math.random() * navne.length);
    const randomName = navne[randomIndex];
    document.getElementById("navn").textContent = randomName;
}