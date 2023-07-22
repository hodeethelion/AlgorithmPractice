fs = require('fs')
const multiNumber = fs.readFileSync('./input.in').toString().trim().split('\n').map(Number)
// console.log(multiNumber);
const calculatedNumber = multiNumber[0]* multiNumber[1] * multiNumber[2]
const stringNumber = calculatedNumber.toString();

counterObject = {};

for (i=0; i<= 9; i++){
  counterObject[i] = 0;
}

for (i=0; i<stringNumber.length; i++){
  counterObject[Number(stringNumber[i])] += 1;
}
console.log(Object.values(counterObject).join('\n'))
