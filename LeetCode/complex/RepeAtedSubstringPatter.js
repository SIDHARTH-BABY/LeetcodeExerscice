function repeatedSubstringPattern(str) {
  let pointerOne = 0;
  let pointerTwo = 1
  let repeat = false
  if (str.length % 2 != 0) {
    return false;
  }
  while (pointerOne < str.length) {
    if (str[pointerOne] === str[pointerTwo]) {
    repeat= true
      pointerOne++;
      pointerTwo++;
    } else {
      
      pointerTwo++;
      if(repeat){
        return  false
      }

    }
  }
  
  return true
}

const str = "abac"
console.log(repeatedSubstringPattern(str));
