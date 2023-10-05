
// question num 561 leetcode
function arrayPartion(nums) {
  nums.sort((a, b) => a - b);
console.log(nums);
  let answer =0
  for (let i = 0; i < nums.length; i++) {
    answer += nums[i];
    i++
  }
  return answer;
}

const nums = [1,4,3,2]
console.log(arrayPartion(nums));


//find the posiible pairings and sum it. return the maximum sum

//eg below
//  All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.


//if you didnt understand you can refer , utube 




