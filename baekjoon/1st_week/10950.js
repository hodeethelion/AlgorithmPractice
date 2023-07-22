const fs = require("fs")
const longList = fs.readFileSync("./input.in").toString().split('\n')
// console.log(longList)

// add

// 먼저 개수를 만들기
const listCount = Number(longList[0])
// list 개수 만큼 순회
let sum = 0;
for (i=1; i<listCount+1; i++){
  // console.log(longList[i].split(" ").map(Number));
  sum = longList[i].split(" ").map(Number).reduce((accumlator, currentValue) => accumlator + currentValue, 0);
  console.log(sum)
}