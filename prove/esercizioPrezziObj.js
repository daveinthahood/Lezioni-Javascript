let deposit = [
  {
    model: "Urus",
    brand: "Lamborghini",
    year: 2020,
    ownerNumber: 1,
    price: 300000,
  },
  {
    model: "Touareg",
    brand: "Wolksvagen",
    year: 2018,
    ownerNumber: 1,
    price: 250000,
  },
  {
    model: "Fox",
    brand: "Wolksvagen",
    year: 2000,
    ownerNumber: 2,
    price: 20000000,
  },
  {
    model: "Punto Abarth",
    brand: "Fiat",
    year: 2008,
    ownerNumber: 0,
    price: 10000,
  },
  {
    model: "Cayenne",
    brand: "Porche",
    year: 2001,
    ownerNumber: 2,
    price: 180000,
  },
  { model: "Escort",
    brand: "Ford", 
    year: 1985, 
    ownerNumber: 5, 
    price: 90000 },
];
// function lowerPrice(prezzo) {
//   if (lowerCarPrice.price > prezzo.price) {
//     lowerCarPrice = prezzo;
//   }
// }


let lowerCarPrice = deposit[0];
function lowerPrice() {
  for (let i = 0; i < deposit.length; i++) {
    if (lowerCarPrice.price > deposit[i].price) {
      lowerCarPrice = deposit[i];
    }
  }
  return lowerCarPrice.model;
}
console.log(lowerCarPrice.model);
lowerPrice(deposit);
console.log(lowerCarPrice.model);

// function surfDeposit() {
//   for (i = 0; i < deposit.length; i++) {
//     //  isNew(deposit[i]);
//     lowerPrice(deposit[i]);
//   }
//   return lowerCarPrice.model;
// }

// console.log("la macchina più economica è la " + surfDeposit());

// let newestCar = deposit[0];

// function isNew(cars) {
//   if (cars.ownerNumber < 1) {
//     newestCar = cars;
//   }else{
//  console.log("non ci sono macchine nuove")
//}
// }

// console.log(`Nel nostro negozio abbiamo i seguenti "bolidi" : `);
// for (let i= 0; i < deposit.length; i++) {
//   console.log(`${deposit[i].brand} ${deposit[i].model}`);
//   }
