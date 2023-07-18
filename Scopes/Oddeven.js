function findOdd(values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 != 0) {
      values.splice(i, 1, "j");
    }
  }
  return values;
}
const nums = [2, 3, 4, 5, 6, 7, 8];
console.log(findOdd(nums));