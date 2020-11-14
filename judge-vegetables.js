const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3000000
  }
]

// vegetables[i][metric] where metric = 'redness' or 'plumpness'

const metric = 'redness';

function judgeVegetable(vegetables, metric){
  let maxValue = vegetables[0][metric];
  let maxIndex = 0;

  for (let i = 1; i < vegetables.length; i++){
    if (vegetables[i][metric] > maxValue){
      maxValue = vegetables[i][metric];
      maxIndex = i;
    }
  }

  return vegetables[maxIndex].submitter;
}
console.log(judgeVegetable(vegetables, metric));


  
  
//   if (metric === Math.max(metric)){
//     console.log({vegetables : 'submitter'});
//   }
  
// }

// console.log(judgeVegetable(vegetables, redness)); 
