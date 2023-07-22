fs = require('fs')
const targetNumber = Number(fs.readFileSync('./input.in'))

function factorial(integar){
  if (integar === 1){
    return 1
  }

  return factorial(integar-1) * integar
}

console.log(factorial(targetNumber))