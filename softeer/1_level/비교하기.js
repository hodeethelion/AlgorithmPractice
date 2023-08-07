const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)
// console.log(input)
if (input[0] < input[1]){
    console.log('B')
}else if (input[1] < input[0]){
    console.log('A')
}else {
    console.log('same')
}