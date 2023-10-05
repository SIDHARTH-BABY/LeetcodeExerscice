function jumpingOnClouds(nums) {
  let first = 0;
  let count = 0;
  let sec = 1;
  console.log(nums, first, sec);
  while (first <= nums.length - 1) {
    if (nums[sec + 1] === 0) {
      first = sec + 1;
      sec = first + 1;
      count++;
    } else if (nums[sec] === 0) {
      first = sec;
      sec = first + 1;
      count++;
    }
    if (first === nums.length - 1) {
      return count;
    }
  }
}

const score = [0, 0, 1, 0, 0, 1, 0];

console.log(jumpingOnClouds(score));
