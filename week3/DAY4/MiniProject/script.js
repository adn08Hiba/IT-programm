const colorElements = document.querySelectorAll('.color');
const squares = document.querySelectorAll('.square');
const clearButton = document.getElementById('clear');

let selectedColor = null;
let isDrawing = false;

colorElements.forEach(colorEl => {
    colorEl.addEventListener('click', () => {
        colorElements.forEach(c => c.style.outline = 'none');
        colorEl.style.outline = '3px solid black';
        selectedColor = colorEl.style.backgroundColor;
    });
});

document.addEventListener('mousedown', () => {
    isDrawing = true;
});
document.addEventListener('mouseup', () => {
    isDrawing = false;
});
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (selectedColor) {
            square.style.backgroundColor = selectedColor;
        }
    });
    square.addEventListener('mouseover', () => {
        if (isDrawing && selectedColor) {
            square.style.backgroundColor = selectedColor;
        }
    });
});
clearButton.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
    selectedColor = null;
    colorElements.forEach(c => c.style.outline = 'none');
});
