function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

//funkcja createBoxes
const createBoxes = (amount) => {
  boxesContainer.innerHTML = "";
  let boxDimension = 30;
  //pętla
  for (let i = 0; i < amount; i++) {
    //stworzyc box o konkretnych wymiarach i losowym tle
    const box = document.createElement("div");
    box.style.width = `${boxDimension}px`;
    box.style.height = `${boxDimension}px`;
    box.style.marginTop = "5px";
    box.style.backgroundColor = getRandomHexColor();
    //dodać box
    boxesContainer.append(box);
    //powiększyć rozmiary
    boxDimension += 10;
  }
};

//funkcja destroyBoxes

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

//event create

createButton.addEventListener("click", function () {
  const amountInput = document.querySelector("input");
  const amount = parseInt(amountInput.value);
  createBoxes(amount);
});
//event destroy
destroyButton.addEventListener("click", destroyBoxes);
