function validPalindrome(val) {
  if (val.length === 0) {
    return true;
  }
  let newVal = val.replace(/[^a-z0-9]/gi, "");

  let start = 0;
  let end = newVal.length - 1;

  while (start < end) {
    if (newVal[start].toLowerCase() !== newVal[end].toLowerCase()) {
      console.log(newVal[start]);

      return false;
    }
    start++;
    end--;
  }
  return true;
}

const val = "A man, a plan, a canal: Panama";
console.log(validPalindrome(val));
