// 이진 검색 트리
const fs = require('fs')
const readLine = fs.readFileSync('./input.in').toString().split('\n').map(Number)
console.log(readLine)
//전위 순회한 결과 가 readLine
class Node {
  constructor(v){
    this.value = v;
    this.left = null;
    this.right = null;
  }
  insert(v){
    if (v < this.value){
      if (! this.left) this.left = new Node(v);
      else this.left.insert(v)
    }
    else {
      if (! this.right) this.right = new Node(v)
      else this.right.insert(v);
    }
  }
}


function makeTree()){

}