function findPrime(values) {
  console.log("jelladkfdj");
  for (let i = 0; i < values.length; i++) {
    let flag = 0;
    for (let j = 2; j < values[i]; j++) {
      if (values[i] % j === 0) {
        flag++;
      }
    }
    // console.log(values[i], flag, "what is here");
    if (flag === 0) {
      console.log(values[i],'cooreect');
    }
  }
  
}

let values = [2, 3, 4, 5, 11, 6, 7, 8, 13, 17, 19, 18];

console.log(findPrime(values));
