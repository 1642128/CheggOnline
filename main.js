const board = document.getElementById("board");

const cols = 8;
const rows = 10;

for (let i = 0; i < cols * rows; i++) {
  const cell = document.createElement("div");
  
  const r = Math.floor(i / cols);
  if (r < 2) cell.className = "board_slot_team1";
  else if (r >= rows - 2) cell.className = "board_slot_team2";
  else cell.className = "board_slot";

  board.appendChild(cell);
}
