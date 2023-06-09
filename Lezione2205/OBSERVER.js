// ANDIAMO A SCRIVERE UNA CLASSE CHE AVRA DUE METODI, NEL COSTRUTTORE CI SARANNO GLI EVENTI
class ObserverError extends Error {
  // Classe di errore personalizzata che estende una classe predefinita di javascript
  constructor(message, code = 1001) {
    super(message);
    this.name = "ObserverError";
    this.code = code;
  }
}

class Observer {
  //definiamo una chiave privata
  #events = [];
  constructor() {}
  // primo metodo
  // chiamando l'emit facciamo un ricerca nel nostro events
  emit = (name, ...args) => {
    // controlliamo name
    if (typeof name !== "string")
      throw new ObserverError("Name must be a valid string!", 1001);

    const _events = this.#events.filter((item) => item.name == name);
    // quando non si mettono le graffe equivale ad un return
    // controllo sulla lunghezza dell'array
    if (_events.length > 0) {
      _events.forEach((item) => item.callback(...args));
    }
  }; // simula l'evento

  // secondo evento
  /**
   * Register new listner
   * @param {string} name
   * @param {function} callback
   */
  on = (name, callback) => {
    if (typeof name !== "string")
      throw new ObserverError("Name must be a valid string!", 1001);
    // validazione del tipo di dato di name, se non è una stringa darà lerrore
    if (typeof callback !== "function")
      throw new ObserverError("Callback must be a function", 1001);
    this.#events.push({ name, callback }); // pushiamo l'evento
  };

  remuve = (name) => {
    if (typeof name !== "string")
      throw new ObserverError("Name must be a valid string!", 1001);
    this.#events = this.#events.filter((item) => item.name !== name);
  };
}

const observer = new Observer();
observer.on("test", (name, age) => {
  console.log(name, age);
});

observer.emit("test", "Davide", 26);
