const container = document.querySelector('.container');
const containerSideSize = container.offsetHeight;

const createGridButton = document.querySelector('.create');
createGridButton.addEventListener('click', createGrid);

const eraserButton = document.querySelector('.eraserButton');
eraserButton.addEventListener('click', eraseSquare);

const blackButton = document.querySelector('.blackButton');
blackButton.addEventListener('click', colorBlackAgain);

const gridToggle = document.querySelector('input[name=gridToggle]');
gridToggle.addEventListener('change', toggleGridOnOff);

function toggleGridOnOff(e) {
    const squares = document.querySelectorAll('.square');
    if(this.checked === true) {
        squares.forEach((square) => {
            square.classList.add('addBorder');
        });
    } else {
        squares.forEach((square) => {
            square.classList.remove('addBorder');
        });
    }
    console.log(this.checked === true);
};

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
    const squareSideSize = containerSideSize / size + 'px';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', colorBlack);
        square.classList.add('square');
        square.style.height = squareSideSize;
        square.style.width = squareSideSize;
        container.appendChild(square);

        // check grid
        if (gridToggle.checked === true) square.classList.add('addBorder');
        else square.classList.remove('addBorder');
    }
}