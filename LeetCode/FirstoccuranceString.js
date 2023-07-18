// Find the Index of the First Occurrence in a String

function firstOccur(val, val2) {
  let i = 0;
  let j = 0;
  let k = 0;
  if (val.length === 0) {
    return -1;
  }
  while (val.length - 1 >= j) {
    while (val[j] === val2[k]) {
      j++;
      k++;
      if (val2.length === k) {
        return i;
      }
    }
    if (val[j] !== val2[k]) {
      i++;
      j = i;
      k = 0;
    }
  }
  return -1;
}

let val = "sadbutsad";
let val2 = "sad";

console.log(firstOccur(val, val2));
