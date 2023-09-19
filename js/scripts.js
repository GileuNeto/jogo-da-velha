const gridElements = document.querySelectorAll("#grid");
const board = document.querySelectorAll("[board]");

let isCircleTurn = false;

const placeMark = (grid, classToAdd) => {
    grid.classList.add(classToAdd);
};



const setBoardHoverClass = () => {
    board.classList.remove("circle");
    board.classList.remove("x");
  
    if (isCircleTurn) {
      board.classList.add("circle");
    } else {
      board.classList.add("x");
    }
  };

const swapTurns = () => {
    isCircleTurn = !isCircleTurn; 

    setBoardHoverClass();
};

const handleClick = (e) =>{
    const grid = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';

    placeMark(grid, classToAdd);

    swapTurns();
};

for (const grid of gridElements){
    grid.addEventListener('click', handleClick, {once: true});
}
