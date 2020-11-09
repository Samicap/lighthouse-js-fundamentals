
//(x, y) positions. start [0,0]


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] //this is the code input

const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0;
  let y = 0;

  for (const position of moves){ //this is a loop!!
    if (position === 'north'){
      y += 1;
    }
    if (position === 'south'){
      y -= 1;
    }
    if (position === 'east'){
      x += 1;
  
    }
    if (position === 'west'){
      x -= 1;
    }
  }
  return [x,y]
}

console.log(finalPosition(moves));


