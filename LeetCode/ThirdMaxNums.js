function thirdMacNum(num) {
  let newNum = new Set(num);
  let val = Array.from(newNum);
  //In the example I provided, we use the Array.from() function to convert the Set back to an array. 
//   The reason for using Array.from() is that it creates a new array from an iterable object, such as a Set.
  let newVal = val.sort((a, b) => {
    return b - a;
  });
  console.log(newVal);
  if (newVal.length < 3) {
    return newVal[0];
  } else {
    return newVal[2];
  }
}

let num = [1, 2,4];
console.log(thirdMacNum(num));





// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.