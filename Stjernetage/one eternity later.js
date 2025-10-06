// Vent 5 sekunder efter siden er loadet
window.addEventListener("load", () => {
    setTimeout(() => {
        // Fade out
        document.body.style.transition = "opacity 2s ease";
        document.body.style.opacity = 0;

        // Skift side efter fade (2000 ms)
        setTimeout(() => {
            window.location.href = "../Stjernehob/fra tage til hob.html"; // siden der skal skiftes til
        }, 2000);
    }, 5000); // 5000 ms = 5 sekunder
});
