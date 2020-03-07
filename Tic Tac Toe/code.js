const game = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
];

const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const board = document.getElementById("board");
const PLAYER_1_ICON = "X";
const PLAYER_2_ICON = "O";
let counter = 0;

let currentPlayer = "1";
player1.classList.add("active");

function togglePlayer() {
    currentPlayer = (currentPlayer === "1") ? "2" : "1";
    player1.classList.toggle("active");
    player2.classList.toggle("active");
}

function win() {
    board.removeEventListener("click", handleClick);
    alert(`Player ${currentPlayer} wins!`);
}

function verifyWin() {
    //rows
    if (game[0] === game[1] && game[0] === game[2]) win();
    if (game[3] === game[4] && game[3] === game[5]) win();
    if (game[6] === game[7] && game[6] === game[8]) win();
    //columns
    if (game[0] === game[3] && game[0] === game[6]) win();
    if (game[1] === game[4] && game[1] === game[7]) win();
    if (game[2] === game[5] && game[2] === game[8]) win();
    //diagonals
    if (game[0] === game[4] && game[0] === game[8]) win();
    if (game[2] === game[4] && game[2] === game[6]) win();
}

function handleClick(event) {
    const cell = event.target.id;
    const currentCell = document.getElementById(cell);
    const cellId = cell.charAt(cell.length - 1);

    if (typeof game[cellId] === "number") {
        currentCell.innerText = (currentPlayer === "1") ? PLAYER_1_ICON : PLAYER_2_ICON;
        game[cellId] = currentCell.innerText;
        ++counter;
        if(counter < 9) {
            verifyWin();
            togglePlayer();
        }
        else {
            alert("Draw!");
        } 
    }    
}

board.addEventListener("click", handleClick);