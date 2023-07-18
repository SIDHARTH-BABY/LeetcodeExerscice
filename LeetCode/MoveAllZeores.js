// function moveZeroes(val) {
//   for (let i = 0; i < val.length; i++) {
//     if (val[i] === 0) {
//       for (let j = val.length - 1; j >= 0; j--) {
//         if (i === j) {
//           return val;
//         }
//         if (val[j] != 0) {
//           let num = val[i];
//           val[i] = val[j];
//           val[j] = num;
//           break;
//         }
//       }
//     }
//   }
//   return val;
// }




function moveZeroes(nums){
  let nonZeroNum=0
  for(let i=0;i<nums.length;i++){
    if(nums[i] != 0){
      nums[nonZeroNum] = nums[i]
      nonZeroNum++
    }
  }
  for(let i=nonZeroNum;i<nums.length;i++){
    nums[i] =0
  }
  return nums
}
let nums = [0, 2, 3, 4, 0, 2, 3, 0];
console.log(moveZeroes(nums));
