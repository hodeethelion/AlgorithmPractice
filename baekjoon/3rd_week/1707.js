const fs = require('fs')
const readLine = fs.readFileSync('./input.in').toString().trim().split('\n')
// console.log(readLine)
const testCase = Number(readLine[0])
// 정점의 개수 v, 간선의 개수 e
let testStart = 1
let v, e;
let visited, sample, test, graph, ans ;

for (let i=1; i <= testCase;i++){
  [v, e] = readLine[testStart].split(' ').map(Number)
  // console.log(v,e)
  ans = 'YES'
  visited = Array(v+1);
  visited.fill(0)
  // console.log(visited)
  
  test = readLine.slice(testStart+1, testStart +e+1)
  // console.log(test)
  graph = []
  for (let j=0; j <= v;j++){
    graph.push([])
  }
  // 그래프 만들기
  for (const tobeEdge of test){
    sample = tobeEdge.split(' ').map(Number)
    graph[sample[0]].push(sample[1])
    graph[sample[1]].push(sample[0])
  }
  
  for (let k=1; k<= v;k++){
    if (visited[k] == 1){
      if (dfs(k, 1) == false){
        ans = 'NO'
        break;
      }
    }else if (visited[k] == -1){
      if (dfs(k, -1) == false){
        ans = 'NO'
        break;
      }
    }else {
      if (dfs(k, 1) == false){
        ans = 'NO'
        break;
      }
    }
  }
  
  console.log(ans)
  testStart += (e+1)
}

function dfs(p, flag){
  if (visited[p]== 0) {
    visited[p] = flag;
  }else{
    return;
  }
  const toVisit = graph[p];
  for (const e of toVisit){
    // console.log(e)
    if (visited[e] == 0){
      dfs(e, -flag);
    }else if (visited[e] == flag){
      return false
    }else {
      return true
    }
  }
}
