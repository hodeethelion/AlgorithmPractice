const fs = require("fs")
let nums = fs.readFileSync("./input.in").toString().trim().split("\n")
const point = Number(nums[0])
let mul = 0

for (i=2; i>-1; i--){
  mul = point * Number(nums[1][i]);
  console.log(mul);
}
console.log(point * Number(nums[1]))