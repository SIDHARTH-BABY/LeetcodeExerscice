function ArrayDiss(num) {
  let count = 0;
  let result = [];
 
  for (let i = 1; i < num.length + 1; i++) {
    count = 0;
    for (let j = 0; j < num.length; j++) {
      if (num[j] === i) {
        count++;
        break;
      }
    }
    if (count === 0) {
      result.push(i);
    }
  }
  return result;
}

let num = [1, 1, 3, 4, 7, 1];
console.log(ArrayDiss(num));
