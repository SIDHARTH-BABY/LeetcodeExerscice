const arr = [1, 2, 5, 0, 8, 0, 9];

function moveZero(val) {
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] != 0) {
      val[count] = val[i];
      count++;
    }
  }
  for (let i = count; i < val.length; i++) {
    val[count] = 0;
    count++;
  }
  return val;
}

console.log(moveZero(arr));
