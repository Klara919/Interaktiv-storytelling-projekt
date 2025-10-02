const bowl = document.getElementById('bowlmedhviskestykke');

bowl.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {
    event.preventDefault();

    // Beregn forskel mellem klikpunkt og elementets top/left
    const shiftX = event.clientX - bowl.getBoundingClientRect().left;
    const shiftY = event.clientY - bowl.getBoundingClientRect().top;

    bowl.style.position = 'absolute';
    bowl.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        bowl.style.left = pageX - shiftX + 'px';
        bowl.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    bowl.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        bowl.onmouseup = null;
    };
}

// Gør det muligt at slippe musen uden for elementet
bowl.ondragstart = function() {
    return false;
};