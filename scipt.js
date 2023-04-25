const container = document.querySelector('.container');

function colorSquare(e) {
    this.classList.add('pink');
}

function createGrid() {
    for(let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', colorSquare);

        container.appendChild(square);
    }
}

createGrid();