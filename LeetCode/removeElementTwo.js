function removeElement(val, num) {
  for (let i = 0; i < val.length; i++) {
    if (val[i] === num) {
      val.splice(i, 1);
      i--;
    }
  }
  return val;
}
let val = [3, 2, 2, 3, 3, 3, 2, 3];
console.log(removeElement(val, 3));
