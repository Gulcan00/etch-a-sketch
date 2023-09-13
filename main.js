'use strict'

function createDivs(side) {
    const container = document.getElementById("grid");
    container.innerHTML = "";
    for (let i = 0; i < side*side; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.flex = `0 0 ${100/side}%`;
        newDiv.style.height = `${100/side}%`;
        newDiv.style.backgroundColor = "white";
        newDiv.setAttribute("data-interaction", 10);
        newDiv.addEventListener("mouseenter", changeBackground);
        container.appendChild(newDiv);
    }
}

function changeBackground(e) {
    let interactionCount = parseInt(e.target.getAttribute("data-interaction"));

    if (interactionCount > 100) {
        interactionCount = 100;
    }

    if (e.target.style.backgroundColor === "white") {
        const {r, g, b} = generateRandColor();
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        const currentColor = e.target.style.backgroundColor;
        const rgb = currentColor.match(/(\d+\.?\d*)/g);
        const r = rgb[0] - rgb[0] * (interactionCount/100);
        const g = rgb[1] - rgb[1] * (interactionCount/100);
        const b = rgb[2] - rgb[2] * (interactionCount/100);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    e.target.setAttribute("data-interaction", interactionCount + 10);
}

createDivs(16);

const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    let side = parseInt(prompt("Enter number of squares per side (eg 16 -> 16x16)", 16));
    if (side > 100 || side === null || isNaN(side) || side < 1) {
        side = 16;
    }
    createDivs(side);
})

function generateRandColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return {r, g, b};
}