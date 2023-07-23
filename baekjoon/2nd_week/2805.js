fs = require('fs')
const readList = fs.readFileSync('./input.in').toString().trim().split('\n')
const [ treeNumber, needLength] = readList[0].split(' ').map(Number)
let treeList = readList[1].split(' ').map(Number).sort((a,b) => b-a)
// console.log(treeNumber, needLength)
// console.log(treeList)

function cutTree(height){
  let yieldTree = 0;
  for(tree of treeList){
    if (tree > height){
      yieldTree += (tree - height)
    }else{
      break;
    }
  }
  return yieldTree;
}

let left = 0;
let right = treeList[0];
let mid;
// let result;
while (left <= right){
  // console.log('left: ', left, 'right: ', right);
  mid = Math.floor((left+ right)/2);
  if (cutTree(mid) < needLength){
    right = mid -1;
  }else if (cutTree(mid) > needLength){
    left = mid + 1;
  }else{
    left = mid + 1;
  }
}
console.log(right)