"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsArr = [];
const list = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  const listElement = document.createElement("li");
  listElement.textContent = el;
  listElement.classList.add("item");
  ingredientsArr.push(listElement)
});
list.append(...ingredientsArr);
