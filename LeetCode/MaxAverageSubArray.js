function findMaxAverage(nums, k) {
  let negNums = [];
  if (nums.length === 1) {
    return nums[0] / k;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < 0) {
        let newNum = nums[i] * -1;

        negNums.push(newNum);
        negNums.sort((a, b) => {
          return b - a;
        });
        nums.splice(i, 1);
        break;
      } else {
        if (nums[i] > nums[j]) {
          const subNum = nums[i];
          nums[i] = nums[j];
          nums[j] = subNum;
        }
      }
    }
  }

  let pointerOne = 0;
  let pointerTwo = 0;
  let i = 1;
  let posSum = 0;
  let negSum = 0;
  while (i <= k) {
    if (negNums.length === 0) {
      if (pointerOne === nums.length - 1) {
        break;
      }
      posSum += nums[pointerOne];
      console.log(posSum, "ppo");
      pointerOne++;
    } else {
      if (nums[pointerOne] > negNums[pointerTwo]) {
        if (pointerOne === nums.length - 1) {
          break;
        }

        posSum += nums[pointerOne];
        pointerOne++;
      } else {
        negSum += -negNums[pointerTwo];
        if (pointerTwo === negNums.length - 1) {
          break;
        }
        pointerTwo++;
      }
    }

    i++;
  }
  if (negNums === 0) {
    return posSum / k;
  } else {
    return (posSum + negSum) / k;
  }
}

const arr = [1, 0, 1, 4, 2];
let k = 4;
console.log(findMaxAverage(arr, k));
