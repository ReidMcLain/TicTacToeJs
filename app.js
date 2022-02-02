const X_Class = 'x'
const O_Class = 'O'
let turnCounter = 0;

let cells = document.querySelectorAll('.row > div');

console.log(cells);

let winner = []
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(event) {
    if (event.target.textContent == '') {
        if (turnCounter % 2 == 0) {
            event.target.textContent = 'X';
            turnCounter++;
            checkWinner()
            checkDraw()
        } else {
            event.target.textContent = 'O';
            turnCounter++;
            checkWinner()
            checkDraw()
        }
    }
}

var winningCombo = [
    [cells[0], cells[1], cells[2]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
]

function checkWinner() {
    for (let i = 0; i < winningCombo.length; i++) {
        let xCount = 0;
        let oCount = 0;
        for (let j = 0; j < winningCombo[i].length; j++) {
            if (winningCombo[i][j].innerHTML == 'X') {
                xCount++
                console.log(xCount)
            }
            else if (winningCombo[i][j].innerHTML == 'O') {
                oCount++
                console.log(oCount)
            }
        }
        if (xCount == 3) { alert('X Wins!') }
        else if (oCount == 3) { alert('O Wins!') }
    }
}

function checkDraw() {
    if (turnCounter == 9) {
        alert('It is a Draw!')
    }
}

