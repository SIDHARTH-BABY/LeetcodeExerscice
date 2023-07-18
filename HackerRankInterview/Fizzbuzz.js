function Fizzbuzz(val) {
  for (let i = 1; i <= val; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "Fizzbuzz");
      continue;
    }
    if (i % 3 === 0) {
      console.log(i, "Fizz");
      continue;
    }
    if (i % 5 === 0) {
      console.log(i, "Buzz");
      continue;
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
      continue;
    }
  }
}

Fizzbuzz(15);

