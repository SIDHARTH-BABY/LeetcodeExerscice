function roman(nums) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr = obj[nums[i]];
    let nex = obj[nums[i + 1]];
    if (curr < nex) {
      sum += nex - curr;
      i++;
    } else {
      sum += curr;
    }
  }
  return sum;
}

const nums = "MCMXCIV";
console.log(roman(nums));
