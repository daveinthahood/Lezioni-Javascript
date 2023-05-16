let arr = [
  { brand: "Nike", type: "Air90", color: "black", number: 42, price: 130 },
  { brand: "Reebook", type: "Runner", color: "white", number: 41, price: 220 },
  { brand: "Lotto", type: "Pupa", color: "blue", number: 38, price: 320 },
  { brand: "Gucci", type: "Sofia", color: "black", number: 41, price: 170 },
  { brand: "Adidas", type: "Trainer", color: "yellow", number: 36, price: 160 },
  { brand: "DVS", type: "Logan", color: "white", number: 46, price: 130 },
  { brand: "Supra", type: "S.rs", color: "red", number: 56, price: 120 },
];

let cheapest = arr[0];
let lowerNumb = arr[0];
let higherNumber = arr[0];
let bigPrice = arr[0];

function whoIsSmaller(shoes) {
  if (lowerNumb.number > shoes.number) {
    lowerNumb = shoes;
  }
}
function whoIsBigger(shoes) {
  if (higherNumber.number < shoes.number) {
    higherNumber = shoes;
  }
}
function checkBiggerPrice(shoes) {
  if (bigPrice.price < shoes.price) {
    bigPrice = shoes;
  }
}

function checkLowerPrice(shoes) {
  if (cheapest.price > shoes.price) {
    cheapest = shoes;
  }
}
arr.push({ brand: "Nike", type: "AirRetrò", color: "white", number: 40, price: 700 });
function whoIsCheapest() {
  for (i = 0; i < arr.length; i++) {
    checkLowerPrice(arr[i]);
    whoIsSmaller(arr[i]);
    whoIsBigger(arr[i]);
    checkBiggerPrice(arr[i]);
  }
}
whoIsCheapest();
console.log(
  cheapest.brand + " è la più economica e costa solo " + cheapest.price + "€!"
);
console.log(
  lowerNumb.brand + " è la scarpa più piccola con il numero " + lowerNumb.number
);
console.log(
  higherNumber.brand +
    " è la scarpa più grande con il numero" +
    higherNumber.number
);
console.log(
  `${bigPrice.brand} è la scarpa più costosa e costa la bellezza di ${bigPrice.price}€ !`
);
