const form = document.querySelector("form");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const {
    elements: { email, password },
  } = ev.target;
  if (email.value === "" || password.value === "") {
    window.alert("Wszystkie pola powinny zostać wypełnione");
  } else {
    console.log({ email: email.value, password: password.value });
    form.reset();
  }
});
