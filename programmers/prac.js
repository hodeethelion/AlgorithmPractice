const sample = [12,13,14,15]

function combination (arr, len) {
  const results = []
  if (len === 1){
    return arr.map((e)=> [e])
  }
  arr.forEach((fixed, idx, orgArr) => {
    const leftOver = orgArr.slice(idx + 1);
    const combinis = combination(leftOver, len-1);
    const attach = combinis.map((combination) => [fixed, ... combination])
    results.push( ... attach)
  })
  return results
}
const a = combination(sample,3)
console.log(a)

function permutation(arr, len){
  const results = []
  if (len === 1){
    return arr.map((e) => [e])
  }
  arr.forEach((fixed , idx, arr) => {
    const left = [... arr.slice(0,idx), ... arr.slice(idx +1)]
    const permutations = permutation(left, len-1)
    const attach = permutations.map((v) => [fixed,...v])
    results.push(...attach)
  })
  return results
}

const b = permutation(sample,3)
console.log(b)