window.addEventListener("DOMContentLoaded", () => {
    // Hent alle relevante elementer fra HTML
    const lilblue = document.getElementById("lilblue");           
    const bigblue = document.getElementById("bigblue");           
    const weight = document.getElementById("weight");           
    const weightBR = document.getElementById("weightBB");       
    const weightLR = document.getElementById("weightLB");       
  
    // Gør stjernerne draggable
    makeDraggable(lilblue);
    makeDraggable(bigblue);
  
    // Funktion til at gøre et element draggable
    function makeDraggable(element) {
      let offsetX = 0, offsetY = 0, isDragging = false;
  
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
  
    // Funktion til at tjekke overlap mellem stjerne og vægt
    function checkOverlap(star) {
      const rStar = star.getBoundingClientRect();
      const rWeight = weight.getBoundingClientRect();
  
      const overlap =
        !(rStar.right < rWeight.left ||
          rStar.left > rWeight.right ||
          rStar.bottom < rWeight.top ||
          rStar.top > rWeight.bottom);
  
      if (overlap) {
        star.style.transition = "opacity 0.6s ease";
        star.style.opacity = "0";
        setTimeout(() => (star.style.display = "none"), 600);
  
        if (star.id === "lilblue") {
          weight.style.display = "none";
          weightLR.style.display = "block";

          // Skift til planetarisktage.html efter fade
          setTimeout(() => {
            window.location.href = "../Planetarisktage/planetarisktage.html";
          }, 800);

        } else if (star.id === "bigblue") {
          weight.style.display = "none";
          weightBR.style.display = "block";

          // Transition to another page after fade
          setTimeout(() => {
            window.location.href = "../Supernova/Supernova2.html"; 
          }, 800);
        }
      } else {
        star.style.left = "";
        star.style.top = "";
      }
    }
});
