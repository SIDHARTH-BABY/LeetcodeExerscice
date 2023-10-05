const { log, init } = require("debug/src/node");

function repeatedString(str, n) {
  // Write your code here
  let initial = 0;
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      initial++;
    }
  }
  let rmdr = n % str.length;
console.log(rmdr);
  for (let i = 0; i < rmdr; i++) {
    if (str[i] === "a") {
      result++;
    }
  }
  result += Math.floor(n / str.length) * initial;
  return result;
}

const str = "abc";
const n = 10;
console.log(repeatedString(str, n));
