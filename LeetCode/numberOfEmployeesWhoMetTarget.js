function numberOfEmployeesWhoMetTarget(nums, target) {
  let count = 0;
  if (nums.length === 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      count++;
    }
  }
  return count;
}

const hours = [0, 1, 2, 3, 4];
const target = 2;
console.log(numberOfEmployeesWhoMetTarget(hours, target));
