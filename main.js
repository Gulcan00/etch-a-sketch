'use strict'

function createDivs(total) {
    const container = document.getElementById("grid");
    for (let i = 0; i < total; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        container.appendChild(newDiv);
    }
}


createDivs(16*16);