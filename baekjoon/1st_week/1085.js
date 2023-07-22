const fs = require("fs")
const nums = fs.readFileSync("./input.in").toString().split(" ").map(Number)

const ans = Math.min(nums[0], nums[1], nums[2]-nums[0], nums[3]-nums[1])
console.log(ans)