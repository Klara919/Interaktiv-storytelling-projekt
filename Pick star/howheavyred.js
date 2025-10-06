window.addEventListener("DOMContentLoaded", () => {
    //  Hent alle relevante elementer fra HTML
    const lilred = document.getElementById("lilred");           // Lille rød stjerne
    const bigred = document.getElementById("bigred");           // Stor rød stjerne
    const weight = document.getElementById("weight");           // Standard vægt
    const weightBR = document.getElementById("weightBR");       // Big Red vægt (skiftes til)
    const weightLR = document.getElementById("weightLR");       // Little Red vægt (skiftes til)
    const transitionVideo = document.getElementById("transitionVideo"); // Video som skal afspilles
  
    // Gør stjernerne draggable
    makeDraggable(lilred);
    makeDraggable(bigred);
  
    // Funktion til at gøre et element draggable
    function makeDraggable(element) {
      let offsetX = 0, offsetY = 0, isDragging = false;
  
      // Når musen trykkes ned på stjernen
      element.addEventListener("mousedown", (e) => {
        isDragging = true;                      // Vi er nu i drag-mode
        element.style.cursor = "grabbing";      // Skift cursor til grabbing
  
        // Beregn forskellen mellem musens position og elementets top/left
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
      });
  
      // Når musen bevæger sig, mens vi holder klik
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;                // Stop, hvis vi ikke trækker
        // Flyt elementet ved at sætte left/top baseret på musens position minus offset
        element.style.left = e.clientX - offsetX + "px";
        element.style.top = e.clientY - offsetY + "px";
      });
  
      // Når musen slippes
      document.addEventListener("mouseup", () => {
        if (!isDragging) return;                // Stop, hvis vi ikke trækker
        isDragging = false;                     // Drag-mode slås fra
        element.style.cursor = "grab";          // Skift cursor tilbage til grab
  
        // Tjek om stjernen overlapper vægten
        checkOverlap(element);
      });
    }
  
    // Funktion til at tjekke overlap mellem stjerne og vægt
    function checkOverlap(star) {
      const rStar = star.getBoundingClientRect();    // Stjernens position og størrelse
      const rWeight = weight.getBoundingClientRect();// Standard vægts position og størrelse
  
      // Tjek om stjernen overlapper vægten
      const overlap =
        !(rStar.right < rWeight.left ||
          rStar.left > rWeight.right ||
          rStar.bottom < rWeight.top ||
          rStar.top > rWeight.bottom);
  
      if (overlap) {
        // Fade stjerne ud
        star.style.transition = "opacity 0.6s ease";  // Glidende fade
        star.style.opacity = "0";                     // Gør stjernen gennemsigtig
        setTimeout(() => (star.style.display = "none"), 600); // Fjern element efter fade
  
        // Skift vægt afhængigt af hvilken stjerne der overlapper
        if (star.id === "lilred") {
          weight.style.display = "none";   // Skjul standard vægt
          weightLR.style.display = "block"; // Vis little red vægt
        } else if (star.id === "bigred") {
          weight.style.display = "none";    // Skjul standard vægt
          weightBR.style.display = "block"; // Vis big red vægt
  
          // Start video med lille delay (f.eks. 1,5 sek)
          setTimeout(() => {
            transitionVideo.style.display = "block"; // Gør video synlig
            transitionVideo.style.opacity = "1";     // Sørg for den ikke er transparent
  
            // Når videoen slutter, skift til ny side
            transitionVideo.addEventListener(
              "ended",
              () => {
                window.location.href = "../Supernova/supernova.html"; // Ny side
              },
              { once: true } // Listener kører kun én gang
            );
  
            transitionVideo.play(); // Start afspilning
          }, 1500);
        }
      } else {
        // Hvis ingen overlap, returner stjernen til startposition
        star.style.left = "";
        star.style.top = "";
      }
    }
  });
  