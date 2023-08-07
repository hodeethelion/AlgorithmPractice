/////////////////////////////////////////////////////////////////////////////////////////////
// 일부 테스트케이스의 마지막에 개행 문자(\n)가 포함되어 있을 수 있습니다.
// 따라서, 예상치 못한 오답 처리를 방지하기 위해서
// fs모듈을 사용하여 입력을 받을 땐, **반드시** trim()을 사용하여 여백을 제거 하거나
// readline 모듈을 통해 입력을 받으시길 바랍니다.
// 해당 내용을 숙지 하셨다면, 주석을 지우고 문제풀이를 하셔도 무방합니다.
/////////////////////////////////////////////////////////////////////////////////////////////
const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
// console.log(input)
let startTime = 0;
let endTime = 0;
for (const time of input){
    const timing = time.split(' ');
    const startList = timing[0].split(':').map(Number);
    const endList = timing[1].split(':').map(Number);
    // console.log(startList, endList)
    startTime += (startList[0]*60 + startList[1])
    endTime += (endList[0]*60 + endList[1])
}
const ans = endTime-startTime;
console.log(ans)