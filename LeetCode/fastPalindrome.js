function fastPalindrome(val) {
  let values = val;
  let p1 = 0;
  let b1 = values.length - 1;

  while (p1 < b1) {
    if (values[p1] != values[b1]) {
      return false;
    }
    p1++;
    b1--;
  }
  return true;
}

console.log(fastPalindrome("121"));
