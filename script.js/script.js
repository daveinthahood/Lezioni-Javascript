//elementi html dollaro prima il nome per riconoscerli 
const $button = document.querySelector("#add");
const $paragrafo = document.querySelector("#result");

const state= { //state = contenitore
    counter : 0 
} 
$button.addEventListener("click", () => {
    state.counter +=1

    $paragrafo.innerHTML = state.counter;
});
























