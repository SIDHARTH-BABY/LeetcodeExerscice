function firstLast(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let leftBound = -1;
  let rightBound = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    console.log(mid, Math.floor((end - start) / 2), "mi");
    if (nums[mid] === target && nums[mid - 1] !== target) {
      leftBound = mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
      console.log(start, end, "jj");
    } else {
      end = mid - 1;
    }
  }
  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target && nums[mid + 1] !== target) {
      rightBound = mid;
    }
    if (nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return [leftBound, rightBound];
}

const nums = [5, 7, 7, 8, 8, 10];
console.log(firstLast(nums, 8));
