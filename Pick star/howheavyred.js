window.addEventListener("DOMContentLoaded", () => {
    const lilred = document.getElementById("lilred");
    const bigred = document.getElementById("bigred");
    const weight = document.getElementById("weight");
    const weightBR = document.getElementById("weightBR");
    const weightLR = document.getElementById("weightLR");
    const transitionVideo = document.getElementById("transitionVideo");
  
    makeDraggable(lilred);
    makeDraggable(bigred);
  
    function makeDraggable(element) {
      let offsetX = 0,
        offsetY = 0,
        isDragging = false;
  
      element.addEventListener("mousedown", (e) => {
        isDragging = true;
        element.style.cursor = "grabbing";
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
      });
  
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        element.style.left = e.clientX - offsetX + "px";
        element.style.top = e.clientY - offsetY + "px";
      });
  
      document.addEventListener("mouseup", () => {
        if (!isDragging) return;
        isDragging = false;
        element.style.cursor = "grab";
        checkOverlap(element);
      });
    }
  
    function checkOverlap(star) {
      const rStar = star.getBoundingClientRect();
      const rWeight = weight.getBoundingClientRect();
  
      const overlap =
        !(rStar.right < rWeight.left ||
          rStar.left > rWeight.right ||
          rStar.bottom < rWeight.top ||
          rStar.top > rWeight.bottom);
  
      if (overlap) {
        // Fade stjerne ud
        star.style.transition = "opacity 0.6s ease";
        star.style.opacity = "0";
        setTimeout(() => (star.style.display = "none"), 600);
  
        // Skift vægt afhængigt af stjerne
        if (star.id === "lilred") {
          weight.style.display = "none";
          weightLR.style.display = "block";
        } else if (star.id === "bigred") {
          weight.style.display = "none";
          weightBR.style.display = "block";
  
          // Start video med lille delay (f.eks. 1.5 sek)
          setTimeout(() => {
            transitionVideo.style.display = "block";
            transitionVideo.style.opacity = "1";
  
            // Bind ended-event inden afspilning
            transitionVideo.addEventListener(
              "ended",
              () => {
                window.location.href = "../Supernova/supernova.html";
              },
              { once: true }
            );
  
            transitionVideo.play();
          }, 1500);
        }
      } else {
        // Hvis ikke overlap, returner stjernen til startposition
        star.style.left = "";
        star.style.top = "";
      }
    }
  });
  