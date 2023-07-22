function getCombinations(arr, selectNum){
  const results = []; // 전체 모음
  if (selectNum === 1){
    return arr.map((value)=> [value])
  }
  arr.forEach((fixed, index, origin) => {
    console.log('fixed: ', fixed)
    const rest = origin.slice(index + 1);
    console.log('rest:  ', rest)
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination)=> [fixed, ...combination]);
    results.push(...attached);
  })
  return results
}

console.log(getCombinations([1,2,3], 2))