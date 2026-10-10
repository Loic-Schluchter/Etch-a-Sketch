
const btn = document.querySelector('button')
const mainContainer = document.querySelector("#main-container");


//Button listener
btn.addEventListener('click', () => {
   const height = window.prompt("Desired square per side (max 100)");
   console.log(height);
   if (height <= 100) {
       mainContainer.innerHTML = "";
       createSquares(height)
   }
   else{
       alert("Size is more than 100");
   }
})

function createSquares(desiredSquares) {
    console.log(desiredSquares);
    if (desiredSquares === undefined) {
        desiredSquares = 24;
    }

    const panelSize = 960;
    const gap = 1;

    const squareSize =
        (panelSize - gap * (desiredSquares - 1)) / desiredSquares;

    const totalSquares = desiredSquares ** 2;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        mainContainer.appendChild(square);
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        console.log(square.style.opacity);

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        })
    }
}

createSquares();