const input = document.getElementById('starName');
const buttons = document.querySelectorAll('.keyboard button');
const rightArrow = document.getElementById('rightArrow');
const transitionVideo = document.getElementById('transitionVideo');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.id === 'backspace') {
      input.value = input.value.slice(0, -1); 
    } else if (button.id === 'space') {
      input.value += ' '; 
    } else {
      input.value += value; 
    }
  });
});

rightArrow.addEventListener('click', (e) => {
  e.preventDefault();

  // Fade ind video
  transitionVideo.style.display = 'block';
  transitionVideo.style.opacity = 0;
  transitionVideo.style.transition = 'opacity 0.8s ease-in';
  transitionVideo.play();

  setTimeout(() => {
    transitionVideo.style.opacity = 1;
  }, 10);

  // Fade ud body inden redirect
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease-out";
    document.body.style.opacity = 0;
  }, 2000); // fx 2 sekunder efter klik

  // Redirect når alt er faded
  setTimeout(() => {
    window.location.href = 'stjernetage.html';
  }, 3000);
});