function firstLast(nums, tar) {
  let start = 0;
  let end = nums.length - 1;
  let result = [];
  let startFinisher = false;
  let endFinisher = false;
  while (start < end) {
    if (
      !startFinisher &&
      !endFinisher &&
      nums[start] === tar &&
      nums[end] === tar
    ) {
      result.push(start);
      result.push(end);
      return result;
    } else if (!startFinisher && nums[start] === tar) {
      console.log("ppp");
      result.push(start);
      startFinisher = true;
      end--;
    } else if (!endFinisher && nums[end] === tar) {
      console.log("jj");
      result.push(end);
      endFinisher = true;
      start++;
    } else {
      if (!startFinisher) {
        end--;
      } else if (!endFinisher) {
        start++;
      } else {
        start++;
        end--;
      }
    }
    if (startFinisher && endFinisher) {
      console.log("ooo");
      return result;
    }
  }
}

const nums = [5, 7, 7, 8, 8, 10];
console.log(firstLast(nums, 8));
