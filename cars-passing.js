function carPassing(cars, speed){
  time = Date.now();
  cars.push({'time': time, 'speed': speed});
  return cars;
}


//add a new entry into cars const
const cars = [
  {
    'time': 1568329654807,
    'speed': 40,
  },
  {
    'time': 1568329821632,
    'speed': 42,
  },
  {
    'time': 1568331115463,
    'speed': 35
  }
]

let x = carPassing(cars, 38);
console.log(x)
