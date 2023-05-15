// Il destructuring è una funzionalità di JavaScript introdotta in es6 che consente di estrarre i valori di proprietà 
//da oggetti e di elementi da array, assegnandoli a variabili separate in una sola istruzione. 
// Questa funzionalità consente di scrivere codice più conciso ed elegante, eliminando la necessità 
//di scrivere molte linee di codice per accedere ai singoli elementi.

// Destructuring di array
const numbers = [1, 2, 3, 4, 5];
const [a, b, , c] = numbers; // Estrae il primo, il secondo e il quarto elemento dall'array
console.log(a, b, c); // Output: 1 2 4

// Destructuring di oggetti
const person = { name: 'Mario', age: 30 };
const { name, age } = person; // Estrae i valori delle proprietà name e age dall'oggetto person
console.log(name, age); // Output: "Mario" 30

// Destructuring di oggetti con assegnazione a nuove variabili
const { name: personName, age: personAge } = person; // Estrae i valori delle proprietà name e age dall'oggetto person, assegnandoli alle variabili personName e personAge, rispettivamente
console.log(personName, personAge); // Output: "Mario" 30
// console.log(person[name], person[age]);

// Destructuring di una funzione che restituisce un oggetto
function getPerson() {
  return { name1: 'Mario', age1: 30 };
}

const { name1, age1 } = getPerson(); // Estrarre i valori delle proprietà name e age dell'oggetto restituito dalla funzione getPerson
console.log(name1, age1); // Output: "Mario" 30