function isPalindrome(val) {
  let mkaeStr = val.toString();
  let newVal = mkaeStr.split("");

  let pointerOne = 0;
  let pointerTwo = newVal.length - 1;
  while (pointerOne < pointerTwo) {
  
    if (newVal[pointerOne] === newVal[pointerTwo]) {
      pointerOne++;
      pointerTwo--;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

const val = -121;
console.log(isPalindrome(val));
