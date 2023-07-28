const fs = require("fs");
const readLine = fs.readFileSync("./input.in").toString().trim().split("\n");
// console.log(readLine);
const [nCity, nRoad, roadLen, startCity] = readLine[0].split(" ").map(Number);
const roadData = readLine.slice(1);
let shortestDistance = Array(nCity + 1).fill(0);
// console.log(shortestDistance);
let graph = [];
let road;
for (let i = 0; i <= nCity; i++) {
  graph.push([]);
}

for (const item of roadData) {
  road = item.split(" ").map(Number);
  graph[road[0]].push(road[1]);
}
// console.log(graph);
let ans = [];
function bfs(s) {
  const q = [s];
  shortestDistance[s] = 1;

  while (q.length) {
    const cur = q.shift();
    if (shortestDistance[cur] == roadLen + 1) {
      ans.push(cur);
      continue;
    }
    for (const next of graph[cur]) {
      if (!shortestDistance[next]) {
        q.push(next);
        shortestDistance[next] = shortestDistance[cur] + 1;
      }
    }
  }
}

bfs(1);
if (ans.length === 0) {
  console.log(-1);
} else {
  console.log(ans.join("\n"));
}
