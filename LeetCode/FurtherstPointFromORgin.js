function furthestDistanceFromOrigin(vals) {
  let lCount = 0;
  let rCount = 0;
  let uCount = 0;
  for (let i = 0; i < vals.length; i++) {
    if (vals[i] === "L") {
      lCount++;
    } else if (vals[i] === "R") {
      rCount++;
    } else {
      uCount++;
    }
  }
  const sum = lCount - rCount;
  if (sum < 0) {
     return sum * -1 + uCount;
  }
  const result = sum + uCount;
 

  return result;
}

const moves = "R_";
console.log(furthestDistanceFromOrigin(moves));
