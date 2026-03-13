const board = document.getElementById("board");

const size = 8; // 8x8
for (let i = 0; i < size * size; i++) {
  const cell = document.createElement("div");
  cell.className = "board_slot";  // or team logic here
  board.appendChild(cell);
}

