fs = require('fs')
const allParenthesis = fs.readFileSync('./input.in').toString().trim().split('\n').slice(1)

// console.log(allParenthesis)
let ans;
for (item of allParenthesis){
  // console.log(item)
  ans = checkVPS(item);
  if (ans == false){
    console.log('NO')
  }else{
    console.log('YES')
  }
}


function checkVPS(pt){
  const stack = [];
  for (string of pt){
    // console.log(string)
    if (string == '('){
      stack.push(string)
    }else{
      try {
        if (stack.pop() == undefined){
          return false
        }
      }
      catch{
        console.log('wrong')
        return false
      }
    }
  }
  if (stack.length === 0){
    return true
  }else{
    return false
  }
}