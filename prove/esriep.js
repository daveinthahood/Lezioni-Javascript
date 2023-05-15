let arr = [9,6,3,13,1,2,3,4,1,5,22]

function index1(array){
 
  for( let i=0; i <array.length; i++){
    if(array.indexOf(1)){
      
      return array.indexOf(1);
    }
    
  }
  return -1;
}

console.log(index1(arr))

// function findFirstOnePosition(arr) {
//   /*
//    * Trova la posizione della prima occorrenza del 1 nell'array.
//    * Restituisce l'indice del primo elemento dell'array che contiene 1.
//    * Se 1 non è presente nell'array, restituisce -1.
//    */
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findFirstOnePosition(arr))