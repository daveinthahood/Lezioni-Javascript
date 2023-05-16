let nested = {
    subObject: {
        value: 1,
        value2: 2,
        neested: {
            value: 3

        }
    }
}



let keys = Object.keys(nested.subObject); //accediamo alle keys di un oggetto
console.log(keys);
let values = Object.values(nested.subObject); //accediamo ai values dell'oggetto
console.log(values);
let entries = Object.entries(nested.subObject); //accediamo a keys e values dell'oggetto
console.log(entries);

for ( let entry of entries){
    let [key, val] = entry; // destructuring
    console.log(key);
    console.log(val);
    if(typeof(val) === "number"){
    nested.subObject[key] = val + 3;
};
};

console.log(nested.subObject);
