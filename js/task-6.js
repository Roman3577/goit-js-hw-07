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
  number = Number(event.target.value.trim());
});
function createBoxes(amount) {
  boxes.innerHTML = ""; 
  const fragment = document.createDocumentFragment(); 
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(square);
    size += 10;
  }
  boxes.append(fragment); 
}
create.addEventListener("click", () => {
  if (number > 0 && number <= 100) {
    createBoxes(number);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});