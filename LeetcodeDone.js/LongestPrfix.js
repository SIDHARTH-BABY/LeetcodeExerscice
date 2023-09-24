function longPrefix(str) {
  let prefix = "";
  for (let i = 0; i < str[0].length; i++) {
    let char = str[0][i];
    for (let j = 0; j < str.length; j++) {
      if (char != str[j][i]) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}

const strs = ["flower", "flow", "flight"];

console.log(longPrefix(strs));
