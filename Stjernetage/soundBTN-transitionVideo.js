window.addEventListener("load", () => {
    // Vent på første klik
    window.addEventListener("click", () => {
      const audio = document.getElementById("bg-audio");
      audio.play();
  
      // Vent 5 sekunder efter klik
      setTimeout(() => {
        // Fade ud i 2 sekunder
        document.body.style.transition = "opacity 2s ease";
        document.body.style.opacity = 0;
  
        // Skift side efter fade
        setTimeout(() => {
          window.location.href = "../Stjernehob/fra tage til hob.html";
        }, 2000);
      }, 5000);
    }, { once: true }); // kun første klik
  });