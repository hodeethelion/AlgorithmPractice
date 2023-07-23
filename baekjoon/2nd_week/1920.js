//  이분탐색 while문을 사용
fs = require('fs')
const numList = fs.readFileSync('./input.in').toString().trim().split('\n')
let standardNumber = numList[1].split(' ').map(Number).sort((a,b) => a-b)
const compareNumber = numList[3].split(' ').map(Number)
let ansList = []
for (targetNumber of compareNumber){
  let left = 0;
  let right = standardNumber.length -1;
  let result = 0;
  let mid;
  while (left <= right){
    mid = Math.floor((left + right)/2)
    if ( standardNumber[mid] < targetNumber){
      left = mid +1
    }else if (standardNumber[mid] > targetNumber){
      right = mid - 1
    }else {
      result = 1;
      break;
    }
  }
  ansList.push(result)
}
console.log(ansList.join('\n'))