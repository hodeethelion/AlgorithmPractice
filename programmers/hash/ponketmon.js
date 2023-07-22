function solution(nums) {
  let pokemons = {};
  const totalCount = nums.length;
  const halfCount = Math.floor(nums.length / 2);
  console.log(`totalCount: ${totalCount} halfCount: ${halfCount}`);
  for (i = 0; i < nums.length; i++) {
    if (pokemons[nums[i]] === undefined) {
      pokemons[nums[i]] = 1;
    } else {
      pokemons[nums[i]] += 1;
    }
  }
  console.log(pokemons);
  let ans = 0;
  console.log("keys: ", Object.keys(pokemons).length);
  if (Object.keys(pokemons).length > halfCount) {
    ans = halfCount;
  } else {
    ans = Object.keys(pokemons).length;
  }
  console.log("answer: ", ans);
  return ans;
}
