const container = document.querySelector('#container');

// createGrid function

function createGrid(size) {
    let totalCells = size * size;
    for (let i = 0; i < totalCells; i++) {

        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        box.style.flex = `0 0 calc(100% / ${size})`;
    }


    // Fill the boxes when hovered


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


// Random colors

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', function () {

    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
        });
    });

});


// random number for rgb values 

function random() {
    return Math.floor((Math.random() * 255) + 1);
}

// initial grid

createGrid(16);