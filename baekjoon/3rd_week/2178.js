const fs = require("fs");
let readLine = fs.readFileSync("./input.in").toString().trim().split("\n");
// console.log(readLine);
const [n, m] = readLine[0].split(" ").map(Number);
// console.log("n:  ", n, "\nm: ", m);
let graph = [];
let line;
for (let i = 1; i <= n; i++) {
  line = readLine[i].split("").map(Number);
  graph.push(line);
}
// console.log(graph);
const check = new Array(m);
check.fill(0);
let checkGraph = [];
for (let j = 0; j < n; j++) {
  checkGraph.push(Array(m).fill(0));
}
// console.log(checkGraph);

function bfs(row, col) {
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  const q = [];
  q.push([row, col]);
  checkGraph[row][col] = 1;
  while (q.length) {
    const [curr_r, curr_c] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [next_r, next_c] = [curr_r + dr[i], curr_c + dc[i]];
      // console.log(next_r, next_c);
      if (next_r < 0 || next_c < 0 || next_r >= n || next_c >= m) {
        // console.log("pass!");
        continue;
      }
      else if (checkGraph[next_r][next_c] == 0 && graph[next_r][next_c] == 1) {
        // console.log("success ", next_r, next_c);
        graph[next_r][next_c] = graph[curr_r][curr_c] + 1;
        checkGraph[next_r][next_c] = 1;
        q.push([next_r, next_c]);
      }
    }
  }
}
bfs(0, 0);
// console.log(checkGraph);
// console.log(graph)
console.log(graph[n-1][m-1])
