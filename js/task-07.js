const slider = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

slider.addEventListener("input", (ev) => {
  const newSize = `${ev.currentTarget.value}px`;
  text.style.fontSize = newSize;
});
