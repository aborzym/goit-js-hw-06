const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

input.addEventListener("input", (ev) => {
  if (ev.currentTarget.value !== "") {
    name.textContent = ev.currentTarget.value;
  } else name.textContent = "Anonymous";
});
