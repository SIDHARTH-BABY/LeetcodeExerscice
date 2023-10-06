// answer which is more efficient
var kLengthApart = function (nums, k) {
  let count = k;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (count < k) {
        return false; // Not enough zeros between 1s
      }
      count = 0; // Reset count for the next 1
    } else {
      count++;
    }
  }

  return true; // All 1s are at least k positions apart
};

const nums = [1, 1, 1, 1, 1];
const k = 0;
console.log(kLengthApart(nums, k));

// var kLengthApart = function (nums, k) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       let val = k;
//       for (let j = i + 1; j < nums.length; j++) {
//         if (val === 0) {
//           break;
//         }
//         if (nums[j] === 0) {
//           val--;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// };
