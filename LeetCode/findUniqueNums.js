function uniqueNum(nums) {
  let valid = 0;
  for (let i = 0; i < nums.length; i++) {
    valid = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        j++
      }
      console.log(nums[i],nums[j]);
      if (nums[i] === nums[j]) {
        valid++;
        break;
      }
    }
    if (valid === 0) {
      return nums[i];
    }
  }
}

const nums = [4,4,1,2,1,2]
console.log(uniqueNum(nums));
