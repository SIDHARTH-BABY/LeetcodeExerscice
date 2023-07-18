

function minMaxSum(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let maxSum = sum - min;
  let minSum = sum - max;
  console.log(maxSum + " " + minSum);
}

let arr = [2, 3, 4, 5, 6];
minMaxSum(arr);


