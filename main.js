'use strict'

function createDivs(total) {
    const container = document.getElementById("grid");
    for (let i = 0; i < total; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.addEventListener("mouseenter", changeBackground);
        container.appendChild(newDiv);
    }
}

function changeBackground(e) {
    e.target.style.backgroundColor = "black";
}

createDivs(16*16);