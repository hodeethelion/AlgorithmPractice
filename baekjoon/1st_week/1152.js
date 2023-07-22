fs = require('fs')
const listWord = fs.readFileSync('./input.in').toString().trim().split(' ')
const lenWord = listWord.length
if (listWord[0] === ''){
  console.log(0)
}
else {console.log(lenWord)}