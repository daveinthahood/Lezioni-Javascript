let arr = ["Luca", "pippo", "verdena", "milano", "pucci"];
//             elemento   
let getlength = (el) => {
    return el.length
};


//                       func
let lunghezza =  arr.map(getlength).reduce((a , b) => a + b);
console.log(lunghezza);


let numb = [ 1, 2, 3, 5, 76,8,23,3,7,90,0,2,34,5,4]

let newarr =() =>{
    let ordered = [];
    ordered = numb.slice().sort((a,b) => a - b );
    return ordered;
} 
console.log(newarr());
console.log(numb);
