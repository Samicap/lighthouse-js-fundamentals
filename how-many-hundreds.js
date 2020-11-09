function howManyHundreds(x){
  let num = (x / 100);
  return Math.floor(num);
  //if (x % 100 ){
    //return num
  //}else if (num % 100 != 0){
    //return "how to get a reamainder here?"
  //}
}

console.log(howManyHundreds(67));

function howManyHundredsMod(x){
  let remainder = x % 100
  let answer = (x - remainder) / 100
  return answer
}