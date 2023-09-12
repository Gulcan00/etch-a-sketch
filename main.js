'use strict'

function createDivs(side) {
    const container = document.getElementById("grid");
    container.innerHTML = "";
    for (let i = 0; i < side*side; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.flex = `0 0 ${100/side}%`;
        newDiv.style.height = `${100/side}%`;
        newDiv.addEventListener("mouseenter", changeBackground);
        container.appendChild(newDiv);
    }
}

function changeBackground(e) {
    e.target.style.backgroundColor = "black";
}

createDivs(16);

const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    let side = prompt("Enter number of squares per side (eg 16 -> 16x16)", 16);
    if (side > 100 || side === null) {
        side = 16;
    }
    createDivs(side);
})