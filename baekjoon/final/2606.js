const fs = require("fs");
const input = fs.readFileSync("input.in").toString().trim().split("\n");
// console.log(input);
const computerCount = Number(input[0]);
graph = [];
for (let i = 0; i <= computerCount; i++) {
  graph.push([]);
}
// console.log(graph);
const connectionItem = input.slice(2);
connectionItem.forEach((elem) => {
  const connection = elem.split(" ").map(Number);
  graph[connection[1]].push(connection[0]);
  graph[connection[0]].push(connection[1]);
});
// console.log(graph);
let visited = Array(computerCount + 1).fill(0);
let count = 0;

//🔥 dfs 부분
function dfs(start) {
  if (visited[start] == 0) {
    // console.log(visited)
    // console.log('start! :', start)
    count += 1;
    visited[start] = 1;
    const nextArray = graph[start];
    for (const next of nextArray) {
      if (visited[next] == 0) {
        // console.log('going dfs of ', next)
        dfs(next);
      }
    }
  }
}
//🔥 dfs 부분
// dfs(1)
// console.log(count -1)
visited = Array(computerCount + 1).fill(0);
//🔥 bfs 부분
function bfs(start) {
  const queue = [start];
  while (queue.length !== 0) {
    const current = queue.shift();
    // console.log('current: ', current);
    if (visited[current] == 0) {
      visited[current] = 1;
      count += 1;
      const nextArray = graph[current];
      for (const next of nextArray) {
        if (visited[next] == 0) {
          queue.push(next)
        }else{
          continue;
        }
      }
    }
  }
}

bfs(1)
console.log(count-1)