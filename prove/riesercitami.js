let words = ["casa", "computer", "libro", "tavolo", "pianta", "macchina", "giornale", "telefono", "caffè", "penna", "occhiali", "quaderno", "porta", "matita", "televisione"];
let numbers  =  [12, 33, -1, 56, 22, 45, 89, 3, 17, 9, 41, 68, 29, 51, 81];
let numbers2 =  [22, 45, 3, 98, 17, 55, 8, 72, 91, 31, 66, 10, 51, 79, 27];

function positiveMinimum(numbersArray) {
    let result = numbersArray[0];
    for(let i = 0; i < numbersArray.length; i++) {
        result = numbersArray[i] < result  ? numbersArray[i] : result;
    }
    if(result > 0){
            return result
    } else {
        return 0;
    }
}

console.log(positiveMinimum(numbers));


// Scrivi una funzione che accetta un array di numeri e restituisce la somma di tutti gli elementi.


function sumNumbers(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    return sum;
}


// Scrivi una funzione che accetta un array di parole e restituisce la parola più lunga.



function longerWord(array){
    let longer = array[0];
    for( let i = 0; i < array.length; i++){
        if(longer.length < array[i].length){
            longer = array[i];
        }
    }
    return longer;
}




// Scrivi una funzione che accetta un array di numeri e restituisce un nuovo array contenente solo i numeri pari.

 function savesEvenNumbers(array){
    let evenNumbers = [];
    for(let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNumbers.push(array[i]);
        }
    }
    return evenNumbers;
 }


// Scrivi una funzione che accetta un array di numeri e restituisce il numero più grande.

function findMaximum(array){
    let max = array[0];
    for( let i = 0; i < array.length; i++ ){
        if( max < array[i]){
            max = array[i];
        }
    }
    return max;
}

// Scrivi una funzione che accetta un array di parole e restituisce un nuovo array contenente solo le parole che iniziano con una lettera specifica.
function startWithThatChar(array, character){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if( array[i].startsWith(character)){
            newArray.push(array[i])
        }
    }
    return newArray;
}
console.log(startWithThatChar(words, "m"))


// Scrivi una funzione che accetta due array di numeri e restituisce un nuovo array contenente solo i numeri presenti in entrambi gli array.

function findIncludedNumbers(array1, array2){
    let newArray = [];
    for( let i=0; i < array1.length; i++){
        if( array1.includes(array2[i])){
            newArray.push(array2[i])
        }
    }
    return newArray;
}


// Scrivi una funzione che accetta un array di numeri e restituisce la media dei numeri.

function avrgNumb(array){
    if(array.length ===0){
        return 0;
    }
    else{

        let sum = 0;
        for (let i = 0; i< array.length; i++){
            sum += array[i];
        }
        return avrg = sum / array.length;
    }
}

console.log(avrgNumb(numbers))

// Scrivi una funzione che accetta un array di stringhe e restituisce un nuovo array contenente le stringhe in ordine alfabetico.

function reorderedArr(array){
    let reordered = array.slice().sort();
    return reordered;
}

console.log(reorderedArr(words));