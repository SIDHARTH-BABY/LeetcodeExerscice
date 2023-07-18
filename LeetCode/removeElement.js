function remove(val, num) {
  let pointer = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== num) {
      val[pointer] = val[i];
      pointer++;
    }
  }
  return pointer;
}
let val = [2, 3, 4, 4, 1];
console.log(remove(val, 4));
