// 598. Range Addition II



var maxCount = function (m, n, ops) {
  if (!ops.length) return m * n;
  const row = Math.min(...ops.map((m) => m[0]));
  console.log(ops.map((m) => m[0]),'row');
  const col = Math.min(...ops.map((m) => m[1]));
  console.log(...ops.map((m) => m[1]));
  return row * col;
};

let m = 3;
let n = 3;
ops =  [[1,0],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]

console.log(maxCount(m, n, ops));

//ith solution ll ninnu copy paste annu but mansilayii
//ivide enik mansilayath ==> row (...ops.map((m) => m[0])) ee step kond udheshikkunath , ellla arrray llleum first value edkum, ennitu athille ettavum lowest value

//...ops.map((m) => m[1]) ith column ==> ivide array lee 2nd value edmun, athill least value eddkum 
 //ennit row * column cheyyum