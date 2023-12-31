//Create a grid of 16x16 square divs into grid-container
//Make divs appear as a grid( versus just one on each line )
//Set up hover effect so that grid divs change colour when mouse passes over them
let side = 16;

//Define button that will change grid size
const gridButton = document.querySelector('.number')
//Add a button prompting the user for the number of squares per side (maximum 50)
gridButton.addEventListener('click', function () {
    //PROMPT USER FOR SIDE LENGTH
    side = prompt('Enter the number of grids you want per side (Max 100)')
    //CLEAR EXISTING GRID
    document.querySelector('#container').innerHTML = "";
    //CALL GRID WITH UPDATED SIDE
    grid(side)
})

//Have clear feature 
//Define clear button
const clearGrid = document.querySelector('.clear')
clearGrid.addEventListener('click', function () {
    //CLEAR EXISTING GRID
    document.querySelector('#container').innerHTML = "";
    //CALL GRID WITH UPDATED SIDE
    grid(side)
})

//Define eraser button
const eraserButton = document.querySelector('.eraser')
let eraser = 0;
//highlight the eraser option when toggled on
eraserButton.addEventListener('click', function () {
    if (eraser == 0) {
        eraser += 1
        eraserButton.style.cssText = 'border: 4px solid yellow; background-color: rgb(245, 244, 164);'
    } else {
        eraser -= 1
        eraserButton.style.cssText = 'border: 2px solid black;'
    }
})

//Define randomize button
const randomizeButton = document.querySelector('.randomize')
let randomize = 0;
randomizeButton.addEventListener('click', function () {
    if (randomize == 0) {
        randomize += 1
        randomizeButton.style.cssText = 'border: 4px solid yellow; background-color: rgb(245, 244, 164);'
    } else {
        randomize -= 1
        randomizeButton.style.cssText = 'border: 2px solid black;'
    }
})

//Define random number button
function random(number) {
    return Math.floor(Math.random() * number + 1)
}

//Define progressive button
const progressiveButton = document.querySelector('.progressive')
let progressive = 0;
progressiveButton.addEventListener('click', function () {
    if (progressive == 0) {
        stroke = 240;
        progressive += 1
        progressiveButton.style.cssText = 'border: 2px solid yellow; background-color: rgb(245, 244, 164);'
    } else {
        stroke = 240;
        progressive -= 1
        progressiveButton.style.cssText = 'border: 2px solid black;'
    }
})

// STROKE STARTING DARKNESS is 240 initially
let stroke = 240;

//Define grid-container
const gridContainer = document.querySelector('#container')
gridContainer.style.cssText = 'border: 1px solid black; '

//Define function that creates grid
function grid(side) {
    for (let i = 0; i < side; i++) {
        //Define row; Create (SIDE) number of rows inside container
        const row = document.createElement('div')
        row.style.cssText = 'display:flex; max-width: 960px; '
        gridContainer.appendChild(row)
        //Define grid; Create (SIDE) number of grids inside row
        for (let i = 0; i < side; i++) {
            const grid = document.createElement('div');
            //Clear grid content
            grid.textContent = ""
            //CALCULATE HEIGHT AND WIDTH SIZE
            let gridSide = (960 - 2 * side) / side
            //SET STYLE WITH NEW SIZE
            grid.style.cssText = `background-color:white; border: 1px solid rgb(245, 245, 245); width:${gridSide}px; height:${gridSide}px;`
            grid.addEventListener('mouseover', function () {
                //CALL VALUE OF COLOR ON COLORPICKER
                const color = document.querySelector('#colorpicker').value
                //SET VALUE OF COLOR PICKER
                grid.style.background = `${color}`
                //IF ERASER IS ON
                if (eraser == 1) {
                    //OVERWRITE COLOUR
                    grid.style.background = 'rgb(255,255,255)'
                    //IF RANDOMIZE IS ON
                } else if (randomize == 1) {
                    //recieve 3 random values from 0-255
                    const random1 = random(255)
                    const random2 = random(255)
                    const random3 = random(255)
                    //assign grid background to these values
                    grid.style.background = `rgb(${random1},${random2},${random3})`
                    //IF PROGRESSIVE = ON
                } else if (progressive == 1) {
                    // STROKE STARTING DARKNESS is 240 initially
                    //HAVE RANGE FROM (240,240,240) AND DECREASE BY 10% UNTIL (0,0,0) FOR BLACK
                    grid.style.background = `rgb(${stroke},${stroke},${stroke})`
                    stroke -= 24
                }
            })
            row.appendChild(grid)
        }
    }
}
//INITIAL CALL ON GRID
grid(side)


//change from hover to click + drag
//change website style