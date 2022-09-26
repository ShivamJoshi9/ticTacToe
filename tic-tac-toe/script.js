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
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "250px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("gameBox");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText == '') {
            boxtext.innerText = turn;
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


// Adding onClick Listner on click
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxText");
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})