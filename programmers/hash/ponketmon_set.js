function solution(nums) {
  const sampleSet = new Set(nums);
  const halfNum = nums.length / 2; 
  let ans;
  if (halfNum > sampleSet.size){
      ans = sampleSet.size;
  }else {
      ans = halfNum;
  }
  return ans; 
}