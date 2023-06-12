function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const colorValue = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

const changeColor = () => {
  // wygenerować kolor
  const randomColor = getRandomHexColor();
  //zmienić styl body
  document.body.style.backgroundColor = randomColor;
  //wypisać kod koloru
  colorValue.textContent = randomColor;
};

changeColorButton.addEventListener("click", changeColor);
