const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('startScreen');
const background = document.getElementById('background');
const video = document.getElementById('bg-video');
const audio = document.getElementById('supernovaSound');

startButton.addEventListener('click', () => {
  // Skjul startskærm
  startScreen.style.display = 'none';

  // Vis video-overlay
  background.style.visibility = 'visible';
  requestAnimationFrame(() => {
    background.style.opacity = 1;
  });

  // Start video
  video.loop = true;
  video.play().then(() => {
    video.muted = false; // fjern muted, hvis du vil høre videoens egen lyd
  }).catch(e => console.log("Video play fejlede:", e));
  

  // Start lyd med fade-in
  audio.volume = 0;
  audio.play().then(() => {
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.7) {
        vol += 0.02;
        audio.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);
  }).catch(e => console.log("Autoplay lyd blokeret:", e));
});
