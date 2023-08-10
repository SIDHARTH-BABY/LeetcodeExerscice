
//wrong answer /////////////
function findShortestSubArray(nums) {
  let degree = 1;
  let mainNum = 0;
  let tempDegree = 1;
  let result = [];
  let valid = 0;
  let bar = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        console.log(nums[i],'equals');
        tempDegree++;
      
      }
    }
    if(degree === tempDegree){
        console.log(nums[i],'hello');
        }
    if (degree < tempDegree) {
        
      degree = tempDegree;
      mainNum = nums[i];
      tempDegree = 0;
      console.log(degree,'kkk');
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === mainNum) {
      bar = true;
      valid++;
    }
    if (bar) {
      result.push(nums[i]);
    }
    if (valid === degree) {
      return result;
    }
  }
}

const nums = [1,2,2,3,1]
console.log(findShortestSubArray(nums));
