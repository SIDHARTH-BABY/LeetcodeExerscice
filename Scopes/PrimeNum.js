function primeNum(values) {
  for (let i = 0; i < values.length; i++) {
    let flag = 0;

    for (let j = 2; j < values[i] ; j++) {
      if (values[i] % j === 0) {
        flag++;
      }
    }
    if (flag != 0) {
      values.splice(i, 1);
      
    }
  }
  return values;
}

const values = [4, 5, 6, 74, 4, 5, 6, 7,2];

console.log(primeNum(values));
