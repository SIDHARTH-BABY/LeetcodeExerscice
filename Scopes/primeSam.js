function findPrime(values) {
  console.log("jelladkfdj");
  for (let i = 0; i < values.length; i++) {
    let flag = 0;
    for (let j = 2; j < values.length / 2; j++) {
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

let values = [2, 3, 4, 5, 11, 6, 7, 8, 13, 17, 19, 18];

console.log(findPrime(values));
