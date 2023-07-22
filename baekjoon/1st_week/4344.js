fs = require('fs')
const numList = fs.readFileSync('input.in').toString().trim().split('\n')
const caseNumber = Number(numList[0]);
for (i=1; i< caseNumber+1; i++){
  console.log(overHalf(numList[i].split(' ').map(Number)),"%")
}


function overHalf(studentScore){
  const studentCount = studentScore[0];
  // console.log('studentCount: ', studentCount)
  let totalScore = 0;
  let overCount = 0;
  for (let i=1; i< studentCount+1; i++ ){
    totalScore += studentScore[i];
  }
  // console.log('totalScore: ', totalScore)
  const avgScore = totalScore / studentCount;
  // console.log('avgScore: ', avgScore)
  for (let j=1; j< studentCount+1; j++ ){
    if (avgScore < studentScore[j]){
      overCount += 1
    }
  }
  // console.log('over percentage', overCount/studentCount * 100)
  return (overCount/studentCount *100).toFixed(3)
}

// for (i=1; i< caseNumber+1; i++){
//   console.log(overHalf(numList[i].split(' ').map(Number)))
// }