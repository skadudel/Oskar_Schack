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
    bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn,
    btower, bknight,bbishop,bqueen,bking,bbishop,bknight,btower,
]

function createBoard(){
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece
        square.setAttribute('square-id', i)
        const row = Math.floor((63 - i) / 8)+1
        if (row % 2 === 0){
            square.classList.add(i % 2 === 0 ? "beige":"brown")
        } else{
            square.classList.add(i % 2 === 0 ? "brown":"beige")
        }

        if ( i <= 15){
            square.firstChild.firstChild.classList.add('black')
        }

        gameBoard.append(square)
    })
}

createBoard()