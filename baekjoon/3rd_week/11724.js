fs = require('fs')
const readLine = fs.readFileSync('./input.in').toString().trim().split('\n')
// console.log(readLine)
const nodeData = readLine.slice(1)
// console.log(nodeData)

const [nodeCount, edgeCount] = readLine[0].split(' ').map(Number)

let graph = []
for (i= 0; i<= nodeCount;i++){
  graph.push([])
}
// console.log(graph)
let dataList;

for (const data of nodeData){
  // console.log(data)
  dataList = data.split(' ').map(Number)
  // console.log(dataList)
  graph[dataList[0]].push(dataList[1])
  // console.log(graph)
  graph[dataList[1]].push(dataList[0])
}
// console.log(graph)
let visitedList = Array(nodeCount+1)
visitedList.fill(0)
// console.log(visitedList)

let result = 0;
function dfs(v){
  if (visitedList[v] === 0){
    visitedList[v] = 1;
    let toVisit = graph[v];
    for (const item of toVisit){
      dfs(item)
    }
    
  }
  else {
    return false;
  }
}
for (let j=1; j<= nodeCount; j++ ){
  // console.log(j)
  if(visitedList[j] == 0){
    dfs(j)
    result +=1;
  }
  // console.log(result)
}
console.log(result)