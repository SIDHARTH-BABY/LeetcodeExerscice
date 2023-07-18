function islandPerimeter(val) {
  let newVal = val[0];
  // console.log(newVal);
  let length = 0;
  for (let i = 0; i < val.length; i++) {
    for (let j = 0; j < val[i].length; j++) {
      if (val[i][j] === 1) {
        length += 4;
        if (j > 0 && val[i][j - 1] === 1) {
          length -= 2;
        }
        if (i > 0 && val[i - 1][j] === 1) {
          length -= 2;
        }
      }
    }
  }
  return length;
}

const boxes = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(boxes));
