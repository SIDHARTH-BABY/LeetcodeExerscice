function singleNum(val) {
  if (val.length === 1) {
    return val;
  }
  let newVal = {};
  val.forEach((val) => {
    return (newVal[val] = (newVal[val] || 0) + 1);
  });

  for (let i = 0; i < val.length; i++) {
    if (newVal[i] === 1) {
      return i;
    }
  }
}

let val = [1,1,2,2,3];

console.log(singleNum(val));

//ith wrong annu because [-1,-1,-2] , kodthall kittnilaa, positive correct annu