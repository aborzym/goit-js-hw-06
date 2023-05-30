"use strict";

const lists = document.querySelectorAll(".item");
console.log(`Number of categories: ${lists.length}`);

lists.forEach((list) => {
  console.log(`Category: ${list.querySelector("h2").textContent}`);
  console.log(`Elements: ${list.querySelectorAll("li").length}`);
});
