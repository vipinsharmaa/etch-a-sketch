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
    fillBoxes();

}
// Fill the boxes when hovered

function fillBoxes(color) {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {

            if (color === 'random') {
                box.style.backgroundColor = randomColor();
            }
            else {
                box.style.backgroundColor = 'black';
            }
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

// random number for rgb values 


function randomColor() {
    let r = Math.floor(Math.random() * 256); // random red component
    let g = Math.floor(Math.random() * 256); // random green component
    let b = Math.floor(Math.random() * 256); // random blue component
    return `rgb(${r}, ${g}, ${b})`; // return RGB color string
}


// Random colors

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', function () {
    fillBoxes('random');
});



// initial grid

createGrid(16);