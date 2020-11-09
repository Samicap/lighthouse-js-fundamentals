


function range(start, end, step){
  var x = []
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined){
    return x
  }

  for (let i = start; i <= end; i += step){
    x.push(i)
  }
  return x
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

console.log(range(80, 10, 2));
