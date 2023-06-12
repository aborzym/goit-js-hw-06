"use strict";
const validationInput = document.getElementById("validation-input");

const expectedInputLength = parseInt(
  validationInput.getAttribute("data-length")
);
const borderValidation = () => {
  const inputLength = validationInput.value.length;
  if (inputLength === expectedInputLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};

validationInput.addEventListener("blur", borderValidation);
