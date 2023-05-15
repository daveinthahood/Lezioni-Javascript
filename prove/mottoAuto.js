const car = [
  { id: 1, name: "Audi", model: "A3", yearOfProduction: 2014 },
  { id: 2, name: "Ferrari", model: "La Ferrari", yearOfProduction: 2015 },
  { id: 3, name: "Lamborghini", model: "Huracan", yearOfProduction: 2016 },
  { id: 4, name: "Volkswagen", model: "Polo", yearOfProduction: 2017 },
];

let youngest = car[0];

function checkAge(macchine) {
  if (youngest.yearOfProduction > macchine.yearOfProduction) {
    youngest = macchine;
  }
}

function Results() {
  for (i = 0; i < car.length; i++) {
    console.log(car[i].name);

    switch (car[i].name) {
      case "Audi":
        console.log("Audi Vorsprung durch Technik");
        break;
      case "Ferrari":
        console.log("Two meglio che one");
        break;
      case "Lamborghini":
        console.log("Feels Italian. Wherever you are.");
        break;
      case "Volkswagen":
        console.log("Das Auto");
        break;
    }
    checkAge(car[i]);
  }
  console.log("Il modello piu' vecchio è", youngest.name);
}

Results();
