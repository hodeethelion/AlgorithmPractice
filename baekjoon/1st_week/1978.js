fs = require('fs')
let [ numberCount , numString ] = fs.readFileSync('./input.in').toString().trim().split('\n')
numberCount = Number(numberCount);
numString = numString.split(' ').map(Number)
// console.log(numString)
let sosuCount = 0;

for (let numberCase of numString){
  if (checkSosu(numberCase)){
    sosuCount+=1
  }
  // console.log(numberCase, checkSosu(numberCase))
  // console.log(numberCount)
}
console.log(sosuCount)

function checkSosu(integar){
  if (integar == 1 ){
    return false;
  }
  else if (integar ==2 || integar ==3 ){
    return true
  }
  for (let i=2; i <= integar**0.5; i++){
    if((integar % i) === 0){
      return false
    }
  }
  return true;
}