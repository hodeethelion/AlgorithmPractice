const fs = require("fs");
targetNumber = Number(fs.readFileSync("./input.in"));
let divingNumber = Number(targetNumber);
function soinsuDiv(num){
  ansList = []
  for(let i=2; i<= num; i++){
    while ((divingNumber % i ) === 0){
      divingNumber /= i;
      console.log(i)
      ansList.push(i);
      if (divingNumber === 1){
        break;
      }
    }
  }
}
soinsuDiv(targetNumber)