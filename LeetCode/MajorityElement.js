function majorityNum(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const obj = {};

  for (const num of nums) {
    obj[num] = obj[num] + 1 || 1;
  }
console.log(obj);
  for (const key in obj) {
    if (obj[key] > Math.floor(nums.length / 2)) {
      return key;
    }
  }
}

let nums = [2, 2, 1, 1, 1, 2, 2, 2];

console.log(majorityNum(nums));

//question is , you have to find the number which is more than (half of the size of given array)==>(nums.length/2)
