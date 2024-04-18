let theme = "black";
// Function to toggle between two sets of colors when the button is clicked
const btn = document.getElementById('toggleButton');
btn.addEventListener('click', changeTheme);
var checkboard = document.getElementById('checkboard');
var black = document.querySelector('.black');
var white = document.querySelectorAll('.white');

// Toggle between colors1 and colors2
function changeTheme() {
  if (theme === 'black') {
    let whiteList = document.querySelectorAll(".white");
    for (let i = 0; i < whiteList.length; i++) {
      whiteList[i].style.backgroundColor = "green";
    }
    let blackList = document.querySelectorAll(".black");
    for (let i = 0; i < blackList.length; i++) {
      blackList[i].style.backgroundColor = "blue";
    }
    theme  = 'blue'
} else {
    for (let i = 0; i < white.length; i++) {
      white[i].style.backgroundColor = "white";
    }
    black.style.backgroundColor = 'black';
    theme = 'black';
  }
}