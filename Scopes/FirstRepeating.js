function Repeat(values) {
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return values.slice(i, i + 1);
      }
    }
  }
}
const values = [3, 4, 5, 6, 7, 7, 1];
console.log(Repeat(values));
// const fruits = ['apple', 'banana', 'kiwi', 'mango'];
// const slicedFruits = fruits.slice(1,2);
// console.log(fruits); // ['apple', 'banana', 'kiwi', 'mango']
// console.log(slicedFruits); // ['banana', 'kiwi']
