const fs = require('fs')
let numList = fs.readFileSync('./input.in').toString().trim().split('\n');
numList = numList.map(Number);
// console.log(numList)
let max = Math.max(...numList)
// console.log(...numList)
console.log(max)
console.log(numList.indexOf(max)+ 1)