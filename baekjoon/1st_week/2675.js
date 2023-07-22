fs = require('fs')
const dataList = fs.readFileSync('./input.in').toString().split('\n')
const caseNumber = Number(dataList[0]);

for (i=1; i<=caseNumber; i++){
  repeatCharacter(dataList[i])
}


// '3 ABC'
function repeatCharacter(stringCase){
  const dataAndString = stringCase.split(' ');
  // console.log(dataAndString)
  const numbertoRepeat = Number(dataAndString[0])
  const stringtoRepeat = dataAndString[1]
  // console.log(numbertoRepeat)
  // console.log(stringtoRepeat)
  let answer = '';

  for (j=0; j< dataAndString[1].length ;j++){
    for (k=0; k<numbertoRepeat; k++){
      answer += stringtoRepeat[j]
    }
  }
  console.log(answer)
}