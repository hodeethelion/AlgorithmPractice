fs = require('fs');
numList = fs.readFileSync('./input.in').toString().split('\n')
// console.log(numList);
let totalSum = 0
for (let i=0; i< Number(numList[0]); i++){
  totalSum+= Number(numList[1][i])
}
console.log(totalSum)