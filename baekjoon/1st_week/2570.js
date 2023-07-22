fs = require('fs');
let dataList = fs.readFileSync('./input.in').toString().trim().split('\n').map(Number).slice(1)
// console.log(dataList);
dataList.sort((a,b) => (a-b))
// console.log(dataList)
for (item of dataList){
  console.log(item)
}