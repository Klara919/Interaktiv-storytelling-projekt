//  Hent elementet hvor navnet skal vises
const visNavn = document.getElementById('visNavn');

// Hent navnet fra localStorage
const navn = localStorage.getItem('stjerneNavn') || "Ingen navn fundet";

// Sæt navnet i h2 og tilføj teksten "kollapsede" bagefter
visNavn.textContent = `${navn} kollapsede...`;

// Håndter knappen til at gå videre
const tryAgainBtn = document.getElementById('tryagian-btn');

tryAgainBtn.addEventListener('click', () => {
    // Her kan du sende brugeren til næste side, fx supernova.html
    window.location.href = 'supernova.html';
});
