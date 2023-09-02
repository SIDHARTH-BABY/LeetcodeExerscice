function maxSum(nums) {
  let maxPair = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let numA = nums[i].toString().split("");
      let numB = nums[j].toString().split("");

      if (
        Number(numA[0]) + Number(numA[1]) ===   Number(numB[0]) + Number(numB[1])
      ) {
        console.log(numA[0],numA[1],numB[0],numB[1]);
        let sum = nums[i] + nums[j];
        if (maxPair < sum) {
          maxPair = sum;
        }
      }
    }
  }
  return maxPair
}

const nums = [51, 71, 17, 24, 42];

console.log(maxSum(nums));
