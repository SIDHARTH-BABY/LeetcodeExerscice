function medianArray(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isEven = totalLength % 2 === 0;
    const mid = Math.floor(totalLength / 2);
  
    let i = 0, j = 0;
    let merged = [];
    let current;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      current = nums1[i];
      i++;
    } else {
      current = nums2[j];
      j++;
    }
    merged.push(current);
    if (isEven && merged.length === mid + 1) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else if (!isEven && merged.length === mid + 1) {
      return merged[mid];
    }
  }
}

const nums1 = [1, 3];
const nums2 = [2];
console.log(medianArray(nums1, nums2));


//not completed ,,qst 4 hard leetcode