const fs = require("fs");
// Combination 연습
const cardList = fs
  .readFileSync("./input.in")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
console.log(cardList);

function combination(arr, pickNumber){
  const results = []
  if (pickNumber === 1){
    return arr.map(elem => [elem])
  }
  arr.forEach((fixed, idx, orgList)=>{
    const leftOver = orgList.slice(idx + 1);
    const combinations = combination(leftOver, pickNumber-1);
    const attatched = combinations.map((combini) => 
    [ fixed, ... combini]
    )
    results.push(...attatched);
  })
  return results
}



console.log( combination(cardList, 2))
// Permutation 연습
