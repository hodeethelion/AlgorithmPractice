function Combini(arr, number){
  const results = [];
  if (number === 1){
    return arr.map((elem) => [elem])
  }
  arr.forEach( (fixed, idx, list) => {
    const left = list.slice(idx+1);
    const combinaiton = Combini(left, number-1);
    const attached = combinaiton.map((combi) => [fixed, ...combi]);
    results.push(...attached);
  })
  return results
}

const sampleList = [1,2,3,4,5,6];

const a = Combini(sampleList, 2)
console.log(a)