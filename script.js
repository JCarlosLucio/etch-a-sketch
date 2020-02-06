// Javascript for PROJECT: ETCH-A-SKETCH
const content = document.querySelector('#content');
const sizeBtn = document.querySelector('#sizeBtn');
const clearBtn = document.querySelector('#clearBtn');
const colorBtn = document.querySelector('#colorBtn');
let gridSize = 16;
let paintColor = 'black';

function createGrid(gridSize) {
    for (let i = 1; i <= gridSize; i++) {
        const column = document.createElement('div');
        content.appendChild(column);
        column.classList.add('column');
    }
    for (let j = 1; j <= gridSize; j++) {
        let squareSize = 780 / gridSize;
        const columnList = document.querySelectorAll('.column');
        columnList.forEach((col) => {
            const row = document.createElement('div');
            col.appendChild(row);
            row.classList.add('row');
            row.style.width = `${squareSize}px`;
            row.style.height = `${squareSize}px`;
        });
    }
    if (paintColor === 'black') {
        paintBlack();
    } else {
        paintRndColor();
    }
}
function clearGrid(gridSize) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}
function paintBlack() {
    const rowList = document.querySelectorAll('.row');
    rowList.forEach((row) => {
        let rgb = 0;
        row.addEventListener('mouseover', (event) => {
            event.target.style.background = `rgb(${rgb}, ${rgb}, ${rgb})`;
            // rgb -= 100;
        });
    });
    colorBtn.textContent = 'Rainbow';
}
function paintRndColor() {
    const rowList = document.querySelectorAll('.row');
    rowList.forEach((row) => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        row.addEventListener('mouseover', (event) => {
            event.target.style.background = `rgb(${r}, ${g}, ${b})`;
            r -= 20;
            g -= 20;
            b -= 20;
        });
    });
    colorBtn.textContent = 'Black';
}

sizeBtn.addEventListener('click', (e) => {
    clearGrid(gridSize);
    gridSize = parseInt(prompt('Enter grid size(i.e.32 for a 32x32 grid)'), '0');
    if (gridSize < 0) {
        gridSize = 16;
    } else if (isNaN(gridSize)) {
        gridSize = 16;
    } else if (gridSize > 64) {
        gridSize = 64;
    }
    sizeBtn.textContent = `${gridSize}x${gridSize}`;
    createGrid(gridSize);
})
clearBtn.addEventListener('click', (e) => {
    clearGrid(gridSize);
    createGrid(gridSize);
})
colorBtn.addEventListener('click', (e) => {
    if (paintColor === 'black') {
        paintRndColor();
        paintColor = 'random';
    } else {
        paintBlack();
        paintColor = 'black';
    }
})

createGrid(gridSize);