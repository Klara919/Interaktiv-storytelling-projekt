const input = document.getElementById('starName');
const buttons = document.querySelectorAll('.keyboard button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === 'backspace') {
            input.value = input.value.slice(0, -1); // slet sidste tegn
        } else if (button.id === 'space') {
            input.value += ' '; // tilføj mellemrum
        } else {
            input.value += value; // tilføj bogstav
        }
    });
});