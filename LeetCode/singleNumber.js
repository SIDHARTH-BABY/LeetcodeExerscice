function singleNum(val) {
  if (val.length < 0) {
    return 0;
  }
  if (val.length === 1) {
    return val[0];
  }
  let flag;
  for (let i = 0; i < val.length; i++) {
    flag = 0;
    for (let j = 0; j < val.length; j++) {
      if (i != j) {
        if (val[i] === val[j]) {
          flag++;
          break;
        }
      }
    }

    if (flag === 0) {
      return val[i];
    }
  }
}

let num = [1, 2, 4, 4, 2, 1, 7];

console.log(singleNum(num));
