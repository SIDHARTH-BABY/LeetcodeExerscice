function validPar(val) {
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let res = [];
  for (let i = 0; i < val.length; i++) {
    if (obj[val[i]]) {
      res.push(obj[val[i]]);
    } else if (res[res.length - 1] === val[i]) {
      res.pop();
    } else {
      return false;
    }
  }
  if (res.length === 0) {
    return true;
  } else {
    return false;
  }
}

const val = "([])[";
console.log(validPar(val));
