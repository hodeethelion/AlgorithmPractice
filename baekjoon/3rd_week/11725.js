const fs = require('fs')
const findingTree = fs.readFileSync('./input.in').toString().trim().split('\n')
let graph = []
const nodeCount = Number(findingTree[0])
for (let i=0; i<=nodeCount;i++){
  graph.push([])
}
const nodeData = findingTree.slice(1)
// console.log(nodeData)
let noding;
for (const item of nodeData){
  noding = item.split(' ').map(Number)
  graph[noding[0]].push(noding[1])
  graph[noding[1]].push(noding[0])
}

// console.log(graph)
let parentObject = {}
let visited = new Array(nodeCount+1)
visited.fill(0)

function dfs(v){
  if (visited[v]==0){
    visited[v] =1;
    const toVisit = graph[v]
    for (let item of toVisit){
      if (visited[item]== 0){
        parentObject[item]= v;
        dfs(item)
      }
    }
  }
}
dfs(1)
// console.log(parentObject)
let ans = []
for (let j=2; j<=nodeCount;j++){
  ans.push(parentObject[j])
}
console.log(ans.join(' '))