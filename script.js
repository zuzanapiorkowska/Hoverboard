const container = document.getElementById("container");
const colors = ["#ff6efb", "#ad1986", "#d99fca", "#efd8e9", "#ff00bc", "#600047", "#ff00f7", "#ffffff", "#ff9cf9"];
const numberOfSquares = 500;

for(let i=0; i<numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", ()=>setColor(square))
    square.addEventListener("mouseout", ()=>removeColor(square))
    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow= `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow= `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}