function findMaxConsecutiveOnes(nums) {
  const result = [];
  let k = 0;
  let p = 1;
  pointerOne = 0;
  pointerTwo = 1;
  if (nums.length === 1) {
    return nums;
  }
  while (pointerTwo <= nums.length - 1) {
    if (nums[pointerOne] === 1 ) {
      if (nums[pointerOne] === nums[pointerTwo]) {
        p++;
        result[k] = p;

        pointerTwo++;
      } else {
        result[k] = p;

        k++;
        p = 1;
        pointerOne = pointerTwo + 1;
        pointerTwo += 2;
      }
    } else if (nums[pointerOne] === 1 || nums[pointerTwo] === 1) {
      result[k] = 1;
      pointerOne = pointerTwo + 1;
        pointerTwo += 2;
    } else {
      pointerOne = pointerTwo + 1;
      pointerTwo += 2;
      result[k] = 0;
    }
  }
  let val = result.sort((a, b) => b - a);

  return result[0];
}

const nums= [0,1,1,1,0,0,1,1,1,1]
console.log(findMaxConsecutiveOnes(nums));


// wrong answer