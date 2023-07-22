// 테스트케이스1: 런타임 
function multiply(list){
  let ans = 1;
  for (let m=0; m< list.length; m++){
      ans *= list[m];
  }
  return ans;
}

function combinations(arr, num) {
  let results = [];
  if (num === 1) {
      return arr.map((elem) => [elem])
  }
  
  arr.forEach ((fixed, index, original) => {
      const left = original.slice(index+1);
      const combination = combinations(left, num-1);
      const attached = combination.map((combi) => [fixed, ...combi])
      results.push(... attached);
})
  return results
}

function solution(clothes) {
  if (clothes.length === 1){
      return 1;
  }
  let clothingObject = {};
  for (i =0; i< clothes.length;i++){
      if (clothingObject[clothes[i][1]] === undefined){
          clothingObject[clothes[i][1]] = [clothes[i][0]]
      }else{
          clothingObject[clothes[i][1]].push(clothes[i][0])
      }
  }
  const clothingArray = Object.values(clothingObject)
  let clothingNum = []
  clothingArray.forEach((name, index) => clothingNum.push(name.length))

  let allCombination = [];
  for (let k=1; k < clothingNum.length+1; k++){
      allCombination.push(...combinations(clothingNum, k))
  }
  let answer = 0;
  for (let g=0; g< allCombination.length; g++){
      answer += multiply(allCombination[g])
  }
  return answer;
}