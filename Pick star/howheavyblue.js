window.addEventListener("DOMContentLoaded", () => {
    const lilred = document.getElementById("lilblue");
    const bigred = document.getElementById("bigblue");
    const weight = document.getElementById("weight");
    const weightBR = document.getElementById("weightBB");
    const weightLR = document.getElementById("weightLB");
  
    makeDraggable(lilblue);
    makeDraggable(bigblue);
  
    function makeDraggable(element) {
      let offsetX = 0, offsetY = 0, isDragging = false;
  
      element.addEventListener("mousedown", (e) => {
        isDragging = true;
        element.style.cursor = "grabbing";
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
      });
  
      document.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
          element.style.cursor = "grab";
          checkOverlap(element);
        }
      });
  
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        element.style.left = e.clientX - offsetX + "px";
        element.style.top = e.clientY - offsetY + "px";
      });
    }
  
    function checkOverlap(star) {
      const rStar = star.getBoundingClientRect();
      const rWeight = weight.getBoundingClientRect();
  
      const overlap = !(
        rStar.right < rWeight.left ||
        rStar.left > rWeight.right ||
        rStar.bottom < rWeight.top ||
        rStar.top > rWeight.bottom
      );
  
      if (overlap) {
        // Skift vægt afhængigt af hvilken stjerne der rammer
        if (star.id === "lilblue") {
          weight.style.display = "none";
          weightLB.style.display = "block";
        } else if (star.id === "bigblue") {
          weight.style.display = "none";
          weightBB.style.display = "block";
        }
  
        // Fjern den stjerne der blev brugt
        star.style.transition = "opacity 0.6s ease";
        star.style.opacity = "0";
        setTimeout(() => star.style.display = "none", 600);
      }
    }
  });
  