let doc = document;

class Board {
  constructor() {
    this.grid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  };

};

let dispBoard = new Board();

doc.addEventListener('DOMContentLoaded', () => {

// grab board container
  let container = doc.querySelector('.board_cont');

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



});
