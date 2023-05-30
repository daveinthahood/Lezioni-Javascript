import {internalMemory} from "./internalMemory.mjs"

const API_URL = "http://localhost:3000";


//queryselectorAll è un array
const $form = document.querySelector("#login");
const $inputs = document.querySelectorAll(".form-input");
const $output = document.querySelector("#output");

const state = {
  form: {
    email: "",
    password: "",
  },
  token: internalMemory.get("token") || "",
  user: internalMemory.get("user") || null,
};

document.addEventListener("click", (event) => {
  if (event.target.id === "logout"){
    internalMemory.remove("token")
    internalMemory.remove("user")
    $output.innerHTML = "";
  } 
})

$inputs.forEach(($input) => {
  $input.addEventListener("input", (event) => {
    const { name, value } = event.target; //target ci prende tutti i valori del nostro elemento
    state.form[name] = value; //state.form["email"]
  });
});

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(state.form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok) {
      state.token = result.token;
      state.user = result.user;
      internalMemory.save("token", state.token);
      internalMemory.save("user", state.user);
      renderOutput();
    } else {
      console.error(result);
    }
  } catch (err) {
    console.error(err);
  }
});

const renderOutput = () => {
  if(state.token !== ""){
    $output.innerHTML = `
      <p> ${state.token} </p>
      <button id="logout"> logout </button>
    `;
  }
};

const init = () => {
  renderOutput()
}

init()