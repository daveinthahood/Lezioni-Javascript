let nome= "Gabriele";
let cognome= "Barberio";
let nazionalità ="English";
let model= "Punto Abarth";
let brand = "Fiat";
let prezzo = 10000;
let colore = "Rossa";

let obj = [{nome: "Luca",
    cognome: "Mammoliti",
    age: 23 }]
console.log(obj[0].age);



function findNationality(nationality){
    if( nationality == "Italiana"){
        return "IT";
    }else if(nationality == "Spanish"){
        return "SP";
    }else if(nationality == "English"){
        return "EN";
    }
}

console.log(sayHello(nome, cognome, findNationality(nazionalità)));

function sayHello( name, surname, callback){
    if( callback == "IT"){
        return `Ciao ${name} ${ surname}, benvenuto nel nostro sito!`
    }else if( callback == "EN"){
        return `Hi ${name} ${ surname}, wellcome in our website!`
    }else if( callback == "SP"){
        return `Hola ${name} ${ surname}, bienvenido a nuestro sitio web!`
    }

}


function buyACar(car, modello, price, color, nome, nationality ){
    if( nationality == "IT"){
        return `${nome} hai appena comprato la tua ${car} ${modello} ${color} al prezzo di ${price} €`
    }else if( nationality == "SP"){
        return `${nome} acabas de comprar el tuyo ${car} ${modello} ${color} al precio de ${price} €`
    }else if( nationality == "EN"){
        return `${nome} you just bought ${car} ${modello} ${color} at the price of ${price} €`
    }
}

// switch             case
//kw        nationaliy == "Italiana"
// switch (nationality) {    //switch (parametro){ case ( condizione): corpo; } 
// case "Italiana":
//     return "Ciao " + name + " " + surname;
 
// case "Spanish":
//     return "Hola " + name + " " +surname;
   
// case "English":
//     return "Hi" + name + surname;
  
// case "Deutsch":
//     return "Hallo" + name + surname;
   
// default:// else
//     return "Uknown"}


// console.log(buyACar( brand, model, prezzo, colore, nome, findNationality(nazionalità)));
