const dragElement = document.getElementById('drag-element');
let isDragging = false;
let offsetX, offsetY;

dragElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    // Beregn forskellen mellem musens position og elementets top-venstre hjørne
    offsetX = e.clientX - dragElement.getBoundingClientRect().left;
    offsetY = e.clientY - dragElement.getBoundingClientRect().top;
    dragElement.style.cursor = 'grabbing'; // Skift cursor til "grabbing"
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Afbryd, hvis ikke der trækkes

    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    dragElement.style.left = `${newX}px`;
    dragElement.style.top = `${newY}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    dragElement.style.cursor = 'grab'; // Skift tilbage til "grab"
});