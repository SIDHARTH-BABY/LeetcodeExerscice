

//vv imp qst leetcode 64 easy array 

// contiguous subarray ===> array ll , k=3 annengill, aduppich 3 values sum cheyumbolll, highest kituunath annu answer.
var findMaxAverage = function(nums, k) {
    let kSum = 0;
    for(let i=0;i<k;i++){
        kSum += nums[i];
    }
    let windowSum = kSum;
    for(let i=0;i<nums.length;i++){
      console.log(nums[i+k],"num");

      //imp step,try to understand below step 
        windowSum = windowSum + nums[i+k] - nums[i];
        if(windowSum > kSum){
             kSum = windowSum;
        }
    }
    return kSum/k;
};

const arr = [1, 0, 1, 4, 2];
let k = 2;
console.log(findMaxAverage(arr, k));