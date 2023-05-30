const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  const listElement = document.createElement("li");
  listElement.textContent = el;
  listElement.classList.add("item");
  list.append(listElement);
});
