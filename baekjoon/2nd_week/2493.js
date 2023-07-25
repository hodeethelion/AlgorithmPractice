fs = require("fs");
const inputLines = fs.readFileSync('./input.in').toString().trim().split('\n')
const towerList = inputLines[1].split(' ').map(Number)
let compareTower;
let ansList =[];


towerList.forEach((tower, towerIndex, fullTower) => {
  compareTower = fullTower.slice(0, towerIndex);
  for (i= compareTower.length; i >=0 ; i--){
    comparison = compareTower.pop();
    // console.log(comparison)
    if (comparison == undefined){
      ansList.push(0)
      break;
    }else{
      if (comparison > tower){
        ansList.push(i);
        break;
      }
    }
  }
})

// console.log("anslist : ", ansList)
console.log(ansList.join(' '))