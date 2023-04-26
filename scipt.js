const container = document.querySelector('.container');
const containerSideSize = container.offsetHeight;

const createGridButton = document.querySelector('.create');
createGridButton.addEventListener('click', createGrid);

const eraserButton = document.querySelector('.eraserButton');
eraserButton.addEventListener('click', eraseSquare);

const blackButton = document.querySelector('.blackButton');
blackButton.addEventListener('click', colorBlackAgain);

function colorBlackAgain() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.classList.remove('eraser');
        });
    })
}

function eraseSquare() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.classList.add('eraser');
        });
    })
}

function colorBlack(e) {
    this.classList.add('black');
}

function enterGridSize() {
    let size = prompt('Enter a grid size (0 - 100):');
    const isInteger = /^(\d)+$/g; // check if number is integer
    while(size > 100 || size <= 0 || !(isInteger.test(size))) {
        size = prompt('Wrong value!\nEnter a grid size (0 - 100):');
    }
    return size;
}

function createGrid() {
    container.innerHTML = ''; // delete the previous grid
    const size = enterGridSize();
    const squareSideSize = containerSideSize / size - 2 + 'px';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', colorBlack);
        square.classList.add('square');
        square.style.height = squareSideSize;
        square.style.width = squareSideSize;
        container.appendChild(square);
    }
}