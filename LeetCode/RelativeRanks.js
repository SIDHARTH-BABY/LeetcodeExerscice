function findRanks(nums) {
  let newNums = [...nums];

  let obj = {};

  newNums.sort((a, b) => b - a);

  for (let i = 0; i < newNums.length; i++) {
    obj[newNums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === 0) {
      nums[i] = "Gold Medal";
    } else if (obj[nums[i]] === 1) {
      nums[i] = "Silver Medal";
    } else if (obj[nums[i]] === 2) {
      nums[i] = "Bronze Medal";
    } else {
      nums[i] = (obj[nums[i]] + 1).toString();
    }
  }
  return nums;
}

let nums = [1, 2, 3];
console.log(findRanks(nums));

///wrong answer
//leetcode easy problem arrAy
