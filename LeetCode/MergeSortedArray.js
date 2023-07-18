function mergeArraySort(num1, m, num2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;
  while (second >= 0) {
    if (num1[first] >= num2[second]) {
      num1[i] = num1[first];
      i--;
      first--;
    } else {
      num1[i] = num2[second];
      second--;
      i--
      
    }
  }
  return num1;
}

// if dont understand utube nokkikoo

val1 = [3, 4, 0, 0];
val2 = [1, 2];
console.log(mergeArraySort(val1, 2, val2, 2));
