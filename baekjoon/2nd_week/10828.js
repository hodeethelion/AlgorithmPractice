fs = require('fs')
const argList = fs.readFileSync('./input.in').toString().trim().split('\n').slice(1)
// console.log(argList)
let exampleStack = []

let argumentEach = []
let ansList= []
for (argument of argList){
  argumentEach= argument.split(' ');
  // console.log(argumentEach);
  if (argumentEach[0] == 'push'){
    exampleStack.push(Number(argumentEach[1]))
  }
  if (argumentEach[0] == 'top'){
    if(exampleStack.length ==0){
      // console.log(-1)
      ansList.push(-1)
    }else {
      // console.log(exampleStack[exampleStack.length-1])
      ansList.push(exampleStack[exampleStack.length-1])
    }
  }
  if (argumentEach[0] == 'size'){
    // console.log(exampleStack.length)
    ansList.push(exampleStack.length)
  }
  if (argumentEach[0] == 'empty'){
    if (exampleStack.length ==0){
      // console.log(1)
      ansList.push(1)
    }else {
      // console.log(0)
      ansList.push(0)
    }
  }

  if (argumentEach[0] == 'pop'){
    if(exampleStack.length ==0){
      // console.log(-1)
      ansList.push(-1)
    }else {
      // console.log(exampleStack[exampleStack.length-1])
      ansList.push(exampleStack[exampleStack.length-1])
      exampleStack.pop()
  }
  }


  // console.log(exampleStack)
}
console.log(ansList.join('\n'))