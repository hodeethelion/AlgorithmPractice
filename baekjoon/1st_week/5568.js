const fs = require("fs");
// Combination 연습
const cardList = fs
  .readFileSync("./input.in")
  .toString()
  .trim()
  .split("\n");
// console.log(cardList.slice(2));

function permutation (arr, pickNumber){
  const results = []
  if (pickNumber == 1){
    return arr.map(elem => [elem])
  }
  arr.forEach((fixed, idx, orgList )=>{
    const leftOver = [... orgList.slice(0, idx), ... orgList.slice(idx+1)]
    const permutations = permutation(leftOver, pickNumber -1);
    const attached = permutations.map( (permutation) => 
      [fixed, ...permutation]
    )
    results.push(...attached);
  })
  return results
}
// console.log(permutation(cardList.slice(2), cardList[1]))
const permutedList = permutation(cardList.slice(2), cardList[1]).map(e => e.join(''))
// console.log(permutedList);
const set = new Set(permutedList);
const newArray = [...set]
console.log(newArray.length)

