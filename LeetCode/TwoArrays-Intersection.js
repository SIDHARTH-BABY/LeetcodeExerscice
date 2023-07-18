var intersection = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        if (!result.includes(nums1[i])) {
          result.push(nums1[i]);
        }
      }
    }
    return result;
  };

let left =[1,2,2,1]
let right =[2,2]

console.log(intersection(left, right));

//firs method