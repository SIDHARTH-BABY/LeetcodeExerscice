function LongestHarmonious(nums) {
  let object = {};

  let newNums = nums.sort((a, b) => {
    return a - b;
  });

  let first;
  let second;
  let count = 0;
  let prevCount = 0;
  //one of the import step ,we can use it inmany problems (below)
  for (let i = 0; i < newNums.length; i++) {
    object[newNums[i]] = object[newNums[i]] + 1 || 1;

    if (prevCount > count) {
      count = prevCount;
    }
  }

  let newObj = [...new Set(newNums)];

  for (let i = 0; i < newObj.length; i++) {
    for (let j = i + 1; j < newObj.length; j++) {
      if (newObj[j] - newObj[i] === 1) {
        first = newObj[i];
        second = newObj[j];

        prevCount = object[first] + object[second];

        break;
      } else {
        break;
      }
    }
    if (prevCount > count) {
      count = prevCount;
    }
  }

  return count;
}
// 1,2,2,2,3,3,5,7

let nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(LongestHarmonious(nums));
