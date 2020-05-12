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
		paint(paintColor);
	} else {
		paint(paintColor);
	}
}
function clearGrid(gridSize) {
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
}

function paint(color) {
	const rowList = document.querySelectorAll('.row');
	rowList.forEach((row) => {
		let random = () => Math.floor(Math.random() * 256);
		let r = random();
		let g = random();
		let b = random();
		row.addEventListener('mouseover', (event) => {
			event.target.style.background = color === 'rainbow' ? `rgb(${r}, ${g}, ${b})` : 'rgb(0, 0, 0)';
			if (color === 'rainbow') {
				r -= 20;
				g -= 20;
				b -= 20;
			}
		});
	});
	colorBtn.textContent = color === 'rainbow' ? 'Rainbow' : 'Black';
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
});
clearBtn.addEventListener('click', (e) => {
	clearGrid(gridSize);
	createGrid(gridSize);
});
colorBtn.addEventListener('click', (e) => {
	if (paintColor === 'black') {
		paintColor = 'rainbow';
		paint(paintColor);
	} else {
		paintColor = 'black';
		paint(paintColor);
	}
});

createGrid(gridSize);
