const fs = require('fs')
numList = fs.readFileSync('./input.in').toString().split('\n')
// console.log(numList);
const first_line = numList[0].split(' ').map(Number);
const numberNumbers = first_line[0]
const numberStandard = first_line[1]
const numberCandidate = numList[1].split(' ').map(Number)

let emptylist = []
for (i=0; i<numberNumbers; i++){
  if (numberCandidate[i] < numberStandard){
    emptylist.push(numberCandidate[i])
  }
}
console.log(emptylist.join(' '))