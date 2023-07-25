const fs = require("fs");
const readLine = fs.readFileSync("./input.in").toString().trim().split("\n");
let [node, edge, start] = readLine[0].split(' ').map(Number)
let graph = new Array(node + 1);
const nodeData = readLine.slice(1)

for (let i= 0; i<= node; i++){
  graph[i] = [];
}
let sample;

for (const nodeString of nodeData){
  sample = nodeString.split(' ').map(Number);
  graph[sample[0]].push(sample[1]);
  graph[sample[1]].push(sample[0]);
}

graph.forEach((nodeLink) => {
  nodeLink.sort((a,b) => a-b)
})
// console.log(graph)

let visitedList = new Array(node + 1).fill(0);
let ans_dfs = []

function dfs(v){
  if (visitedList[v]) return;
  visitedList[v] = 1;
  ans_dfs.push(String(v));

  for (const toVisit of graph[v]){
    if (visitedList[toVisit] == 0){
      dfs(toVisit)
    }
  }
  return;
}
dfs(start)

let ans_bfs = []
visitedList.fill(0)
// let toVisit = 0;
function bfs(v){
  let q = [v];
  while(q.length){
    let x = q.shift();
    if (visitedList[x] == 0){
      visitedList[x] = 1;
      ans_bfs.push(String(x));
      for (const toVisit of graph[x]){
        if (visitedList[toVisit] == 0){
          q.push(toVisit)
        }
      }
    }
  }
}
bfs(start)
console.log(ans_dfs.join(' '))
console.log(ans_bfs.join(' '))