// there will  two array , nums1 and num2 , nums1 is a  subset of nums2,(num1 values num2 sure ayyitu  indavum),
// take nums1 first value and find it on nums2 , after finding  look to the right side of nums2 targeted value , if it is larger than targeted value then write that value
// or write -1
// leetcode question 496

function nextGreaterElement(nums1, nums2) {
  let result = [];
  let k = 0;
  let large = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        for (let m = j + 1; m < nums2.length; m++) {
         
            if (nums2[j] < nums2[m]) {
              large = nums2[m];
              break;
            }
         
        }
        if (large > nums2[j]) {
          result[k] = large;
          large=0
          k++;
        } else {
          result[k] = -1;
          k++;
        }
      }
    }
  }
  return result;
}

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
