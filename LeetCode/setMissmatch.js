function findErrorNums(nums) {
  let ans = [-1, -1];
  for (let n of nums) {
    if (nums[Math.abs(n) - 1] < 0) {
      ans[0] = Math.abs(n);
    } else {
      nums[Math.abs(n) - 1] *= -1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans[1] = i + 1;
    }
  }
  return ans;
}

nums = [1, 2, 2, 4];
console.log(findErrorNums(nums));
