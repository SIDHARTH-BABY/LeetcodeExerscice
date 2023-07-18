function PositionSearch(arr, tar) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[left] > tar) {
    return 0;
  }
  if (arr[right] < tar) {
    return arr.length;
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === tar) {
      return mid;
    } else if (arr[mid] > tar) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
let arr = [2, 3, 4, 6, 7];
console.log(PositionSearch(arr, 7));
