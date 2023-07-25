const fs = require("fs");
const inputLine = fs.readFileSync("./input.in").toString().split("\n").slice(1);
// console.log(inputLine);
let nodeObject = {};

// for ()
let sample;
for (item of inputLine) {
  sample = item.split(" ");
  // console.log(sample);
  nodeObject[sample[0]] = sample.slice(1);
}
// console.log(nodeObject);

let result = '';
// 전위 순회 중위 순회 후위 순회
function preorder(node) {
  if (node === ".") return;
  else {
    const [left, right] = nodeObject[node];
    result += node;
    preorder(left);
    preorder(right);
  }
}

function middleorder(node){
  if (node == '.') return;
  else{
    const [left, right] = nodeObject[node];
    middleorder(left)
    result += node;
    middleorder(right);
  }
}

function rightorder(node){
  if (node == '.') return;
  else{
    const [left, right] = nodeObject[node];
    rightorder(left)
    rightorder(right);
    result += node;
  }
}



preorder('A')
result+= '\n'
middleorder('A')
result+= '\n'
rightorder('A')

console.log(result)