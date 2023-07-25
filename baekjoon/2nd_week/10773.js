fs = require('fs')
const numList = fs.readFileSync('./input.in').toString().trim().split('\n')
console.log(numList)
let numberCount = numList.slice(1).map(Number)
let numberStack = []

for (number of numberCount){
  console.log(number)
  if (number == 0){
    numberStack.pop()
  }
  else{
    numberStack.push(number)
  }
}
// console.log(numberStack)
console.log(numberStack.reduce((a,b) => a+b, 0))
