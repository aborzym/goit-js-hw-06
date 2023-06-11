"use strict";
const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");
const f = () => {
  if (inputName.value === "") outputName.textContent = "Anonyomus";
  else outputName.textContent = inputName.value;
};

input.addEventListener("input", f);
