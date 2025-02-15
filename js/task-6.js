 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
let number = 0; 
controls.addEventListener("input", (event) => {
  number = event.target.value.trim();
});
function createBoxes(amount) {
  let size = 30 + boxes.children.length * 10; 
  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = getRandomHexColor();
    boxes.append(square);
    size += 10; 
  }
}
create.addEventListener("click", () => {
  if (number !== "" && number > 0 && number <= 100) {
    createBoxes(Number(number));
  } else {
    alert("Please enter a number between 1 and 100");
  }
});
destroy.addEventListener("click", () => {
  boxes.innerHTML = ""; 
});