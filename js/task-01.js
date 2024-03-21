const categories = Array.from(document.querySelectorAll(".item"));
console.log(`Number of categories: ${categories.length}`);
for (const item of categories) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
}
