console.log("Welcome to Tic Tac Toe")
let music = new Audio("gameMusic.mp3")
let oGameTurn = new Audio("X-gunLoad.wav")
let xGameTurn = new Audio("O-gunLoad.wav")
let gameOver = new Audio("gameEnd.wav")
let isGameOver = false;

let turn = "X"

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) 
        {
                    document.querySelector('.info').innerText = boxText[e[0]].innerText + "won"
                    isGameOver = true 
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("gameBox");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (element.innerText == '') {
            element.innerText = turn;
            turn = changeTurn();
            if (turn === "X") {
                xGameTurn.play();
            }
            else {
                oGameTurn.play();
            }
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})



