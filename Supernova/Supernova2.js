document.getElementById("play-btn").addEventListener("click", () => {
    const video = document.getElementById("bg-video");
    const image = document.getElementById("bg-image");
    const audio = document.getElementById("bg-audio");
    const button = document.getElementById("play-btn");
  
    // Skjul billedet, vis video
    image.style.display = "none";
    video.style.display = "block";
  
    // Start video og lyd (uden fade)
    video.play();
    audio.play();
  
    // Fade knappen hurtigt væk
    button.classList.add("fade-out");
  
    // Fjern knap helt efter fade (0.5 sek)
    setTimeout(() => {
      button.style.display = "none";
    }, 500);
  });
  