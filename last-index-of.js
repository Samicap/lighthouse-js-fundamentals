// When this function is given an array and a value, it should return the index of the last time 
// the value occurs in the array. 
// If the value never occurs, the function should return -1.
//step 1:  make function that accepts an array input and that loops in reverse.

let array = [];

function lastIndexOf(array, x){
  
  let last = -1
  for (let i = 0; i < array.length; i++){
    if (x === array[i]) {
      last = i
    }

  }
  return last
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
