function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");

const colorDisplay = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

changeBtn.addEventListener("click", (ev) => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
});
