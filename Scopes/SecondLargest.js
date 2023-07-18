function SecondLar(values) {
  let Largest = 0;
  let secondLar = 0;
  for (let i = 0; i < values.length; i++) {
    if (Largest < values[i]) {
      secondLar = Largest;
      Largest = values[i];
    }
    if (values[i] < Largest && values[i] > secondLar) {
      secondLar = values[i];  
    }
  }
  return secondLar;
}

const values = [3, 4, 5, 6, 8, 66, 5, 50, 10];
console.log(SecondLar(values));
