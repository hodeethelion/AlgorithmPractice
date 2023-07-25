fs = require('fs')
const readyList = fs.readFileSync('./input.in').toString().trim().split('\n').map(Number).slice(1)
// console.log(readyList)
let standardHeight = 0;
const ansList = []
let compareHeight;

for (let i=readyList.length-1; i >=0 ;i--){
  compareHeight = readyList.pop();
  if (compareHeight > standardHeight){
    ansList.push(compareHeight)
    standardHeight = compareHeight
  }else{
    continue;
  }
}
console.log(ansList.length)