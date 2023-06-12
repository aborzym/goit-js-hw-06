"use strict";
const slider = document.getElementById("font-size-control");
const text = document.getElementById("text");

const changeFontSize = () => {
  const fontSize = `${slider.value}px`;
  text.style.fontSize = fontSize;
};

slider.addEventListener("input", changeFontSize);
