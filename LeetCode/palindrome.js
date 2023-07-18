function palindrome(val) {
  let strVal = val.toString();
  let values = strVal.split("");
  for (let i = 0, j = values.length - 1; i < values.length, j >= 0; i++, j--) {
    console.log(values[j], "J");
    console.log(values[i], "i");
    if (values[i] === values[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
values = 121;
console.log(palindrome(values));
