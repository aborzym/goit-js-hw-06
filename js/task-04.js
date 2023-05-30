"use strict";

let counterValue = 0;

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

const decrementValue = () => {
  counterValue--;
  document.querySelector("#value").textContent = counterValue;
};

const incrementValue = () => {
  counterValue++;
  document.querySelector("#value").textContent = counterValue;
};

decrBtn.addEventListener("click", decrementValue);
incrBtn.addEventListener("click", incrementValue);
