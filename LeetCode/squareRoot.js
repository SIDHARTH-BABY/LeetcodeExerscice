// function squareRoot(val) {
//   let i = 0;
//   let j = val;
//   let middle = Math.floor((i + j) / 2);

//   let midSquare = middle ** 2;

//   if (midSquare === val) {
//     return middle;
//   }
//   if (midSquare < val) {
//     i = middle + 1;
//   } else {
//     j = middle;
//   }
//   return j - 1;
// }

// console.log(squareRoot(8));

//above one is not correct

var mySqrt = function (x) {
  let r = x;
  while (r * r > x) {
    r = ((r + x/r) / 2) | 0;
  }
  return r;
};

console.log(mySqrt(9));
