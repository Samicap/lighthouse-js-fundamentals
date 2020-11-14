// In this exercise, we will be given an array of 2 or more numbers. 
// We will then have to find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = function(data) {
 
  let maxValue = data[0];
  let secondHighestValue = data[0]; 
  let x = '';

  for (let i = 1; i < data.length; i++){
    if (data[i] > maxValue){
      
      secondHighestValue = maxValue;
      maxValue = data[i];
      x = secondHighestValue + maxValue;
    }
  }
  return x;
};



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
