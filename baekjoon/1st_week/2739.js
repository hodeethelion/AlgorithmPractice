fs = require("fs")
const num = Number(fs.readFileSync("./input.in").toString())
for(i = 1; i < 10; i++){
  console.log(num, '*', i,'=',num*i)
}