"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const list = document.querySelector("#ingredients");
// for (const ingredient of ingredients) {
//   const listElement = document.createElement("li");
//   listElement.textContent = ingredient;
//   listElement.classList.add("item");
//   list.append(listElement);
// }
const list = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
for (const ingredient of ingredients) {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  fragment.appendChild(listElement);
}
list.appendChild(fragment);
