const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];



const labirinto = document.querySelector(".labirinto");


const construirLabirinto = () => {

    let newArray = map.join("").split("");

    for (let i = 0; i < newArray.length; i++) {

        if (newArray[i] === "W") {
            let wall = document.createElement("div");
            wall.classList.add("wall")
            labirinto.appendChild(wall)
        }

        if (newArray[i] === " ") {
            let clean = document.createElement("div");
            clean.classList.add("clean")
            labirinto.appendChild(clean)
        }

        if (newArray[i] === "S") {
            let start = document.createElement("div");
            start.classList.add("start")
            labirinto.appendChild(start)
        }

        if (newArray[i] === "F") {
            let finish = document.createElement("div");
            finish.classList.add("finish")
            labirinto.appendChild(finish)
        }
    }
}

construirLabirinto();

const clean = document.querySelector(".clean");
const wall = document.querySelector(".wall");
const start = document.querySelector(".start");
const finish = document.querySelector(".finish");

const movimentacao = () => {

    startTop = 0;
    startLeft = 0;

    document.addEventListener('keydown', (event) => {

        const keyName = event.key;

        if (keyName === 'ArrowDown') {
            startTop += 40;
        }

        if (keyName === 'ArrowUp') {
            startTop -= 40;
        }

        if (keyName === 'ArrowRight') {
            startLeft += 40;
        }

        if (keyName === 'ArrowLeft') {
            startLeft -= 40;
        }

        start.style.top = startTop + "px";
        start.style.left = startLeft + "px";
    });
}

movimentacao();


// clean.appendChild(start)