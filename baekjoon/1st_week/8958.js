const fs = require('fs');
const testCases = fs.readFileSync('./input.in').toString().trim().split('\n');
// console.log(testCases.length);
const testNumber = Number(testCases[0]);
// console.log(testNumber);
let sampleCase = '';
let totalCount = 0;
let addingStep = 0;

for (i=1; i < testNumber+1; i++ ){
  // console.log(testCases[i]);
  sampleCase = testCases[i];
  totalCount = 0;
  addingStep = 0;
  for (j=0; j< sampleCase.length;j++){
    if (sampleCase[j] ==='O'){
      addingStep += 1;
      totalCount += addingStep;
    }
    else{
      addingStep = 0;
    }
  }
  console.log(totalCount);
  
}