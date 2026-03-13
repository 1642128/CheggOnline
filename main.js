const board = document.getElementById("board");

const cols = 8;
const rows = 10;

for (let i = 0; i < cols * rows; i++) {
  const cell = document.createElement("div");
  const r = Math.floor(i / cols);

  cell.className =
    r < 2 ? "board_slot_team1"
    : r >= rows - 2 ? "board_slot_team2"
    : "board_slot";

  board.appendChild(cell);
}
