const sampleList = [1, 2, 3, 4, 5];

function Combination(arr, count) {
  const result = [];
  if (count === 1) {
    return arr.map((element) => [element]);
  }
  arr.forEach((fixed, idx, orgList) => {
    const left = orgList.slice(idx + 1);
    const combinations = Combination(left, count - 1);
    const attatch = combinations.map((combi) => 
      [fixed, ...combi]);
    result.push(... attatch);
  });
  return result;
}

console.log(Combination(sampleList, 1));
const a =Combination(sampleList, 2);
console.log(a)

function Permutation (arr, count){
  const result = [];
  if (count === 1){
    return arr.map((element) => [element])
  }
  arr.forEach((v, idx, orgList)=> {
    const rest = [...orgList.slice(0, idx), ...orgList.slice(idx+1)];
    const permutations = Permutation(rest, count-1);
    const attatch = permutations.map((permutation) => [v, ...permutation])
    result.push(...attatch)
  })
}