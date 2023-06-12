"use strict";

const loginForm = document.querySelector(".login-form");

const validate = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  //sprawdzanie czy pola nie są niewypełnione

  if (email.value === "" || password.value === "")
    alert("Wszystkie pola powinny być wypełnione!");
  else {
    const loginData = {
      email: email.value,
      password: password.value,
    };
    console.log(loginData);
    loginForm.reset();
  }
};

loginForm.addEventListener("submit", validate);
