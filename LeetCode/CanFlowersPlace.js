function canPlaceFlowers(nums, n) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) continue;

    if (
      (nums[i - 1] === 0 || i === 0) &&
      (i === nums.length - 1 || nums[i + 1] === 0)
    ) {
      nums[i] = 1;
      n--;
    }
  }
  return n <= 0;
}

let flowerbed = [1, 0, 0, 0, 1];
let n = 2;
console.log(canPlaceFlowers(flowerbed, n));
