function addOne(val) {
  for (let i = val.length - 1; i >= 0; i--) {
    if (val[i] === 9) {
      val[i] = 0;
    } else {
      val[i]++;
      return val;
    }
  }
  val.unshift(1);
  return val;
}
let val = [9];
console.log(addOne(val));
//kidilan qstn
