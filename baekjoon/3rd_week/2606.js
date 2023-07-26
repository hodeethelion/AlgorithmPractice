const fs = require('fs')
const readLine = fs.readFileSync('./input.in').toString().trim().split('\n')
// console.log(readLine)
const computerCount = Number(readLine[0])
const lineCount = Number(readLine[1])
const connection = readLine.slice(2)
let graph = []
for (let j=0;j<=computerCount;j++){
  graph.push([])
}
let visited = new Array(computerCount+1)
visited.fill(0)
let parseConnection;
for (let i=0; i<lineCount; i++){
  parseConnection = connection[i].split(' ').map(Number)

  graph[parseConnection[0]].push(parseConnection[1])
  graph[parseConnection[1]].push(parseConnection[0])
}

graph.forEach((item) =>{
  item.sort((a,b) => a-b)
})
// console.log(graph)
let count = 0
function dfs(v){
  if (visited[v] == 0){
    count+=1;
    visited[v]=1;
    let toVisit = graph[v];
    for (item of toVisit){
      dfs(item)
    }
  }
}
dfs(1)
console.log(count-1)