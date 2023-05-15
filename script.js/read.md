//Funzioni
Concetto callback : -----------------
Concetto arrow function ? "() => {scope della funzione}" (Senza graffe è un return)

Le funzioni sono blocchi di codice eseguibili e si può decidere quando e dove eseguirle
Due modi per scrivere una funzione:

1. Arrow
2. Tramite il function

.----------------------------------------------------------------------------------------------------------------.

const test = (value) => { // nelle parentesi ci sono i parametri delle funzioni // quello che vogliamo eseguire
return value;
};
const result = test; // quello che stiamo eseguendo
// dobbiamo inserire il valore che vogliamo dare al value : value : true
// passare una reference = non eseguirla
// se non mettiamo le tonde stiamo solo passando la reference
// se non mettiamo le tonde a riga sei stampera la funzione di test, non la esegue
console.log (result())

.----------------------------------------------------------------------------------------------------------------.

// ---- Che cos'è il DOM?
Javascript nasce per poter gestire le interazioni dell'utente con la pagina.
Il DOM è tutto ciò che c'è nell html e viene tradotto come un mezzo virtuale.
possiamo creare nuovo elementi html ed inserirlo nella pagina.
Le animazioni è preferibile gestirle con CSS.
Mentre CSS gestisce le regole che gestiscono l'animazione
