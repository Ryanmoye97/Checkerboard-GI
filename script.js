

// JavaScript to generate the checkerboard
var checkerboard = document.getElementById('checkerboard');
var cells = document.querySelectorAll('#checkerboard td');
var toggleButton = document.getElementById('toggleButton');
var mode = 'color'; // Initial mode

// Define the size of the checkerboard
var size = 8;

for (var i = 0; i < size; i++) {
var row = document.createElement('tr');

for (var j = 0; j < size; j++) {
var cell = document.createElement('td');
if ((i + j) % 2 === 0) {
cell.className = 'white';
} else {
cell.className = 'black';
}
row.appendChild(cell);
}

checkerboard.appendChild(row);
}

// Function to toggle modes
function toggleMode() {
if (mode === 'color') {
mode = 'navigation';
toggleButton.textContent = 'Toggle Mode (Navigation)';
// Add event listeners for navigation mode
cells.forEach(function(cell) {
cell.addEventListener('click', navigateCheckerboard);
});
} else {
mode = 'color';
toggleButton.textContent = 'Toggle Mode (Color)';
// Remove event listeners for navigation mode
cells.forEach(function(cell) {
cell.removeEventListener('click', navigateCheckerboard);
});
}
}

// Function to handle navigation mode
function navigateCheckerboard() {
// Your navigation logic here
// For demonstration purposes, let's just log the cell coordinates
var row = this.parentNode.rowIndex;
var col = this.cellIndex;
console.log('Clicked cell: Row ' + row + ', Column ' + col);
}

// Add event listener to toggle button
toggleButton.addEventListener('click', toggleMode);