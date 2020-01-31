// Javascript for PROJECT: ETCH-A-SKETCH

const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
    const column = document.createElement('div');
    container.appendChild(column);
    column.classList.add('column')
}

for (let j = 1; j <= 16; j++) {
    const columnList = document.querySelectorAll('.column');
    columnList.forEach((col) => {
        const row = document.createElement('div');
        col.appendChild(row);
        row.classList.add('row');
        col.addEventListener('mouseover', (event) => {
            event.target.style.background = 'blue';
        });
        col.addEventListener('mouseout', (event) => {
            event.target.style.background = 'black';
        });
    });
}