const container = document.querySelector('#container');

// createGrid function

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            container.appendChild(box);
            box.style.flex = `0 0 calc(100% / ${size})`;
        }
    }


    // Hover 

    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.classList.add("hovered");
        });
    });

}


// Grid button

const grid = document.querySelector('.grid');
grid.addEventListener('click', function () {
    let gridSize = prompt("Enter the size for the grid (16-100)");

    // delete current grid
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        container.removeChild(box);
    });

    createGrid(gridSize);

});


// initial grid

createGrid(16);