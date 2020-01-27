const gridContainer = document.querySelector('.gridContainer');
const squares = document.querySelectorAll('.square');
const sizeButton = document.querySelector('#size');

function changeBackground(square) {
    square.classList.add('darker');
}

function setSize(size) {
    console.log(`size is ${size}`);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function buildGrid(size) {
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
        square.addEventListener('mouseover', function() {
            changeBackground(square);
        })
    }
}

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
      }
}

sizeButton.addEventListener('click', function () {
    let newSize = prompt('Please enter the number of squares per side:', 16);
    removeGrid(); 
    setSize(newSize);   
    buildGrid(newSize);
})