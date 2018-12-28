let doc = document;

class Board {
  constructor() {
    this.grid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  };

    makeMove(x, y, sym) {
      this.grid[x][y] = sym;
  };

};

let dispBoard = new Board();

doc.addEventListener('DOMContentLoaded', () => {

// grab board container
  let container = doc.querySelector('.board_cont');
  let turnCount = 1;

// function to create empty spaces for board
  const makeSpaces = () => {
    let space = doc.createElement('div');
    space.classList.add('board_space');
    return space;
  };

// forEach to update board container with empty spaces
  dispBoard.grid.forEach((row, i) => {
    row.forEach((space, j) => {
      // new variable for empty spaces and created id for each space idx -- for legend
      let empSpace = makeSpaces(space);
      let spaceID = String(i) + String(j); // change idx to string
      empSpace.setAttribute('id', spaceID);
      container.appendChild(empSpace);
    });
  });

  container.addEventListener('click', (event) => {
    // when space is clicked, change to symbol
    let selectedSpace = event.target;
    let x = Number(selectedSpace.id[0]);
    let y = Number(selectedSpace.id[1]);
    let sym = turnCount % 2 === 0 ? 'x' : 'o'; // changing symbol

    dispBoard.makeMove(x, y);
    selectedSpace.innerText = sym;
    turnCount++;
  });


});

// export default Board;
