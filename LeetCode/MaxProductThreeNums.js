//628 min product of three nums
var maximumProduct = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min2 = Infinity;
  let min1 = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      [max1, max2, max3] = [nums[i], max1, max2];
    } else if (nums[i] > max2) {
      [max2, max3] = [nums[i], max2];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }
    if (nums[i] < min1) {
      [min2, min1] = [min1, nums[i]];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }

  //imp step
  console.log(max1, max2, max3, max1, min1, min2);
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

let nums = [100, -98, 1, 2, 3, 4];

console.log(maximumProduct(nums));

//another solution
// var maximumProduct = function(nums) {
//     nums = nums.sort((a,b) => b-a)
//     return Math.max(nums[0]*nums[1]*nums[2], nums[nums.length-1]*nums[nums.length-2]*nums[0])
// }


