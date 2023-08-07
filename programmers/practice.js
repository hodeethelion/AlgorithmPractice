const sampleList = [1, 2, 3, 4, 5];

function combinations(arr, count){
  const result = []
  if (count==1){
    return arr.map(elem => [elem])
  }
  arr.forEach((fixed, index, orginalList) => {
    const left = orginalList.slice(index+1);
    const combination = combinations(left, count-1)
    const attach = combination.map((e) => [fixed, ...e])
    result.push(...attach)
  })
  return result
}

const a = combinations(sampleList, 2)
// console.log(a)

function permutation(arr, count){
  const result = [];
  if (count ===1 ){
    return arr.map(e=>[e])
  }
  arr.forEach((fixed, index, orgList) =>{
    const left = [...orgList.slice(0,index), ...orgList.slice(index+1)];
    const permutations = permutation(left, count-1);
    const attach = permutations.map(e=> [fixed, ...e])
    result.push( ...attach)
  })
  return result;
}
const b = permutation(sampleList, 2)
console.log(b)