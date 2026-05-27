let color;
let isMousePressed = false;
const container = document.querySelector("#container");
const form = document.querySelector("form");
const input = document.querySelector("#inp");
const disableGrid = document.querySelector("#disableGrid");
const clear = document.querySelector("#clear");
document.addEventListener("mousedown", (e) => isMousePressed = true);
document.addEventListener("mouseup",(e) => isMousePressed = false);
disableGrid.addEventListener("click", (e) =>{
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((b) => {
        b.classList.toggle("noGrid");
    });
});
clear.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((b) => {
        b.style.backgroundColor = "white";
    });
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    color = input.value;
    input.value = "";
    input.focus();
});
for(let i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}
container.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("box") && isMousePressed) e.target.style.backgroundColor = color;
});
container.addEventListener("click", (e) => {
    if(e.target.classList.contains("box")) e.target.style.backgroundColor = color;
});
