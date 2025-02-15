function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const div = document.querySelector(".widget");
const span = document.querySelector(".color");
const chang = document.querySelector(".change-color");
const body = document.body;
chang.addEventListener("click", handleClick);
function handleClick(event) {
const newColor = getRandomHexColor(); 
  body.style.backgroundColor = newColor; 
  span.textContent = newColor
}

