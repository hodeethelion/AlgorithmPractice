fs = require('fs')
const numberList = fs.readFileSync('./input.in').toString().split(' ')
const sangSooList = []

function reverse(string){ 
  let reverseString =''
  for(i=string.length-1; i>=0;i--){
    reverseString += string[i]
  }
  return reverseString;
}

for (item of numberList){
  sangSooList.push(Number(reverse(item)))
}
// console.log(sangSooList)
sangSooList.sort((a, b) => b-a)
// console.log(sangSooList)
console.log(sangSooList[0])