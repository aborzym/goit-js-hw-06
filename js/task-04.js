//Proszę o feedback, która wersja zadania (czy zakomentowana wyżej, czy ta niżej) jest lepsza z puntu widzenia kodu (i dlaczego :)

let counterValue = 0;

const counter = document.querySelector("#value");

// const addBtn = document.querySelector('button[data-action="increment"]');
// const substrBtn = document.querySelector('button[data-action="decrement"]');

// addBtn.addEventListener("click", (ev) => {
//   counterValue++;
//   counter.textContent = counterValue;
// });

// substrBtn.addEventListener("click", (ev) => {
//   counterValue--;
//   counter.textContent = counterValue;
// });

const buttons = document.querySelectorAll("button");
for (const btn of buttons) {
  btn.addEventListener("click", handleActionClick);
}

function handleActionClick(ev) {
  if (ev.target.dataset.action === "increment") {
    counterValue++;
    counter.textContent = counterValue;
  } else if (ev.target.dataset.action === "decrement") {
    counterValue--;
    counter.textContent = counterValue;
  }
}
