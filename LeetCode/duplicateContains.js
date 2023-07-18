function isDuplicate(nums) {
    if(nums.length ===0){
        return 0
    }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        break;
      } else {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
  }
  return false;
}

const nums = [1, 2, 3, 4,];
console.log(isDuplicate(nums));



//another solution in two steps given below for the same question
// var containsDuplicate = function(nums) {
//     var unique = new Set(nums);
//     return unique.size !== nums.length
// };