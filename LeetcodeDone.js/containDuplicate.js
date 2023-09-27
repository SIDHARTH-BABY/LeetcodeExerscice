function findDistinct(nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      if (Math.abs(map.get(nums[i]) - i) <= k) {
        return true;
      }
      map.set(nums[i], i);
    }
  }
  return false;
}

const nums = [0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0];
const k = 1;
console.log(findDistinct(nums, k));
