const fs = require("fs");
const readLine = fs.readFileSync("./input.in").toString().split("\n");
// console.log(readLine);
const nodeData = readLine.slice(1);
// 정점의 개 간선의 개 탐색을 시작할 정점의 번호
let graph = {};
const [nodeCount, edgeCount, startNumber] = readLine[0].split(" ").map(Number);

let connectionList = [];
for (nodeString of nodeData) {
  connectionList = nodeString.split(" ").map(Number);
  // console.log(connectionList);
  // 양방향 만들기
  if (graph[connectionList[0]] === undefined) {
    graph[connectionList[0]] = [connectionList[1]];
  } else {
    graph[connectionList[0]].push(connectionList[1]);
  }
  // 양방향 만들기
  if (graph[connectionList[1]] === undefined) {
    graph[connectionList[1]] = [connectionList[0]];
  } else {
    graph[connectionList[1]].push(connectionList[0]);
  }
}
// console.log(graph);
// sorting 함수
// console.log(Object.keys(graph));

for (key of Object.keys(graph)) {
  graph[key].sort();
}

// console.log(graph);

let result = [];
let result2 = [];
let visitedList = [];
for (i = 0; i < nodeCount + 1; i++) {
  visitedList.push(0);
}
let toVisit;
function dfs(start, graph, visited) {
  result.push(String(start));
  visited[start] = 1;
  // 만약 처음 갓는데 이미 방문한거가 아니어야하고 존재해야만한다
  toVisit = graph[start]; // 리스트
  for (node of toVisit) {
    if (visitedList[node] == 1) {
      continue;
    } else {
      // visited[Number(node)] = 1;
      dfs(node, graph, visited);
    }
  }
  return;
}
dfs(startNumber, graph, visitedList);
// console.log(result);



function bfs(graph, visited, visitStack) {
  while (visitStack.length != 0 ) {
    // console.log('visit Stack: ', visitStack)
    start = String(visitStack.shift())
    result2.push( String(start))
    visited[Number(start)] = 1;
    toVisit = graph[start]
    for (node of toVisit) {
      if (visited[node] == 0 && !visitStack.includes(node)) {
        // console.log(node)
        visitStack.push(node);
      }
    }
  }
}

let visitStack = [startNumber];
// console.log(visitStack)
let start = 0;
// result += '\n'
visitedList = [];
for (i = 0; i < nodeCount + 1; i++) {
  visitedList.push(0);
}
bfs(graph, visitedList, visitStack)
console.log(result.join(' '))
console.log(result2.join(' '))