function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesDiv = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
let numberOfBoxes = 0;
input.addEventListener("change", (ev) => {
  numberOfBoxes = ev.currentTarget.value;
});

const createBoxes = (amount) => {
  let dimension = 30;
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${dimension}px`;
    div.style.height = `${dimension}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(div);
    dimension += 10;
  }
};

const destroyBoxes = () => {
  boxesDiv.replaceChildren();
};

createBtn.addEventListener("click", (ev) => {
  createBoxes(numberOfBoxes);
});

destroyBtn.addEventListener("click", (ev) => destroyBoxes());
