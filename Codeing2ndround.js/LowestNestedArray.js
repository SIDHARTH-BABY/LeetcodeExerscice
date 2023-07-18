
let ar = [2, [[23], [5, 1, 12, 1]], [100]];

function lowest(val) {

  let flattenedArray = val.flat(Infinity);  //Very very important , we can make nested arrays to single array
                                        

  let smallestNumber = Math.min(...flattenedArray);      //find least num with single step

  let small = val[0];
  for (let i = 0; i < val.length; i++) {
    if (small > val[i]) {
      small = val[i];
    }
    for (let j = 0; j < val[i].length; j++) {
      if (small > val[i][j]) {
        small = val[i][j];
      }
      for (let k = 0; k < val[i][j].length; k++) {
        if (small > val[i][j][k]) {
          small = val[i][j][k];
        }
      }
    }
  }
  return small;
}

console.log(lowest(ar));
