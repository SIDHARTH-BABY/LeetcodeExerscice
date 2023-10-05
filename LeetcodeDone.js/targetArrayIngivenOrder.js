function targetArray(nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
}

const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];
console.log(targetArray(nums, index));
