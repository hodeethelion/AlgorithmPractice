const fs = require('fs')
const targetNumber = Number(fs.readFileSync('./input.in').toString().trim())
// console.log(targetNumber)
let fiboList = Array(targetNumber+1).fill(0);
// console.log(fiboList)
fiboList[1]=1;
fiboList[2]=1;
console.log(fiboList)
if (targetNumber == 1){
  console.log(1)
}else if (targetNumber == 2){
  console.log(1)
}else if (targetNumber == 0){
  console.log(0)
}else{
  for (i=3;i<= targetNumber;i++){
    fiboList[i]= BigInt(fiboList[i-1]) + BigInt(fiboList[i-2])
  }
  console.log(fiboList)
  console.log(fiboList[targetNumber].toString())
}

// console.log(fiboList)