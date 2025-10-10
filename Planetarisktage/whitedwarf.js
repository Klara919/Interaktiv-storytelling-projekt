document.addEventListener("DOMContentLoaded", () => {
    const navn = localStorage.getItem('stjerneNavn');
    const flyupName = document.getElementById('flyup-name');
    const transitionContainer = document.getElementById('transition-container');
    const transitionVideo = document.getElementById('transitionVideo');
    const openButton = document.getElementById('openButton');
  
    if (navn && flyupName && openButton) {
      flyupName.textContent = navn;
  
      openButton.addEventListener('click', () => {
        // Vis transition overlay
        transitionContainer.style.display = 'block';
  
        // Start video
        transitionVideo.play();
  
        // Start navne-animation
        flyupName.style.animation = 'flyUp 4s ease-out forwards 1s';
  
        // Redirect til theend.html når videoen er færdig
        transitionVideo.addEventListener('ended', () => {
          window.location.href = 'theend.html';
        });
      });
    }
  });
  