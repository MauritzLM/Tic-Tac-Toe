const allSquares = document.querySelectorAll(".square");


const gameBoard = (() => {
    let gameBoardArray = ["", "", "", "", "", "", "", "", ""];

    let countX;
    let countO;

    let arrayCount = () => {

        countX = 0;
        countO = 0;

        for (let i = 0; i < gameBoardArray.length; i++) {
            if (gameBoardArray[i] === "x") {
                countX++;
            } else if (gameBoardArray[i] === "o") {
                countO++;
            };
        }
    };

    const play = allSquares.forEach(square => {
        square.addEventListener('click', (e) => {

            arrayCount();

            if (countX > countO) {
                gameBoardArray[e.target.id] = "o";
                e.target.innerText = "o";
            } else if (countX === countO) {
                gameBoardArray[e.target.id] = "x";
                e.target.innerText = "x";
            }
        });
    });
    return { gameBoardArray, play };
})();

const Player = (name) => {

};


