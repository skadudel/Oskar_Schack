const gameBoard= document.querySelector("#gameboard")
const playerDisplay= document.querySelector("#player")
const infoDisplay= document.querySelector("#info-display")
const width = 8
const startPieces = [
    btower, bknight,bbishop,bqueen,bking,bbishop,bknight,btower,
    bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    btower, bknight,bbishop,bqueen,bking,bbishop,bknight,btower,
    bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn,
]

function createBoard(){
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece
        square.setAttribute('square-id', i)
        square.classList.add('beige')
        gameBoard.append(square)
    })
}

createBoard()