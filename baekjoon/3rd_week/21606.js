const fs = require("fs");
const readLine = fs.readFileSync("./input.in").toString().trim().split("\n");
// console.log(readLine);
const nodeCount = Number(readLine[0]);
const indoorList = readLine[1].split("").map(Number);
indoorList.unshift(0)
let edgeInfo = readLine.slice(2);
// console.log(nodeCount, indoorList, edgeInfo);
let graph = [];
for (let i = 0; i < nodeCount + 1; i++) {
  graph.push([]);
}
// 여기서 궁금한 점은 왜 const info라고 하는 거지 ? 안에 const라고 지정해도 문제가 없나?
for (const info of edgeInfo) {
  const infoList = info.split(" ").map(Number);
  graph[infoList[0]].push(infoList[1]);
  graph[infoList[1]].push(infoList[0]);
}
let visited = Array(nodeCount + 1).fill(0);

let ansCount = 0;

for (let m=1; m<nodeCount+1; m++){
  if(indoorList[m] == 1){
    // console.log('*****m****',m)
    visited.fill(0)
    dfs(m, 0)
  }
}

// console.log('ansCount: ', ansCount)
console.log(ansCount)
// indoor일때만 dfs 하기
function dfs(start, depth) {
  if (depth == 0) {
    visited[start] = 1;
    const toVisit = graph[start];
    for (let k = 0; k < toVisit.length; k++) {
      dfs(toVisit[k], depth + 1);
    }
  } else {
    if (visited[start] == 0) {
      visited[start] = 1;
      // 내부이면 그만
      if (indoorList[start] ==1){
        ansCount +=1;
        return;
      }//외부이면
      else{
        const toVisit = graph[start];
        for (let j = 0; j < toVisit.length; j++) {
          dfs(toVisit[j], depth+1);
        }
      }
      // 여기서 방문 한 곳이랑 안한 곳
    } else {
      return;
    }
  }
}
