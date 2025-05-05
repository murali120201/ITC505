const boardSize = 5;
const board = document.getElementById('board');
let initialState = [];
let hasUserInteracted = false;

function createBoard() {
  board.innerHTML = '';
  for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', () => handleClick(i));
    board.appendChild(cell);
  }
}

function toggle(index) {
  const cell = document.querySelector(`.cell[data-index="${index}"]`);
  if (cell) cell.classList.toggle('is-off');
}

function handleClick(index) {
  hasUserInteracted = true;

  const row = Math.floor(index / boardSize);
  const col = index % boardSize;

  toggle(index); // toggle itself
  if (col > 0) toggle(index - 1); // left
  if (col < boardSize - 1) toggle(index + 1); // right
  if (row > 0) toggle(index - boardSize); // top
  if (row < boardSize - 1) toggle(index + boardSize); // bottom

  checkWin();
}

function randomizeBoard(moves = 15) {
  initialState = Array(boardSize * boardSize).fill(false);
  hasUserInteracted = false;

  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.classList.remove('is-off'));

  for (let i = 0; i < moves; i++) {
    const randomIndex = Math.floor(Math.random() * (boardSize * boardSize));
    handleClick(randomIndex);
  }

  const updatedCells = document.querySelectorAll('.cell');
  updatedCells.forEach((cell, i) => {
    initialState[i] = cell.classList.contains('is-off');
  });

  hasUserInteracted = false;
}

function resetGame() {
  hasUserInteracted = false;

  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, i) => {
    if (initialState[i]) {
      cell.classList.add('is-off');
    } else {
      cell.classList.remove('is-off');
    }
  });
}

function newGame() {
  hasUserInteracted = false;
  createBoard();
  randomizeBoard();
}

function checkWin() {
  if (!hasUserInteracted) return;

  const cells = document.querySelectorAll('.cell');
  const won = [...cells].every(cell => !cell.classList.contains('is-off'));
  if (won) {
    setTimeout(() => {
      document.getElementById('winPopup').style.display = 'flex';
    }, 200);
  }
}

function closePopup() {
  document.getElementById('winPopup').style.display = 'none';
}

document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('newGameBtn').addEventListener('click', newGame);

createBoard();
randomizeBoard();
