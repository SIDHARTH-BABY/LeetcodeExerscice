function twoSum(values, target) {
  let sum;
  for (let i = 0; i < values.length; i++) {
    sum = values[i] + values[i + 1];

    if (sum == target) {
      return [i, i + 1];
    }
  }
}
let values = [2, 7, 11, 15];
console.log(twoSum(values, 9));
