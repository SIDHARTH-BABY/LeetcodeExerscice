function parantesis(val) {
  let hashMap = { "{": "}", "[": "]", "(": ")" };
  let stack = [];
  for (let i = 0; i < val.length; i++) {
    if (hashMap[val[i]]) {
      stack.push(hashMap[val[i]]);
      console.log(val[i]);
      console.log(stack);
    } else if (stack.length > 0 && stack[stack.length - 1] === val[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
console.log(parantesis("{"));
let statck = [")"];


