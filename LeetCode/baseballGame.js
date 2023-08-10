function baseBall(nums) {
  const result = [];
  let sumResult = 0;
  let ind = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != "C" && nums[i] != "D" && nums[i] != "+") {
      result.push(Number(nums[i]));
      ind++;
      console.log(result,'nums');
    } else if (nums[i] === "C") {
      result.pop();
      ind--;
      console.log(result,'cc');
    } else if (nums[i] === "D") {
      let double = result[ind - 1] * 2;
      result.push(double);
      ind++;
      console.log(result,'ddd');
    } else if (nums[i] === "+") {
      let sum = result[ind - 1] + result[ind - 2];
      result.push(sum);
      console.log(result,'summ');
      ind++
    }
  }
  for (let i = 0; i < result.length; i++) {
    sumResult += result[i];
  }
  return sumResult;
}

const nums = ["5","-2","4","C","D","9","+","+"]

console.log(baseBall(nums));
