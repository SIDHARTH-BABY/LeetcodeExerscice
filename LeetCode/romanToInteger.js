function romanToNum(nums) {
  console.log(nums);
  const myMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = myMap[nums[i]];
    const next = myMap[nums[i + 1]];
    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }
  return result;
}
let num = "IV";
console.log(romanToNum(num));


