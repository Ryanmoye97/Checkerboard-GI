const checkerboard = document.getElementById('checkerboard');

// Create checkerboard squares
for (let i = 0; i < 8; i++) {
for (let j = 0; j < 8; j++) {
const square = document.createElement('div');
square.classList.add('square');
if ((i + j) % 2 === 1) {
square.classList.add('black');
}
checkerboard.appendChild(square);
}
}

// Add event listeners to squares
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
square.addEventListener('click', () => {
// Toggle color when square is clicked
square.classList.toggle('black');
});
});