// bit difficult , i took it from solution section after understanding, so try to understand
// 228. Summary Ranges

var summaryRanges = function(nums) {
    let i=0, j=0;
    let ret=[];
    while(i<nums.length) {
        j=i+1;
        while(j<nums.length && nums[j]-1===nums[j-1]) {
            j++;
        }
        if(i!==j-1) {
            ret.push(""+nums[i]+"->"+nums[j-1]);
        }else {
            ret.push(""+nums[i]);
        }
        i=j;
    }
    return ret;
};

const nums = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(nums));
